import { reactive } from 'vue'

export const store = reactive({
    movieApi: 'https://api.themoviedb.org/3/search/movie?api_key=aa96e5802311da937f2a7065ffd89de9&query=',
    searchMovie: '',
})