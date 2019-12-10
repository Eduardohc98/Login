<template>
    <div class="login">
        <div class="card">

            <p class="text"></p>
           
            <form class="card-login" v-on:submit.prevent>

                <div>
                    <input type="text" name="username" placeholder="Ingresa Usuario" class="input-text" v-model="username">
                </div>

                <div>
                    <input type="password" name="password" placeholder="Ingresa Contraseña" class="input-text" v-model="password">
                </div>

                 <button class="input-text btn-input" @click="sendInfo">Iniciar Sesión</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'



export default {
    data(){
        return{
            username: '',
            password:''
        }
    },
    methods:{
            sendInfo: function(e){
                if(this.username == '' && this.password == '') return alert('te falta completar datos')
                const response = axios.post('https://bembosv2.herokuapp.com/colaborador/', {
                    username: this.username,
                    password: this.password
                })
                console.dir(response)
            }
    },
    computed:{

    }
    
}
</script>

<style>
.login{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0;
    padding: 0; 
    background-image: url('https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d9231147377493.58785b356a28b.png');
    background-size: cover;
}
.text{
    background-image: url('https://i2.wp.com/www.elpoderdelasideas.com/wp-content/uploads/bembos_logo_detalles-600x287.png?resize=600%2C287');
    width: 120px;
    height: 60px;
    background-size: cover;
    background-repeat: no-repeat;
    /* opacity: 0.9; */
}
.card{
    width: 350px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: #02168a;
    /* opacity: 0.9; */
    border-radius: 10px;
    /* background-color: black */
}
.card-login{
    width: 300px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;    
}
.input-text{
    width: 230px;
    height: 30px;
    text-align: center;
    border-radius: 6px;
    border: 2px solid white;
    font-family: sans-serif;
    outline: none;
    
}
.btn-input{
    background:  rgb(255, 166, 0);
    color: white;
    border: 2px solid rgb(255, 166, 0);
    cursor: pointer;
}



</style>