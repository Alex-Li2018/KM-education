<template>
    <div class="e-tarin">
        <img :src="imgArr[0]" />
        <img :src="imgArr[1]" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgArr: [
                'static/show-img/tarin_01.jpg',
                'static/show-img/tarin_02.jpg'
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
