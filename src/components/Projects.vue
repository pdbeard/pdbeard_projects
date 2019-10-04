<template>
    <div class="columns is-multiline is-gapless">
        <div class="column is-half" v-bind:key="project.id" v-for="project in projects">
            <ProjectItem v-bind:project="project" v-on:del-project="$emit('del-project', project.id)" />
        </div>
    </div>    
</template>

<script>
import ProjectItem from './ProjectItem.vue'
export default {
    name: "Projects",
    components: {
        ProjectItem
    },
    props: ["projects"]
}
</script>

<style scoped>
.enable-wrap{
    flex-wrap: wrap;
}

.add-styles{
    padding:20px;
}
</style>