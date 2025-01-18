<template>
    <section class="catalogue">
        <div class="container">
            <div class="catalogue__body">
                <h1 class="catalogue__title">
                    Lots for the auction {{ '#' + $route.params.id }}!
                </h1>
                <div class="lots">
                    <div class="container">
                        <div class="lots__body" v-if="lots.length > 0">
                            <Lot v-for="lot in lots" :key="lot.id" :lot="lot" />
                        </div>
                        <div class="lots__body lots__body_no" v-else>
                            <span class="lots__message">Seems there are no lots for the specified auction ...</span>
                        </div>
                    </div>
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
    data() {
        return {
            lots: []
        }
    },
    mounted() {
        this.$axios.get("/lots/auction/" + this.$route.params.id).then((response) => {
            this.lots = response.data.lots;
        });
    }
}
</script>

<style scoped>
.lots {
    padding: 12px 18px;
}

.container {
    max-width: 800px;
    margin: 0 auto;
}

.lots__body {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 12px;
}

.lots__body_no {
    display: block;
    padding: 20px;
    text-align: center;
    color: #fffffff0;
}

.catalogue__title {
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

@media screen and (max-width: 768px) {
    .lots__body {
        grid-template-columns: 1fr 1fr;
    }
}

@media screen and (max-width: 490px) {
    .lots__body {
        grid-template-columns: 1fr;
    }
}
</style>