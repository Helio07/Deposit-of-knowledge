<template>
    <div class="admin-pages">
        <PageTitle icon="" main="Administração do Sistema"
                sub="Cadastro & Cia"/>
        <div class="admin-pages-tabs">
            <b-card no-body>
                <b-tabs>
                    <b-tab title="Artigos" active>
                        <ArticleAdmin/>
                    </b-tab>
                    <b-tab title="Categoria">
                        <CategoryAdmin/>
                    </b-tab>
                    <b-tab title="Usuarios" active>
                        <UserAdmin/>
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle.vue'
import ArticleAdmin from './ArticleAdmin.vue'
import CategoryAdmin from './CategoryAdmin.vue'
import UserAdmin from './UserAdmin.vue'

export default {
    name: 'Adminpages',
    components: { PageTitle, ArticleAdmin, CategoryAdmin, UserAdmin}
}
</script>

<style>

</style>