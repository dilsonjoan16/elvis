import TheMoviedb from '@/services/TheMoviedb'

export default{
    getTheMoviedb(){
        return TheMoviedb().get('/?_limit=12')
    }
}