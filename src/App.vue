<template>
  <div id="app" class="container">
    <meta http-equiv="X-UA-Compatible" content="IE=9">
    <div id="nav">
      <Header />
    </div> 
      <transition
        name="fade"
        mode="out-in"
      >
      <router-view/>
    </transition>
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
/* * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #ffffff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background: #666;
} */
</style>
