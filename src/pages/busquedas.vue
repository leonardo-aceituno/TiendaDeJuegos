<template>
  <div class="container pt-5">
    <div class="my-5">
      <h2 class="mb-4">Buscar :</h2>
      <input
        type="text"
        v-model="buscarPorCodigo"
        placeholder="ingresar codigo"
      />
      <productos
        v-if="buscarProducto(buscarPorCodigo).length > 0"
        :productos="buscarProducto(buscarPorCodigo)"
      ></productos>
    </div>

    <hr />
    <div class="my-5">
      <h2 class="mb-4">Cantidad de juegos totales y de stock total:</h2>
      <div class="d-flex justify-content-around">
        <div class="alert alert-warning" role="alert">
          <h4>Cantidad de juegos: {{ $store.state.productos.length }}</h4>
        </div>

        <div class="alert alert-info" role="alert">
          <h4>Stock disponible: {{ stockTotal }}</h4>
        </div>
      </div>
    </div>

    <hr />
    <div class="my-5">
      <h2>Listado de Juegos</h2>
      <productos :productos="$store.state.productos"></productos>
    </div>
  </div>
</template>

<script>
import productos from "../components/productos";
import { mapGetters } from "vuex";

export default {
  name: "busquedas",
  data() {
    return {
      buscarPorCodigo: "",
    };
  },
  components: {
    productos,
  },

  computed: {
    ...mapGetters(["stockTotal", "buscarProducto"]),
  },

  methods: {},
};
</script>

<style></style>
