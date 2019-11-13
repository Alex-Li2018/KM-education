<template>
    <div class="e-tarin">
        <img src="../../img/tarin/tarin_01.jpg" alt="">
        <img src="../../img/tarin/tarin_02.jpg" alt="">
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.e-tarin {
    background-color: #ff2700;
    img {
        width: 100vw;
        &:nth-child(2) {
            margin: 100px 0;
        }
    }
}
</style>
