<template>
<div>
    <router-link :to="{name: 'details', params:{project: project}}" tag="div">   
        <div class="tile is-parent project-tile">
            <article class="tile is-child ">
                <figure class="image is-2by1 ">    
                    <img class="img-grey" v-if="project.id % 2 == 0" src="../assets/project.jpg">
                    <img class="img-grey" v-else src="../assets/project2.jpg">
                </figure>
                <h1 class="title title-font" v-if="project.title.length < 32"><span>{{project.title}}</span></h1>
                <h1 class="title title-font" v-else><span>{{project.title.substring(0,32)+"..."}}</span></h1> 
            </article>
        </div>
    </router-link>
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
    data() {
        return{
            project_image1 :'../assets/project.jpg',
            project_image2 : '../assets/project2.jpg'
        }
    }
}
</script>

<style scoped>
    .project-tile{
        position: relative;
        width:100%;
        background-color:#fff;
        transition: background-color .3s;
    }
    /* .project-tile:hover{
        background-color:#333;
        transition: background-color .3s;
    } */
    .title-font{
        position: absolute;
        top: 80%; 
        left: 0; 
        width: 100%; 
        color:white;
    }
    
    .title-font span { 
        color: white; 
        font: bold 24px/45px Helvetica, Sans-Serif; 
        letter-spacing: -1px;  
        background: rgb(0, 0, 0); /* fallback color */
        background: rgba(0, 0, 0, 0.7);
        padding: 10px; 
    }  
    .img-grey{
        filter: grayscale(100%);
        -moz-filter: grayscale(100%);
        -ms-filter: grayscale(100%);
        -o-filter: grayscale(100%);
        filter: gray; /* IE6-9 */
        -webkit-filter: grayscale(100%); /* Chrome 19+, Safari 6+, Safari 6+ iOS */
        transition: filter .3s;

        border-radius:2%;

        -webkit-box-shadow: 0 10px 6px -6px #777;
        -moz-box-shadow: 0 10px 6px -6px #777;
        box-shadow: 0 10px 6px -6px #777;
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

    /* .project-item { 
        background: #f4f4f4;
        padding: 10px;
        border-bottom: 1px #ccc dotted;
    } */

</style>