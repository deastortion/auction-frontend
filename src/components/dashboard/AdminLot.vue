<!-- The current vue file is a component that handles all the logic and render -->
<!-- for a single lot card on a dashboard page. The data for this component is  -->
<!-- passed through by it's parent component (in this case I believe it was LotListView.vue) -->
<template>
    <div class="lot">
        <div class="lot__img">
            <img src="https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg" alt="">
        </div>
        <div class="lot__body">
            <h5 class="lot__title">
                {{ lot.title }}
            </h5>
            <div class="lot__info">
                <span class="lot__info-title">
                    Author:
                </span>
                <span class="lot__info-value">
                    {{ lot.author }}
                </span>
            </div>


            <div class="lot__info-group">
                <div class="lot__info">
                    <span class="lot__info-title">
                        Location:
                    </span>
                    <span class="lot__info-value">
                        {{ lot.location }}
                    </span>
                </div>
                <div class="lot__info">
                    <span class="lot__info-title">
                        Year:
                    </span>
                    <span class="lot__info-value">
                        {{ getYear(lot.date) }}
                    </span>
                </div>
            </div>

            <hr>

            <div class="lot__info">
                <span class="lot__info-title">
                    Info:
                </span>
                <span class="lot__info-value">
                    {{ lot.description }}
                </span>
            </div>

            <div class="lot__info">
                <span class="lot__info-title">
                    Categories:
                </span>
                <span class="lot__info-value">
                    {{ lot.categoryName }}
                </span>
            </div>

            <div class="lot__info">
                <span class="lot__info-title">
                    Price:
                </span>
                <span class="lot__info-value">
                    {{ '$' + lot.price }}
                </span>
            </div>
        </div>
        <div class="lot__footer">
            <button class="auction__delete" @click="this.delete(lot.id)">
                <i class="fa fa-trash"></i>
            </button>
            <span class="lot__auction-date">
                Auction at: {{ formatDate(lot.launchesAt) }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['lot'],
    computed: {

    },
    data() {
        return {

        }
    },
    methods: {
        getYear(datetime) {
            return new Date(datetime).getUTCFullYear();
        },
        formatDate(datetime) {
            let formattedDate = new Date(datetime).toLocaleDateString('en-EN', { year: 'numeric', month: 'short', day: 'numeric' });
            let formattedTime = new Date(datetime).toLocaleTimeString('en-EN', { hour: '2-digit', minute: '2-digit' });
            return formattedDate + ' ' + formattedTime;
        },
        delete(id) {
            this.$axios.delete('/lots/' + id).then((response) => {
                this.$router.go();
            }).catch((error) => {
                console.log(error);
            });
        }
    }
}
</script>

<style scoped>
.lot {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 8px 8px;
    background-color: #e2e8f0;
    border-radius: 4px;
    overflow: hidden;

    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.lot__img {
    max-height: 200px;
    border: 1.25px solid #1e293b88;
    border-radius: 2px;
    overflow: hidden;
}

.lot__img>img {
    width: 100%;
}

.lot__body {
    padding: 4px 0px;
    display: flex;
    flex-direction: column;
}



.lot__title {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.15;
    margin-bottom: 12px;
}

.lot__info-group {
    display: flex;
    align-items: center;
    gap: 6px;
}

.lot__info-title {
    font-size: 11px;
    font-weight: 500;
}

.lot__info-value {
    font-size: 11px;
    line-height: 1.1;
}

.lot__info:not(:last-child) {
    margin-bottom: 8px;
}

.lot__info-group>.lot__info {
    margin-bottom: 8px !important;
}

hr {
    border-bottom: 1.5px solid rgba(0, 0, 0, 0.35);
    margin-bottom: 12px;
}

.lot__footer {
    padding-top: 6px;
    border-top: 1px solid rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.lot__auction-date {
    font-size: 11px;
}

.auction__delete {
    display: block;
    padding: 4px 8px;
    border-radius: 2px;
    overflow: hidden;

    background-color: #b91c1c;
    color: #eef2ff;

    font-size: 11px;
    font-weight: 400;
    line-height: 1.1;

    transition: all 0.05s ease-in;
}

.auction__delete:hover {
    background-color: #dc2626;
}
</style>