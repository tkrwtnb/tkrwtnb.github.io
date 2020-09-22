<template>
    <div>
        <h1>Works</h1>
        <v-container>
            <v-row>
                <v-col>
                    <Card :data="portfolio_site"></Card>
                </v-col>
                <v-col>
                    <Card :data="moonlight"></Card>
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
            portfolio_site: {
                tech: "Vue",
                title: "portfolio site",
                subtitle: "Vueでの制作",
                imgPath: "re_portfolio.png",
                url: "https://tkrwtnb.github.io",
                github: "https://github.com/tkrwtnb/tkrwtnb.github.io"
            },
            moonlight: {
                tech: "Flutter",
                title: "Moonlight",
                subtitle: "分散型SNS Misskeyクライアントアプリ",
                imgPath: "coming_soon.png",
                url: "https://github.com/tkrwtnb/Moonlight",
                github: "https://github.com/tkrwtnb/Moonlight",
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