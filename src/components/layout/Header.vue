<template>
    <!-- <header class="header">
        <h1>Patrick Beard</h1>
        <div id="nav">
            <router-link to="/">Projects</router-link>| 
            <router-link to="/about">About</router-link>
        </div> 
    </header> -->

<nav class="navbar is-white" role="navigation" aria-label="main navigation">
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
    <div class="navbar-start tabs" :class="{ 'is-fullwidth': showNav }">
        <ul>
            <li >
                
                    <router-link class="is-active" to="/" tag="a">Projects</router-link>     
               
            </li>
            <li>
               
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
</style>