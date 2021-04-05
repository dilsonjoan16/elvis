<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-6 col-lg-4">
                <div v-for="(movie,key) in movies" :key="key" class="card" style="width: 18rem;">
                    <img src="{{movie.poster_path}}" class="card-img-top" alt="{{movie.title}}">
                    <div class="card-body">
                        <h5 class="card-title">
                            {{movie.title}}
                        </h5>
                        <p class="card-text">
                            {{movie.sinopsis}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TheMovieService from '@/services/TheMovieService'
export default {
    name: 'Movie',
    data(){
        return{
            movies:[]
        }
    },
    methods:{
        async getTheMoviedb(){
            const response = await TheMovieService.getTheMoviedb()
            this.movies = response.data
            console.log(this.movies);
        }
    },
    created(){
        this.getTheMoviedb()
    }
}
</script>
<style>

</style>