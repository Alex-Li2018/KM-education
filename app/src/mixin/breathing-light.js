const breathingLightMixin = {
    data() {
        return {
            animateId: null
        }
    },
    methods: {
        breathingLightEnter(id) {
            this.animateId = id
        },
        breathingLightleave() {
            this.animateId = null
        },
    }
}

export default breathingLightMixin;