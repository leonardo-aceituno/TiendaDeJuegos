<template>
  <div class="container pt-5">
    <div class="my-5 alert alert-warning" role="alert">
      <h4>Cantidad de juegos vendidos: {{ cantVentas }}</h4>
    </div>

    <div class="my-5 alert alert-success" role="alert">
      <h4>Total Ventas: ${{ totalVentas }}</h4>
    </div>

    <div class="my-5">
      <div v-if="ventas.length > 0">
        <h4>Juegos vendidos</h4>
        <productos
          :productos="ventas"
          :mostrarBtn="mostrarBtn"
          :ocultaCelda="ocultaCelda"
        ></productos>
      </div>
      <p v-else></p>
    </div>
  </div>
</template>

<script>
import productos from "../components/productos";

export default {
  name: "total",
  data() {
    return {
      mostrarBtn: false,
      ocultaCelda: false,
    };
  },
  components: {
    productos,
  },

  computed: {
    ventas() {
      return this.$store.state.ventas;
    },
    cantVentas() {
      return this.$store.getters.cantVentas;
    },
    totalVentas() {
      return this.$store.state.totalVentas;
    },
  },
};
</script>

<style></style>
