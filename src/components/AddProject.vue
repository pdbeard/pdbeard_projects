<template>
    <div>
        <form @submit="addProject">
            <input type="text" v-model="title" name="title" placeholder="Add Todo...">
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>

<script>
export default {
    name: "AddProject",
    data(){
        return{
            title:''
        }
    },
    methods: {
        addProject(e){
            e.preventDefault();
            const newProject = {
                title: this.title,
                completed: false
            }
            // Send to parent
            this.$emit('add-project', newProject);
            this.title ='';
        }
    }
}
</script>

<style scoped>
    form {
        display:flex;
    }

    input[type="text"] {
        flex: 10;
        padding: 5px;
    }
</style>