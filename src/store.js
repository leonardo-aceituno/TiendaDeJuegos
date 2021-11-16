import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    ventas: [],
    totalVentas: 0,
    productos: [{
        codigo: "0001",
        nombre: "Sekiro",
        stock: 100,
        precio: 30000,
        color: "red",
        destacado: "true",
        clase: 'table-danger'
      },
      {
        codigo: "0002",
        nombre: "Fifa 22",
        stock: 100,
        precio: 25000,
        color: "blue",
        destacado: "false",
        clase: 'table-primary'
      },
      {
        codigo: "0003",
        nombre: "Gears of War 4",
        stock: 100,
        precio: 15000,
        color: "green",
        destacado: "true",
        clase: 'table-success'
      }, {
        codigo: "0004",
        nombre: "Mario Tennis Aces",
        stock: 100,
        precio: 35000,
        color: "yellow",
        destacado: "false",
        clase: 'table-warning'
      }, {
        codigo: "0005",
        nombre: "Bloodborne",
        stock: 100,
        precio: 10000,
        color: "blue",
        destacado: "false",
        clase: 'table-primary'
      }, {
        codigo: "0006",
        nombre: "Forza Horizon",
        stock: 1,
        precio: 20000,
        color: "red",
        destacado: "true",
        clase: 'table-danger'
      },
    ]
  }, // End State

  getters: {
    buscarProducto: (state) => (codigo) => {
      return state.productos.filter((producto) => {
        return producto.codigo == codigo
      })
    },

    stockTotal: (state) => {
      return state.productos.reduce((acumulador, productos) => {
        acumulador = acumulador + productos.stock
        return acumulador
      }, 0)
    },

    productosEnStock: (state) => {
      return state.productos.filter((producto) => {
        return producto.stock > 0
      })
    },

    cantProductosEnStock: (state, getters) => {
      return getters.productosEnStock.length
    },

    cantVentas: state => {
      return state.ventas.length
    }

  }, // End Getters

  mutations: {
    venderProducto(state, producto) {
      state.productos.forEach((p) => {
        if (p.codigo === producto.codigo && p.stock > 0) {
          p.stock--
        }
      })
    },

    actualizarTotal(state, producto) {
      state.totalVentas += producto.precio
    }
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    async vender({commit,state,dispatch}, producto) {
      await dispatch('procesarVenta', producto).then(() => {
        alert('venta exitosa')
      }).catch(() => {
        alert('Venta rechazada. No hay stock o el producto no existe')
      })
      dispatch('actualizarTotal', producto)
    },

    async procesarVenta({commit,state}, producto) {
      return new Promise((resolve, reject) => {
        let tiempoEjecucion = Math.floor((Math.random() * 3000) + 1)
        setTimeout(() => {
          let resultado = false
          state.productos.forEach((p) => {
            if (p.codigo == producto.codigo && p.stock > 0) {
              commit('venderProducto', producto)
              resultado = true
              state.ventas.push(producto)
            }
          })
          if (resultado) resolve()
          else reject()
        }, tiempoEjecucion);
      })
    },

    actualizarTotal({commit}, producto) {
      // eslint-disable-next-line no-unused-vars
      return new Promise((resolve, reject) => {
        let tiempoEjecucion = Math.floor((Math.random() * 3000) + 1)
        setTimeout(() => {
          commit('actualizarTotal', producto)
        }, tiempoEjecucion);
      })
    }

  } // End Action
});

export default store;