<!-- Forma #1 de traer datos de cualquier API usando Async 
 y await, todo dentro del mismo documento, funcional
 pero se recomienda usarlo de forma modulada. Como se presenta
 en el componente modul -->

<template>
    <div class="home">
        <img v-for="(placeholder, i) in placeholders" :key="i" :src="placeholder.thumbnailUrl" :alt="placeholder.title">
    </div>
</template>
<script>
import axios from 'axios'
export default {

    name: 'Home',
    data(){
        return{
            placeholders: []
        }
    },
    methods:{
       async getPlaceholders(){
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos/?_limit=12')
        this.placeholders = response.data
        console.log(this.placeholders);
        }
    },
    created(){
        this.getPlaceholders()
    }
}
</script>
<style>
.home{
        border: 1px solid #d9d9d9;
        padding: 20px;
        margin-bottom: 10px;
}
</style>