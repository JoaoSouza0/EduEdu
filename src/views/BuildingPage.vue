<template>
    <section class="lottie-container">
        <div class="lottie"></div>
        <p>We are building this page</p>
    </section>
</template>

<script>
import lottie from 'lottie-web';
export default {
    name: 'PuildingPage',
    methods: {
        async lottie() {
            let jsonData = await this.fetchLottie();
            const ani = lottie.loadAnimation({
                container: document.querySelector('.lottie'),
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: jsonData
            });
            ani.setSpeed(1);
        },

        async fetchLottie() {
            const lottieFetch = await (
                await fetch('https://assets1.lottiefiles.com/packages/lf20_4xasdmlv.json')
            ).json();
            return lottieFetch;
        }
    },
    mounted() {
        this.lottie();
    }
};
</script>

<style scoped>
.lottie-container{
    width: 80%;
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.lottie {
   width: 70%;
}

</style>
