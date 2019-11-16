<template>
    <div class="operate-jd-page">
        <!-- banner -->
        <img :src="img[0]" />
        <img :src="img[1]" />
        <img :src="img[2]" />
        <img :src="img[3]" />
        <img :src="img[4]" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            img: [
                'static/show-img/a39c5610-084c-11ea-9d9e-05718183f659.jpg',
                'static/show-img/eb438970-084c-11ea-9d9e-05718183f659.jpg',
                'static/show-img/fb5d3db0-084c-11ea-9d9e-05718183f659.jpg',
                'static/show-img/07c73060-084d-11ea-9d9e-05718183f659.jpg',
                'static/show-img/10f11340-084d-11ea-9d9e-05718183f659.jpg',
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
.operate-jd-page {
    img {
        width: 100vw;
    }
}
</style>
