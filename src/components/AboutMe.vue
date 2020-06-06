<template>
    <div>
        <h1>About me</h1>
        <ul class="details">
            <li>
                <strong>name</strong>
                <p>tkrwtnb</p>
            </li>
            <li>
                <strong>skills</strong>
                <p>Flutter, iOS, Android</p>
            </li>
            <li>
                <strong>age</strong>
                <p>19</p>
            </li>
        </ul>
        <p>高専2年の終わり頃から本格的にプログラミングを始める</p>
        <p>一つの技術に絞らず様々な技術に触れる</p>
        <v-icon class="icon" @click="openURL('https://twitter.com/dev_tkrwtnb')" color="#212121">fab fa-twitter</v-icon>
        <v-icon class="icon" @click="openURL('https://github.com/wtnbtkr')" color="#212121">fab fa-github</v-icon>


    </div>
</template>

<script>
export default {
    methods: {
        openURL: function (url) {
            window.open(url, "_blank");
        }
    }    
}
</script>


<style scoped>

div {
    margin-top: 10rem;
    text-align: center;
    height: 50vh;
}

.details {
    list-style: none;
    text-align: center;
    padding: 0;
}

.icon {
    color: #212121;
    margin: 15px;
}
</style>