<template>
<div class ="container" >
   <div class=" columns padding">
      <div class = "column">
            <img class="img-grey" v-if="project.id % 2 == 0" src="../assets/project.jpg">
            <img class="img-grey" v-else src="../assets/project2.jpg">
      </div>
      <section class="column">
         <a class="button" @click="$router.go(-1)">
            <!-- <span class="icon">
               <i class="fab fa-github"></i>
            </span> -->
            <span>Back</span>
         </a>
         <div>
            <h1 class="title">{{project.title}}</h1>
            <h2 class="subtitle">
               A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
            </h2>
         </div>    
      </section>
   </div>
</div>
</template>

<script>
   export default {
      name:"Details",
      props: ["project"],
      methods: {
         goBack() {
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
         }
      }
   }
</script>

<style scoped>
   .padding{
      padding:12px;
   }
   img{
      border-radius:2%;
   }
</style>