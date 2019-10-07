<template>
<div class ="container" >
   <div class=" columns padding">
      <div class = "column">
         <img class="img-grey" v-bind:src="require('../assets/images/'+project.img)" v-bind:alt="project.img">
         <div class="tags">
            <span class="tag" v-bind:key="tech" v-for="tech in project.tech">{{tech}}</span>
         </div>
      </div>
      <section class="column">
         <a class="button" @click="$router.go(-1)">
            <span>Back</span>
         </a></br></br>
         <div>
            <h1 class="title">{{project.title}}</h1>
            <p v-html="project.desc"></p></br>
            <a :href="project.url" target="_blank">See the Project</a>
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
      -webkit-box-shadow: 0 10px 6px -6px #777;
      -moz-box-shadow: 0 10px 6px -6px #777;
      box-shadow: 0 10px 6px -6px #777;
   }
</style>