<!-- Forma #2 de traer datos usando el let y el this de 
 cualquier API -->

<template>
    <div class="post">
        <span v-for="post in posts" :key="post" > 
            <h3>
                {{post.title}}
            </h3>
            <p>
                {{post.body}}
            </p>
            <hr>
        </span>
    </div>
</template>
<script>

//importamos Axios
import axios from 'axios';


export default {
    name: 'Index',
    data(){
        return{
            posts: [
                
            ]
        }
    },
    mounted(){
            let vue = this;
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function(response){
                vue.posts = response.data;
                console.log(vue.posts);
            }),
            axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(function(response){
                vue.posts = response.data;
                console.log(vue.posts);
            })
            
    }
}
</script>
<style>
    .post{
        border: 1px solid #d9d9d9;
        padding: 20px;
        margin-bottom: 10px;
    }
</style>