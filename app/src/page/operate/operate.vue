<template>
    <div class="operate-page">
        <img :src="img[0]" />
        <img :src="img[1]" />
        <img :src="img[2]" />
        <img :src="img[3]" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            img: [
                '/static/show-img/f4876ee0-084a-11ea-9d9e-05718183f659.jpg',
                '/static/show-img/2e2bc010-084b-11ea-9d9e-05718183f659.jpg',
                '/static/show-img/a0f631c0-084b-11ea-9d9e-05718183f659.jpg',
                '/static/show-img/aa296370-084b-11ea-9d9e-05718183f659.jpg'
            ],
        }
    },
    created() {
        this.img = this.img.map(_ => {
            if(process.env.NODE_ENV == 'development') {
                _ = `api/${_}`
            }
            return _;
        })
    }
}
</script>

<style lang="scss" scoped>
.operate-page {
    img {
        width: 100vw;
    }
}
</style>


