<template>
    <div>
        <h1>Works</h1>
        <WorkCard></WorkCard>
        
    </div>
</template>


<script>
import WorkCard from "./WorkCard"

export default {
    components: {
        WorkCard
    }
}
</script>

<style scoped>
div {
    margin-top: 20vw;
    color: #fefefe;
}

h1 {
    font-size: 4.5vw;
    font-weight: 500;
    text-decoration: underline;
}
</style>