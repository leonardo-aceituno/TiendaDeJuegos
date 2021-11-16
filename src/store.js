import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
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
        stock: 10,
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
      return state.productos.reduce((acumulador,productos) => {
        acumulador = acumulador + productos.stock
        return acumulador
      },0)
    }
  }, // End Getters

  mutations: {},
  actions: {}
});

export default store;