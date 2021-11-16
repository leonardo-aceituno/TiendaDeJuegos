<template>
  <table class="table container">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Codigo</th>
        <th scope="col">Nombre</th>
        <th scope="col" v-if="ocultaCelda">Stock</th>
        <th scope="col">Precio</th>
        <th scope="col" v-if="mostrarBtn"></th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(producto, index) of productos"
        :key="index"
        :style="{ 'background-color': producto.color }"
        :class="producto.clase"
      >
        <th scope="row" v-text="index + 1"></th>
        <td>{{ producto.codigo }}</td>
        <td>{{ producto.nombre }}</td>
        <td v-if="ocultaCelda">{{ producto.stock }}</td>
        <td>${{ producto.precio }}</td>
        <td v-if="mostrarBtn">
          <button class="btn btn-secondary" @click="vender(producto)">
            Vender
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "productos",
  props: {
    productos: Array,
    mostrarBtn: { type: Boolean, default: false },
    ocultaCelda: { type: Boolean, default: true },
  },
  methods: {
    vender(producto) {
      this.$store.dispatch("vender", producto);
      console.log(producto);
    },
  },
};
</script>

<style></style>
