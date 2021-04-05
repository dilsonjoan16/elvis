<template>
    <div class="main">
        <img v-for="pokemon in pokemons" :key="pokemon" :src="pokemon.url" :alt="pokemon.name">
    </div>    
</template>
<script>
import axios from 'axios';
export default {
    name: 'PokeApi',
    data(){
        return{
            pokemons:[]
        }
    },
    mounted(){
        axios.get('http://pokeapi.co/api/v2/pokemon')
        .then(function(response){
            this.pokemons = response.data;
            console.log(this.pokemons);
        })
        .catch(function(error){
            console.log(error);
        })
    },
    methods:{
        
    }
}
</script>
<style>

</style>