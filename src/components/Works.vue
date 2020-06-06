<template>
    <div>
        <h1>Works</h1>
        <v-container>
            <v-row>
                <v-col>
                    <Card :data="works"></Card>
                </v-col>
                <v-col>
                    <Card></Card>
                </v-col>
            </v-row>
        </v-container>
        
    </div>
</template>

<script>
import Card from './WorkCard'

export default {
    components: {
        Card
    },
    data: () => {
        return {
            works: {
                tech: "Vue",
                title: "portfolio site",
                subtitle: "Vueでの制作",
                imgPath: "../assets/portfolio.png",
                url: "https://wtnbtkr.github.io",
                github: "https://github.com/wtnbtkr/wtnbtkr.github.io"
            }
        }
    }
}
</script>

<style scoped>
h1 {
    text-align: center;
    margin-top: 20vh;
}
</style>