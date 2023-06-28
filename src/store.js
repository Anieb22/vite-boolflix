import { reactive } from 'vue';

export const store = reactive({

    baseUrl: 'https://api.themoviedb.org',
    apiKey: '?api_key=aa96e5802311da937f2a7065ffd89de9',
    baseUrlImage: 'https://image.tmdb.org/t/p/w185/',

    apiMovie: '/3/search/multi',

    Query: '&query=',

    search_title_words: "",

    filmList: [],

})