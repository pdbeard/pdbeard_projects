<template>
<div>
    <router-link :to="{name: 'details', params:{project: project}}" tag="div">   
        <div class="tile is-parent project-tile">
            <article class="tile is-child ">
                <h1 class="title font-trans" v-if="project.title.length < 21">{{project.title}}</h1>
                <h1 class="title font-trans" v-else>{{project.title.substring(0,18)+"..."}}</h1> 
                <p class="subtitle font-trans">With an image</p>
                <figure class="image is-4by3">
                <img class="img-grey" src="https://images.unsplash.com/photo-1569817480337-01a8b22cd8d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80">
                </figure>
            </article>
        </div>
    </router-link>
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
    .project-tile{
        background-color:#fff;
        transition: background-color .3s;
    }
    .project-tile:hover{
        background-color:#333;
        transition: background-color .3s;
    }
    .font-trans{
        color:black;
    }
    .font-trans:hover{
        color:white;
        transition: color .3s;
    }
    .img-grey{
        filter: grayscale(100%);
        -moz-filter: grayscale(100%);
        -ms-filter: grayscale(100%);
        -o-filter: grayscale(100%);
        filter: gray; /* IE6-9 */
        -webkit-filter: grayscale(100%); /* Chrome 19+, Safari 6+, Safari 6+ iOS */
        transition: filter .3s;
    }
    .img-grey:hover{
        filter: grayscale(0%);
        -moz-filter: grayscale(0%);
        -ms-filter: grayscale(0%);
        -o-filter: grayscale(0%);
        filter: none ; /* IE6-9 */
        zoom:1; /* needed to trigger "hasLayout" in IE if no width or height is set */
        -webkit-filter: grayscale(0%); /* Chrome 19+, Safari 6+, Safari 6+ iOS */
        transition: filter .3s;
    }

    /* .tile{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    } */

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