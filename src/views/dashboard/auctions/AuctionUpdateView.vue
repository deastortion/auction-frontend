<template>
    <section class="auctions">
        <div class="container">
            <div class="auctions__body">
                <h1 class="auctions__title">
                    Edit an existing auction!
                </h1>
                <section class="auctions__create">
                    <form class="form" autocomplete="off" @submit.prevent="submit">
                        <div class="form__group">
                            <label for="name" class="form__label">Name</label>
                            <input type="text" name="name" id="name" class="form__input"
                                placeholder="Type down the auction name ..." v-model="form.name" required>
                        </div>
                        <div class="form__group">
                            <label for="name" class="form__label">Launch date</label>
                            <input type="date" name="name" id="name" class="form__input" v-model="form.launchesAt"
                                required>
                        </div>

                        <input type="submit" value="Update!" class="form__submit">
                    </form>
                </section>
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
            form: {
                name: null,
                launchesAt: null,
            },
        }
    },
    mounted() {
        this.$axios.get('/auctions/' + this.$route.params.id).then((response) => {
            this.form.name = response.data.auction[0].name;
            this.form.launchesAt = response.data.auction[0].launchesAt.split('T')[0];
        });
    },
    methods: {
        submit() {
            this.$axios.put('/auctions/' + this.$route.params.id, this.form).then((response) => {
                this.$router.push("/auctions");
            }).catch((error) => {
                console.log(error);
            });
        },
        
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
    background-color: #342b97f1;
    color: #e7edf4;
    padding: 8px 12px;
    border-radius: 2px;
    transition: all 0.05s ease-in;
    cursor: pointer;
}

.form__submit:hover {
    background-color: #2e2683f1;
}

.form__submit:active {
    background-color: #3c33a3f1;
}
</style>