<template>
  <div id="app" class="container has-navbar-fixed-top">
    <meta http-equiv="X-UA-Compatible" content="IE=9">
    <div class="" >
      <Header />
    </div> 
    <div class="nav-fix">
        <transition
          name="fade"
          mode="out-in"
        >
          <router-view/>
        </transition>
    </div>
 </div>
</template>

<script>
import 'bulma/css/bulma.css';
import Header from './components/layout/Header';
export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
.nav-fix{
  padding-top:5%;
}
 @media screen 
  and (max-width : 1023px) {
    .nav-fix{
      padding-top:10%;
    }
  }
</style>
