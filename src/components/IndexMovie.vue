<template>
    <div class="body">
        <!--<img v-for="(movie,i) in movies" :key="i" :src="" :alt="">-->
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'IndexMovie',
    data(){
        return{
            movies:[]
        }
    },
    methods:{
        async getmovies(){
            const response = axios.get('http://files.tmdb.org/p/exports/movie_ids_04_28_2017.json.gz')
            this.movies = response.data
            console.log(this.movies)
        }
        
    },
    created(){
        this.getmovies()
    }

}
</script>

})
