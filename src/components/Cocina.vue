<template>
    <div>
        <!-- <---------cabeecera------------>
    <header>
       <img src="../assets/img/images.jpg" alt="banner" class="banner">
        <nav class="btn-menu">
            <button class="btn">Servicio en Proceso</button>
            <button class="btn">Servicio en Finalizado</button>
        </nav>
    </header>
    <!----------- fin de cabecera---------------->
    
    <!---------------- cuerpo y card-------------- -->
    <main class="card-mayor">
        <div class="card">
            <div class="nombres">
                <h4 class="cliente">EDUARDO
                    <span class="numeros-orden">1</span>
                </h4>
            </div>
            <p class="parrafo">Hamburguesa <span class="numeros-orden">1</span></p>
            <p class="parrafo">Hamburguesa <span class="numeros-orden">1</span></p>
            <p class="parrafo">Hamburguesa <span class="numeros-orden">1</span></p>
        </div>
        <div class="card">
            <div class="nombres">
                <h4 class="cliente">EDUARDO
                    <span class="numeros-orden">1</span>
                </h4>
            </div>
            <p class="parrafo">Hamburguesa <span class="numeros-orden">1</span></p>
            <p class="parrafo">Hamburguesa <span class="numeros-orden">1</span></p>
            <p class="parrafo">Hamburguesa <span class="numeros-orden">1</span></p>
        </div>
        <div class="card">
            <div class="nombres">
                <h4 class="cliente">EDUARDO
                    <span class="numeros-orden">1</span>
                </h4>
            </div>
            <p class="parrafo">Hamburguesa <span class="numeros-orden">1</span></p>
            <p class="parrafo">Hamburguesa <span class="numeros-orden">1</span></p>
            <p class="parrafo">Hamburguesa <span class="numeros-orden">1</span></p>
        </div>
        <div class="card">
            <div class="nombres">
                <h4 class="cliente">EDUARDO
                    <span class="numeros-orden">1</span>
                </h4>
            </div>
            <p class="parrafo">Hamburguesa <span class="numeros-orden">1</span></p>
            <p class="parrafo">Hamburguesa <span class="numeros-orden">1</span></p>
            <p class="parrafo">Hamburguesa <span class="numeros-orden">1</span></p>
        </div>

    </main>
    <!-------------------fin de cuerpo y card ---------------- -->

    <!------------ PIE DE PAGINA ---------------->
    <footer>
        <img src="../assets/img/images.jpg" alt="banner" class="pie-pagina">
    </footer>
    <!------------FIN DE  PIE DE PAGINA ---------------->

    </div>
</template>

<script>
import axios from 'axios'

export default {
    
}
</script>

<style lang="scss" scoped>
*{
    box-sizing: border-box;
    font-family: 'Cinzel', serif;}



body{
    padding: 0;
    margin: 0;
    font-family: 'Cinzel', serif;}


header{
    width: 100%;
    height: 200px;
    background-color: #10108a;
    /* border-radius: 10px; */
}
footer{

    width: 100%;
    height: 200px;
    background-color: #10108a;

}



.banner{
    width: 250px;
    height: 100px;
    max-width: 100%;
    /* background-image: url(./img/img-logo.jpg);
    background-repeat: no-repeat; */
    /* background-size: 330px; */
    background-position: center;
}

.btn-menu{
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}



.btn{
    background-color: #10108a;
    color: white;
    border: 1px solid white;
    height: 50px;
    width: 300px;
    cursor: pointer;
    font-size: 20px;
    margin: 10px;
}

/* .btn-2{
    background-color: #10108a;
    color: white;
    border: 1px solid white;
    height: 50px;
    cursor: pointer;
    font-size: 20px;
    margin: 10px;
} */

.btn:hover {
    background-color: #10108a;
    color: gold;
    transition: all 0.5s;
    border: 1px solid gold;
}

.card-mayor{
    width: 70%;
    height: 700px;
    border: 2px solid gold ;
    margin-top: 20px;
    /* border-radius: 20px; */
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr ;
    grid-template-rows: 1fr 1fr 1fr 1fr ;
    grid-gap: 20px;
    padding: 20px;
    overflow-y: auto;
    overflow-x: hidden;
}


.card{
    width: 100%;
    height: 200px;
    border: 2px solid gold;
    /* border-radius: 20px; */
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    margin: 10px;
}


    .parrafo{

    font-family: 'Racing Sans One', cursive;
    }


 .numeros-orden{
        color: red;
        padding-left: 10px;
    }


    .pie-pagina{
        width: 200px;
        height: 100px;
        background-color: #10108a;
        max-width:100%;
        /* background-image: url(./img/img-logo.jpg);
        background-position: center;
         background-repeat: no-repeat; */
          background-size: 500px;
    }


/* <---------modo respomsive------------> */
@media  (max-width: 800px){


    *{
        box-sizing: border-box;
        font-family: 'Cinzel', serif;
       }
    
    
    
    body{
        padding: 0;
        margin: 0;
    }
    

    
.btn{
    background-color: #10108a;
    color: white;
    border: 1px solid white;
    height: 50px;
    cursor: pointer;
    font-size: 15px;
    margin: 10px;
}

/* .btn{
    background-color: #10108a;
    color: white;
    border: 1px solid white;
    height: 50px;
    cursor: pointer;
    font-size: 15px;
    margin: 10px;
} */

    .parrafo{
        /* border-bottom: 1px solid black; */
        font-family: 'Racing Sans One', cursive;
        }

    .card-mayor{
        width: 70%;
        height: 700px;
        border: 2px solid gold ;
        margin-top: 10px;
        /* border-radius: 20px; */
        margin-left: auto;
        margin-right: auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr ;
        grid-template-rows: 1fr 1fr 1fr 1fr ;
        grid-gap: 20px;
        padding: 10px;
        overflow-y: scroll;
        margin-bottom: 20px;
        padding: 10px;
    }

    .card{
        width: 100%;
        height: 200px;
        border: 2px solid gold;
        /* border-radius: 20px; */
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;  
        grid-column: 1  / -1;  
    }

        .numeros-orden{
            color: red;
            padding-left: 10px;
        }


        .logo-inferior{
            width: 100%;
            background-color: #10108a;
            height: 100px;
        }

        .pie-pagina{
            width: 100%;
            height: 150px;
            background-color: #10108a;
            /* background-image: url(./img/img-logo.jpg);
            background-position: center;
             background-repeat: no-repeat; */
              background-size: 400px;
        }
    
}


</style>>

