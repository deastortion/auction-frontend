<template>
    <section class="auctions">
        <div class="container">
            <div class="auctions__body">
                <h1 class="auctions__title">
                    Manage the auctions!
                </h1>
                <div class="tools">
                    <Search @onSearch="handleSearch" />
                    <RouterLink class="auctions__create-btn" to="/dashboard/auctions/create">Create auction</RouterLink>
                </div>
                <div class="cards">
                    <div class="container">
                        <div class="cards__grid">
                            <AdminAuction v-for="auction in auctions" :key="auction.id" :auction="auction" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import AdminAuction from '@/components/dashboard/AdminAuction.vue';
import Search from '@/components/Search.vue';
import { RouterLink } from 'vue-router';
export default {
    components: {
        AdminAuction,
        Search
    },
    data() {
        return {
            auctions: [],
        }
    },
    mounted() {
        this.$axios.get("/auctions").then((response) => {
            this.auctions = response.data.auctions;
        });
    },
    methods: {
        handleSearch(query) {
            if (!!query) {
                this.$axios.get("/auctions/search?query=" + `%${query}%`).then((response) => {
                    this.auctions = response.data.auctions;
                    console.log(response.data.auctions);
                    return;
                }).catch((error) => {
                    console.log(error);
                    return;
                });

                return;
            }

            this.$axios.get("/auctions").then((response) => {
                this.auctions = response.data.auctions;
            });
        }
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

.auctions__create-btn {
    display: block;
    width: 150px;
    padding: 6px 9px;
    background-color: #293648;
    color: #ecfdf5;
    border-radius: 4px;
    transition: all 0.05s ease-in;
}

.auctions__create-btn:hover {
    background-color: #1f2937;
}

.auctions__create-btn:active {
    background-color: 3c4d65;
}

.tools {
    border-radius: 4px;
    max-width: 450px;
    margin: 0px auto;
    padding: 6px 8px;
    background-color: #e2e8f0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
}
</style>