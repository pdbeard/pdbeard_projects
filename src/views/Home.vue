<template>
  <div id="Home" class ="container">
    <Projects v-bind:projects="projects"/>
 </div>
</template>

<script>
import Projects from '../components/Projects';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    Projects
  },
  data() {
    return{
      projects: []
    }
  },
  methods:{
    deleteProject(id){
      axios.delete('https://jsonplaceholder.typicode.com/todos/${id}')
      .then(res => this.projects=this.projects.filter(project => project.id !== id))
      .catch(err => console.log(err));
      
    },
    addProject(newProject) {
      const {title, completed} = newProject;
      axios.post('https://jsonplaceholder.typicode.com/todos', {
        title, 
        completed
      })
        .then(res => this.projects = [...this.projects, res.data])
        .catch(err => console.log(err));

    }
  },
  created(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=16')
      .then(res => this.projects = res.data)
      .catch(err => console.log(err));

  }

}
</script>

<style>
#home{
background-color: black;
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
