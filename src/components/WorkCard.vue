<template>
    <div>
        <v-card
        class="mx-auto"
        max-width="400"
    >
        <v-img
        class="white--text align-end"
        height="200px"
        src="../assets/portfolio.png"
        >
        <v-card-title>Top 10 Australian beaches</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">{{ data.tech }}</v-card-subtitle>

        <v-card-text class="text--primary">
        <div>{{ data.title }}</div>

        <div>{{ data.subtitle }}</div>
        </v-card-text>

        <v-card-actions>
        <v-btn
            color="#212121"
            text
            @click="openURL(data.url)"
            >
            more details
        </v-btn>
        <v-btn
            color="#212121"
            text
            @click="openURL(data.github)"
            v-if="data.github !== undefined"
            >
            <v-icon>fab fa-github</v-icon>
        </v-btn> 
        </v-card-actions>
    </v-card>
    </div>
</template>


<script>
export default {
    name: 'WorkCard',
    props: {
        data: Object
    },
    methods: {
        openURL: function (url) {
            window.open(url, "_blank");
        }
    }
}
</script>


<style scoped>
div {
    margin: 10px auto;
    display: block;
}
</style>