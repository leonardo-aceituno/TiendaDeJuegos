<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="../assets/img/logo.svg" alt="" width="100" height="24" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link :to="{ name: 'inicio' }" class="nav-link"
              >Inicio</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'busquedas' }" class="nav-link"
              >Búsquedas</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'ventas' }" class="nav-link"
              >Ventas</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'total' }" class="nav-link"
              >Total</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
