<template>
    <div>
        <div class="main-visual outer" id="js-main-visual">
            <div class="inner">
                <v-avatar size="145" class="img">
                    <img
                        src="../assets/re_nighthawk.png"
                    >
                </v-avatar>
                <h1>tkrwtnb</h1>
                <h2>i'm mobile app developer</h2>
            </div>
        </div>
    </div>
</template>



<style scoped>
.main-visual {
  background-image: url(../assets/remaria.jpg);
  background-size: cover;
  height: 100vh;
  color: #fafafa;
  text-align: center;
}

.img {
    margin: 2rem;
}

.outer {
    position: relative;
}

.inner {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform : translate(-50%,-50%);
  transform : translate(-50%,-50%);
  text-align: center;
  width: 80%;
}



</style>



<script>
export default {
    methods: {
        ajustImageSize: function imageJustSize() {
            var mainVisual = document.getElementById('js-main-visual');
            var winH = window.innerHeight;
            mainVisual.style.height = winH + 'px';
        }
    },
    mounted: function() {
        this.ajustImageSize();
        window.addEventListener('resize', this.ajustImageSize);
    }

}


</script>