<template>
    <header class="header header_title">
      <h1>{{titulo}}</h1>
      <h2>{{subTitulo}}</h2>
    </header>
</template>

<script>
    export default {
        data(){
            return {
                titulo: '404',
                subTitulo: 'Pagina no disponible'
            }
        }
    };
</script>

<style>
    .header {
    background-image: url("../assets/img/videojuego-pacman.jpg");
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
    background-size: cover;
    opacity: 0.9;
    }

    .header_title {
    text-align: center;
    color: #ffffff;
    padding-top: 9rem;
    text-shadow: 0.01em 0.01em 0.1em #e56353;
    font-size: 70px;
    }
</style>