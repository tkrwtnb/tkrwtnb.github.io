<template>
    <div class="title-board">
        <img class="img" src="../../assets/sea.jpg"/>
        <div class="text">
            <img class="logo" src="../../assets/nighthawk.png">
            <p class="name">tkr wtnb</p>
            <p>i'm mobile app developer</p>
        </div>

    </div>
</template>

<script>
export default {
  data() {
  }
};
</script>

<style>
.img {
    width: 100%;
    height: auto;
    padding: 0px;
    margin: 0px;
    opacity: 0.82;
}

.logo {
    width: 17vw;
    border-radius: 17vw;
}

.title-board {
    position: relative;
}

.name {
    text-decoration: underline;
}
.text {
    position: absolute;
    color: #fefefe;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    margin:0;
    padding:0;    
    font-size: 4vw;
}

</style>