<!-- Dynamisk underside, som vises alt efter hvilket portfolio projekt.  -->

<template>
    <div>
        <div v-if="!specificPortfolioItem">
            fejl
        </div>
        <div v-else>
            <h1>
            {{ specificPortfolioItem.title }}
        </h1>
        <p>
            {{ specificPortfolioItem.description }}
        </p>
        <p>
            {{ specificPortfolioItem.category }}
        </p>
        <img :src="specificPortfolioItem.image" alt="">
        </div>

    </div>
</template>

<script setup>
    import {ref} from 'vue'
    import {useRoute} from 'vue-router'
    import getPortfolio from '@/modules/getPortfolio'
    const {portfolioItems} = getPortfolio()

    const route = useRoute()

    const id = ref(route.params.id)

    const specificPortfolioItem = portfolioItems.value.find(item => item.id == id.value)
    console.log(specificPortfolioItem)
</script>

<style scoped>

</style>