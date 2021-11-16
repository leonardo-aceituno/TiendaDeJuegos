<template>
  <table class="table container" v-show='productos.length > 0'>
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Codigo</th>
        <th scope="col">Nombre</th>
        <th scope="col">Stock</th>
        <th scope="col">Precio</th>
        <!-- <th scope="col">Color</th> -->
        <!-- <th scope="col">descatacado</th> -->
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
        <td v-text="producto.codigo"></td>
        <td v-text="producto.nombre"></td>
        <td v-text="producto.stock"></td>
        <td v-text="producto.precio"></td>
        <!-- <td v-text="producto.color"></td> -->
        <!-- <td v-text="producto.destacado"></td> -->
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "productos",
  props: {
    productos: Array,
  },
};
</script>

<style></style>
