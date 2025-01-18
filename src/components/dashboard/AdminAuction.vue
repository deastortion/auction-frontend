<!-- The current vue file is a component that handles all the logic and render -->
<!-- for a single auction card on a dashboard page. The data for this component is  -->
<!-- passed through by it's parent component (in this case I believe it was AuctionListView.vue) -->
<template>
    <div class="auction">
        <div class="auction__body">
            <h5 class="auction__title">
                {{ auction.name }}
            </h5>
            <div class="auction__info">
                <span class="auction__info-title">
                    Launches At:
                </span>
                <span class="auction__info-value">
                    {{ formatDate(auction.launchesAt) }}
                </span>
            </div>
        </div>
        <div class="auction__footer">
            <RouterLink class="auction__btn" :to="`/auctions/${auction.id}/lots`">View lots</RouterLink>
            <span class="auction__auction-date">
                Created at: {{ formatDateString(auction.createdAt) }}
            </span>
            <button class="auction__delete" @click="this.delete(auction.id)">
                <i class="fa fa-trash"></i>
            </button>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    props: ['auction'],
    methods: {
        formatDate(datetime) {
            let formattedDate = new Date(datetime).toLocaleDateString('en-EN', { year: 'numeric', month: 'short', day: 'numeric' });
            let formattedTime = new Date(datetime).toLocaleTimeString('en-EN', { hour: '2-digit', minute: '2-digit' });
            return formattedDate + ' ' + formattedTime;
        },
        formatDateString(datetime) {
            const year = new Date(datetime).getUTCFullYear();
            const month = String(new Date(datetime).getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based
            const day = String(new Date(datetime).getUTCDate()).padStart(2, '0');

            return `${year}-${month}-${day}`;
        },
        delete(id) {
            this.$axios.delete('/auctions/' + id).then((response) => {
                this.$router.go();
            }).catch((error) => {
                console.log(error);
            });
        }
    }
}
</script>

<style scoped>
.auction {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 8px 8px;
    background-color: #e2e8f0;
    border-radius: 4px;
    min-height: 100%;
    overflow: hidden;

    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.auction__img {
    max-height: 200px;
    border: 1.25px solid #1e293b88;
    border-radius: 2px;
    overflow: hidden;
}

.auction__img>img {
    width: 100%;
}

.auction__body {
    padding: 4px 0px;
}

.auction__title {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.15;
    margin-bottom: 12px;
}

.auction__info-group {
    display: flex;
    align-items: center;
    gap: 6px;
}

.auction__info-title {
    font-size: 11px;
    font-weight: 500;
}

.auction__info-value {
    font-size: 11px;
    line-height: 1.1;
}

.auction__info:not(:last-child) {
    margin-bottom: 8px;
}

.auction__info-group>.auction__info {
    margin-bottom: 8px !important;
}

hr {
    border-bottom: 1.5px solid rgba(0, 0, 0, 0.35);
    margin-bottom: 12px;
}

.auction__footer {
    padding-top: 6px;
    border-top: 1px solid rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.auction__auction-date {
    font-size: 11px;
}

.auction__btn {
    display: block;
    padding: 4px 8px;
    border-radius: 2px;
    overflow: hidden;

    background-color: #334155;
    color: #eef2ff;

    font-size: 10px;
    font-weight: 400;
    line-height: 1.1;

    transition: all 0.05s ease-in;
}

.auction__btn:hover {
    background-color: #334155d2;
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