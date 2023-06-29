<script>
import { store } from '../store.js'

export default {
    props: {
        searchedFilm: Object,
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template lang="">
    <div class="col-3">
        <div class="card m-2" style="width: 18rem;">
           
            <img :src="searchedFilm.poster_path === null || searchedFilm.poster_path === undefined  ? 'src/assets/img/avatar-11a1a68c331386a31a9f76c7936267a5.jpg' : store.baseUrlImage + searchedFilm.poster_path" >
            
            <ul class="info p-4" > 
                <li id='movie-title' >
                    <h4>{{ searchedFilm.title || searchedFilm.name }}</h4> 
                </li>
                <li>
                    <h6> Titolo Originale:</h6>   
                    {{ searchedFilm.original_title || searchedFilm.original_name}}
                </li>
                <li >
                    <h6> Film / Serie: </h6>
                    <span class="text-capitalize ms-1 ">
                     {{searchedFilm.media_type }}
                    </span> 
                </li>
                <li>
                    <h6> Lingua: </h6>
                    <img :src=" '/flag/' +  searchedFilm.original_language + '_16.png'" class="ms-2" /> 
                </li>
        
                <li> 
                    <h6> Rating: </h6>
                    {{searchedFilm.vote_average}}
                </li>
                <li id="movie-overview">

                    <div class="text-center mt-4 fw-bolder"> Descrizione </div> 
                    {{ searchedFilm.overview }}
                </li>

            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    .poster {
        aspect-ratio: 2/3;
        width: 342px
    }

    position: relative;

    .info {
        position: absolute;
        top: 0;
        left: 0;
        display: none;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.835);
        overflow: auto;
        color: white;
        font-family: 'Roboto', sans-serif;

        #movie-title {
            text-transform: uppercase;
            text-align: center;
            margin-bottom: 20px
        }

        #movie-overview {
            text-align: justify;
            margin-bottom: 40px;
        }

        h6 {
            display: inline-block;
            color: rgb(176, 176, 176)
        }
    }
}

.card:hover .info {
    display: block
}
</style>
