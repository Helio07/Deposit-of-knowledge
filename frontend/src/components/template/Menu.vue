<template>
    <aside class="menu" v-show="isMenuVisible">
        <div class="menu-filter">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" size="md" style="color: #AAA;" />
            <input type="text" placeholder="Digite para filtrar..."
                v-model="treeFilter" class="filter-field"
            >
        </div>
        <Tree :data="treeData" :options="treeOptions"
            :filter="treeFilter" ref="tree" />
    </aside>
</template>

<script>
import { mapState } from 'vuex';
import Tree from 'liquor-tree'
import { baseApiUrl } from '@/global'
import axios from 'axios'

export default {
    name: 'Menu',
    components: { Tree },
    computed: mapState(['isMenuVisible']),
    data: function () {
        return {
            treeFilter:'',
            treeData: this.getTreeData(),
            treeOptions: {
                propertyNames: { 'text': 'name' },
                filter: {
                    emptyText: 'Categoria nâo encontrada'
                }
            }
        }
    },
    methods: {
        getTreeData() {
            const url = `${baseApiUrl}/categories/tree`
            return axios.get(url).then(res => res.data)
        },
        onNodeselected(node){
            this.$router.push({
                name: 'articlesByCategory',
                params: { id: node.id }
            })

            if(this.$mq === 'xs' || this.$mq === 'sm'){
                this.$store.commit('toggleMenu', false)
            }
        }
    },
    mounted() {
        this.$refs.tree.$on('node:selected', this.onNodeselected)  
    },
}
</script>

<style>
.menu {
    grid-area: menu;
    background: linear-gradient(to right, #232526, #414345);

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}

.menu span,
.menu span:hover {
    color: #CCC;
    text-decoration: none;
}

.menu .tree-node:not(.selected)>.tree-content:hover {
    background-color: rgba(0, 0, 0, 0.8);
}

.menu .tree-node.selected>.tree-content {
    background-color: rgba(0, 0, 0, 0.8);
}

.tree-arrow.has-child {
    filter: brightness(10);
}

.menu .menu-filter {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 20px;
    padding-bottom: 8px;
    border-bottom: 1px solid #AAA;
}

.menu input {
    color: #CCC;
    font-size: 1.3rem;
    border: 0;
    outline: 0;
    width: 100%;
    background: transparent;
    padding-left: 10px;
}

.tree-filter-empty {
    color: #CCC;
    font-size: 1.2rem;
    margin-left: 20px;
}
</style>