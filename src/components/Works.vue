<template>
    <div>
        <h1>Works</h1>
        <v-container>
            <v-row>
                <v-col>
                    <Card></Card>
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
    }    
}
</script>

<style scoped>
h1 {
    text-align: center;
    margin-top: 20vh;
}
</style>