<template>
    <div class="auth-content">
        <div class="auth-modal">
            <img src="@/assets/logo.png" width="200" alt="logo">
            <hr>
            <div class="auth-title">{{ showSignup ? 'Cadastro' : 'Login' }}</div>

            <input v-if="showSignup" v-model="user.name" type="text" placeholder="Nome">
            <input v-model="user.email" name="email" type="text" placeholder="E-mail">
            <input v-model="user.password" name="password" type="password" placeholder="Senha">
            <input v-if="showSignup" v-model="user.confirmPassword" type="password" placeholder="Confirme a Senha">

            <button v-if="showSignup" @click="signup">Registrar</button>
            <button v-else @click="signin">Entrar</button>

            <a href @click.prevent="showSignup = !showSignup">
                <span v-if="showSignup">Já tem cadastro ? Acesse o Login!</span>
                <span v-else>Não tem cadastro? Registre-se aqui!</span>
            </a>
        </div>
    </div>
</template>

<script>
import { baseApiUrl, ShowError, userKey } from '@/global'
import axios from 'axios'

export default {
    name: 'Auth',
    data: function () {
        return {
            showSignup: false,
            user: {},
        }
    },
    methods: {
        signin() {
            axios.post(`${baseApiUrl}/signin`, this.user)
                .then(res => {
                    this.$store.commit('setUser', res.data)
                    localStorage.setItem(userKey, JSON.stringify(res.data))
                    this.$router.push({ path: '/' })
                })
                .catch(ShowError)
        },
        signup() {
            axios.post(`${baseApiUrl}/signup`, this.user)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.user = {}
                    this.showSignup = false
                })
                .catch(ShowError)
        }
    }
}
</script>

<style>
.auth-content {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.auth-modal {
    background-color: #DDD;
    width: 350px;
    padding: 35px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);

    display: flex;
    flex-direction: column;
    align-items: center;
}

.auth-title {
    font-size: 1.2rem;
    font-weight: 100;
    margin-top: 10px;
    margin-bottom: 15px;
}

.auth-modal input {
    border: 2px solid transparent;
    width: 100%;
    height: 2.5em;
    padding-left: 0.8em;
    margin-bottom: 20px;
    outline: none;
    overflow: hidden;
    background-color: #F3F3F3;
    border-radius: 10px;
    transition: all 0.5s;
}

.auth-modal input:hover,
.auth-modal input:focus {
    border: 2px solid #4A9DEC;
    box-shadow: 0px 0px 0px 7px rgb(74, 157, 236, 20%);
    background-color: white;
}

.auth-modal button {
    align-self: center;
    background-color: #2460ae;
    color: #FFF;
    padding: 5px 15px;
    text-transform: uppercase;
    text-decoration: none;
    padding: 10px 30px;
    border: 1px solid;
    border-radius: 25px;
    display: inline-block;
    transition: all .2s;
    position: relative;
}

.auth-modal button:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(27, 27, 27, .5);
}

.auth-modal button:active {
    transform: translateY(-3px);
}

.auth-modal button::after {
 content: "";
 display: inline-block;
 height: 100%;
 width: 100%;
 border-radius: 100px;
 top: 0;
 left: 0;
 position: absolute;
 z-index: -1;
 transition: all .3s;
}

.auth-modal button:hover::after {
 background-color: #2460ae;
 transform: scaleX(1.4) scaleY(1.5);
 opacity: 0;
}

.auth-modal a {
    margin-top: 35px;
}

.auth-modal hr {
    border: 0;
    width: 100%;
    height: 1px;
    background-image: linear-gradient(to right,
            rgba(120, 120, 120, 0),
            rgba(120, 120, 120, 0.75),
            rgba(120, 120, 120, 0));
}
</style>