<template>
    <section class="auctions">
        <div class="container">
            <div class="auctions__body">
                <h1 class="auctions__title">
                    Here you can find the auctions!
                </h1>
                <div class="cards">
                    <div class="container">
                        <div class="cards__grid">
                            <Auction v-for="auction in auctions" :key="auction.id" :auction="auction" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Auction from '@/components/Auction.vue';
export default {
    components: {
        Auction
    },
    data() {
        return {
            auctions: []
        }
    },
    mounted() {
        this.$axios.get("/auctions").then((response) => {
            this.auctions = response.data.auctions;
        });
    }
}
</script>

<style scoped>
.cards {
    padding: 12px 18px;
}

.container {
    max-width: 800px;
    margin: 0 auto;
}

.cards__grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 12px;
}

.auctions__title {
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
    .cards__grid {
        grid-template-columns: 1fr 1fr;
    }
}

@media screen and (max-width: 490px) {
    .cards__grid {
        grid-template-columns: 1fr;
    }
}
</style>