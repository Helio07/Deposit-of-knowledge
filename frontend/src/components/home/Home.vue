<template>
    <div class="home">
        <PageTitle icon="fa-solid fa-house" main="Dashboard" sub="Base de Conhecimento" />

        <div class="stats">
            <Stat title="Categorias" :value="stat.categories" icon="fa-solid fa-folder" color="#d54d50" />
            <Stat title="Artigos" :value="stat.articles" icon="fa-solid fa-file" color="#3bc480" />
            <Stat title="Usuarios" :value="stat.users" icon="fa-solid fa-user" color="#3282cd" />
        </div>
    </div>

</template>

<script>
import PageTitle from '../template/PageTitle.vue'
import Stat from './Stat.vue'
import axios from 'axios'
import { baseApiUrl } from '@/global'

export default {
    name: 'Home',
    components: { PageTitle, Stat },
    data: function () {
        return {
            stat: {}
        }
    },
    methods: {
        getStats() {
            axios.get(`${baseApiUrl}/stats`).then(res => this.stat = res.data)
        }
    },
    mounted() {
        this.getStats()
    }
}
</script>

<style>
    .stats {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>