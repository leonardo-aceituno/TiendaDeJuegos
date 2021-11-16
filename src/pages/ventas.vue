<template>
  <div class="container pt-5">
    <div class="my-5">
      <div class="alert alert-warning" role="alert">
        <h4>Cantidad de juegos con stock: {{ cantProductosEnStock }}</h4>
      </div>
    </div>

    <div class="my-5">
      <h3 class="mb-4">Venta de juegos</h3>
      <productos :productos="productosEnStock" mostrarBtn />
    </div>
  </div>
</template>

<script>
import productos from "../components/productos";
import { mapGetters } from "vuex";

export default {
  name: "ventas",
  components: {
    productos,
  },
  computed: {
    productos() {
      return this.$store.state.productos;
    },
    ...mapGetters(["productosEnStock", "cantProductosEnStock"]),
  },
};
</script>

<style></style>
