<template>
<nav class="navbar is-fixed-top is-white" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="#">PATRICK BEARD
    </a>
    <a role="button" class="navbar-burger burger" data-target="navMenu" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  <div id="navMenu" class="navbar-menu" :class="{ 'is-active': showNav }">
    <div class="navbar-start tabs is-fullwidth">
        <ul>
            <li @click="showNav=!showNav">
                <router-link class="" to="/" tag="a">Projects</router-link>     
            </li>
            <li @click="showNav=!showNav"> 
                <router-link class="" to="/about" tag ="a">About</router-link>
            </li>
        </ul>
    </div>
  </div>
</nav>
</template>

<script>
  export default {
      name:"Header",
      data() {
          return{
              showNav:false
          } 
      }
  }
</script>

<style scoped>
  ul{
    border-bottom-style:none;
  }

  @media screen 
  and (max-width : 1023px) {
    .navbar-menu {
        display: block;
        opacity: 0;

        position: absolute;   /* or float: left; width: 100%;*/
        left: 0;
        right: 0;

        transform: translateY(-50%);
        transition: all .4s ease-in-out;
        pointer-events: none;
    }

    .navbar-menu.is-active {
        opacity: 1;
        transform: none;
        pointer-events: auto;
    }
  }
</style>