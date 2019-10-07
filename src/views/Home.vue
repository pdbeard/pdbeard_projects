<template>
  <div class ="container">
    <Projects v-bind:projects="projects"/>
 </div>
</template>

<script>
import Projects from '../components/Projects';
import data from '../data/project_data.js'
// import axios from 'axios';

export default {
  name: 'Home',
  components: {
    Projects
  },
  data() {
    return data;
  }

  // methods:{
  //   deleteProject(id){
  //     axios.delete('https://jsonplaceholder.typicode.com/todos/${id}')
  //     .then(res => this.projects=this.projects.filter(project => project.id !== id))
  //     .catch(err => console.log(err));
      
  //   },
  //   addProject(newProject) {
  //     const {title, completed} = newProject;
  //     axios.post('https://jsonplaceholder.typicode.com/todos', {
  //       title, 
  //       completed
  //     })
  //       .then(res => this.projects = [...this.projects, res.data])
  //       .catch(err => console.log(err));

  //   }
  // },
  // created(){
  //   axios.get('https://jsonplaceholder.typicode.com/todos?_limit=15')
  //     .then(res => this.projects = res.data)
  //     .catch(err => console.log(err));

  // }

}
</script>

<style>
</style>
