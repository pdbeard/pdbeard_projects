<template>
<div>
    <div class="tile is-parent">
        
            <article class="tile is-child notification is-info">
                <router-link :to="{name: 'details', params:{projectId: project.id}}" tag="p">{{project.title}} </router-link>
                <p class="subtitle">With an image</p>
                <figure class="image is-4by3">
                <img src="https://images.unsplash.com/photo-1569817480337-01a8b22cd8d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80">
                </figure>
            </article>
       
    </div>

    <!-- <div  v-bind:class="{'is-complete':project.completed}" >
        <input type="checkbox" v-on:change="markComplete">
        <div class="title">{{project.title}}</div>
        <p>HELLO PRIOJECTSS!!</p>
        <button @click="$emit('del-project', project.id)" class="del">x</button>
    </div> -->
</div>
</template>

<script>
import Details from '../views/Details.vue'
export default {
    name: "ProjectItem",
    comments:{
        Details
    },
    props:["project"],
    methods:{
        markComplete(){
            this.project.completed = !this.project.completed;
        }
    }
}
</script>

<style scoped>

    .project-item { 
        background: #f4f4f4;
        padding: 10px;
        border-bottom: 1px #ccc dotted;
    }

    .is-complete {
        text-decoration: line-through;
    }
    
    .del {
        background: #ff0000;
        color: #fff;
        border: none;
        padding: 5px 9px;
        border-radius: 50%;
        cursor: position;
        float: right;   
    }
    .add-styles{
        padding:20px;
    }

</style>