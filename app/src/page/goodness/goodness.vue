<template>
    <div class="goodness">
        <img :src="imgArr[0]" />
        <img :src="imgArr[1]" />
        <img :src="imgArr[2]" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgArr: [
                'static/show-img/goodness_01.jpg',
                'static/show-img/goodness_02.jpg',
                'static/show-img/goodness_03.jpg',
            ]
        }
    },
    created() {
        this.imgArr = this.imgArr.map(_ => {
            if(process.env.NODE_ENV == 'development') {
                _ = `api/${_}`
            }
            return _;
        })
    }
}
</script>

<style lang="scss" scoped>
.goodness {
    img {
        width: 100vw;
        margin-top: -10px;
        margin-bottom: -10px;
    }
}
</style>

