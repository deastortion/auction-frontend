<template>
    <section class="auctions">
        <div class="container">
            <div class="auctions__body">
                <h1 class="auctions__title">
                   Create a new lot!
                </h1>
                <section class="auctions__create">
                    <form class="form" autocomplete="off" @submit.prevent="submit">
                        <div class="form__group">
                            <label for="title" class="form__label">Title</label>
                            <input type="text" name="title" id="title" class="form__input"
                                placeholder="Type down the lot title ..." v-model="form.title" required>
                        </div>

                        <div class="form__group">
                            <label for="description" class="form__label">Description</label>
                            <input type="text" name="description" id="description" class="form__input"
                                placeholder="Type down the lot description ..." v-model="form.description" required>
                        </div>

                        <div class="form__group">
                            <label for="location" class="form__label">Location</label>
                            <input type="text" name="location" id="location" class="form__input"
                                placeholder="Type down the lot location ..." v-model="form.location" required>
                        </div>

                        <div class="form__group">
                            <label for="author" class="form__label">Author</label>
                            <input type="text" name="author" id="author" class="form__input"
                                placeholder="Type down the lot author ..." v-model="form.author" required>
                        </div>

                        <div class="form__group">
                            <label for="price" class="form__label">Estimated price</label>
                            <input type="number" name="price" id="price" class="form__input" placeholder="1000"
                                v-model="form.price" required>
                        </div>

                        <div class="form__group">
                            <label for="auction" class="form__label">Auction</label>
                            <select name="auction" id="auction" class="form__input" v-model="form.auctionId">
                                <option value="0" selected>Select an auction to assign the lot to ...</option>
                                <option v-for="auction in auctions" :key="auction.id" :value="auction.id">{{
                                    auction.name }}</option>
                            </select>
                        </div>

                        <div class="form__group">
                            <label for="category" class="form__label">Category</label>
                            <select name="category" id="category" class="form__input" v-model="form.categoryId">
                                <option value="0" selected>Select a category for the lot ...</option>
                                <option v-for="category in categories" :key="category.id" :value="category.id">{{
                                    category.name }}</option>
                            </select>
                        </div>

                        <div class="form__group">
                            <label for="date" class="form__label">Date</label>
                            <input type="date" name="date" id="date" class="form__input" v-model="form.date" required>
                        </div>


                        <input type="submit" value="Create!" class="form__submit">
                    </form>
                </section>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            form: {
                categoryId: 0,
                auctionId: 0,
                title: null,
                description: null,
                date: null,
                location: null,
                author: null,
                price: null,
                number: null,
            },
            categories: [],
            auctions: []
        }
    },
    methods: {
        submit() {
            this.form.number = Math.floor(Math.random() * 1000000000);
            console.log(this.form.number);
            this.$axios.post('/lots', this.form).then((response) => {
                this.$router.push("/dashboard/lots");
            }).catch((error) => {
                console.log(error);
            });
        }
    },
    mounted() {
        this.$axios.get('/categories').then((response) => {
            this.categories = response.data.categories;
        }).catch((error) => {
            console.log(error);
        });

        this.$axios.get('/auctions').then((response) => {
            this.auctions = response.data.auctions;
        }).catch((error) => {
            console.log(error);
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

.auctions__create {
    padding: 8px 12px;
    background-color: #e2e8f0;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.form__group {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.form__label {
    color: #111827;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.1;
}

.form__input {
    padding: 6px 9px;
    border-radius: 2px;
    border: 1px solid rgba(0, 0, 0, 0.25);
}

.form__submit {
    background-color: #293648;
    color: #e7edf4;
    padding: 8px 12px;
    border-radius: 2px;
    transition: all 0.05s ease-in;
    cursor: pointer;
}

.form__submit:hover {
    background-color: #1f2937;
}

.form__submit:active {
    background-color: #3c4d65;
}
</style>