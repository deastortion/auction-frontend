<!-- This vue file serves as a home view page that eventually is handled by the router -->
<!-- and there are some random text in the middle to test my sizing and adaptivenes of the website -->
<template>
    <section class="home">
        <div class="container">
            <div class="home__body">
                <h1 class="home__title">
                    Welcome to the Auction House of Fotheby!
                </h1>
                <div class="home__card">
                    DO NOT MIND THIS TEXT, IT'S JUST RANDOM STUFF TO TEST MY SIZINGS.
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Lot from '@/components/Lot.vue';
export default {
    components: {
        Lot
    },
}
</script>

<style scoped>
.home {
    padding: 12px 18px;
}

.container {
    max-width: 800px;
    margin: 0 auto;
}

.home__card {
    margin-top: 24px;
    background-color: #e2e8f0;
    padding: 12px 16px;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    line-height: 1.2;
}

.home__title {
    display: block;
    text-align: center;
    margin-bottom: 12px;

    color: #fff;
    font-size: 32px;
    font-weight: bold;
    letter-spacing: 2px;
    text-shadow: 0px 4px 3px rgb(0 0 0 / 30%), 0px 8px 13px rgb(0 0 0 / 10%),
        0px 18px 23px rgb(0 0 0 / 10%);
}


</style>