<template>
    <div>
        <div v-if="specificPortfolioItem">
            <h1>{{ specificPortfolioItem.title }}</h1>
            <p>{{ specificPortfolioItem.description }}</p>
            <p>{{ specificPortfolioItem.category }}</p>
            <img :src="specificPortfolioItem.image" alt="">
        </div>
        <div v-else>
            <p>Porteføljepunktet blev ikke fundet.</p>
        </div>
    </div>
</template>

<script setup>
    import { ref, watch } from 'vue'
    import { useRoute } from 'vue-router'
    import getPortfolio from '@/modules/getPortfolio'
    const { portfolioItems } = getPortfolio()

    const route = useRoute()

    const id = ref(route.params.id)

    watch(() => route.params.id, (newId) => {
        id.value = newId
        updateSpecificPortfolioItem()
    })

    const specificPortfolioItem = ref(null)

    const updateSpecificPortfolioItem = () => {
        specificPortfolioItem.value = portfolioItems.value.find(item => item.id === id.value)
    }

    updateSpecificPortfolioItem() // Initial update
</script>

<style scoped>
/* Add your scoped styles here */
</style>
