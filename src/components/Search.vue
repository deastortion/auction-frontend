<!-- This little bitty file is a component with a basic search functionality and markup that fires an event -->
<!-- to its parent (Auction and Lot dashboard views) along with the search query string -->
<template>
    <div class="search">
        <input type="text" placeholder="Write something to the bar ... "
            class="search__input" v-model="query" @keyup="onChange">
    </div>
</template>

<script>
export default {
    props: ['uri'],
    data() {
        return {
            query: ''
        }
    },
    methods: {
        onChange() {
            this.$emit("onSearch", this.query);
        }
    }
}
</script>

<style scoped>
.search {
    display: flex;
    width: 100%;
}

.search__input {
    background-color: #ffffff73;
    width: 100%;
    padding: 6px 9px;
    border-radius: 2px;
    border: 1px solid rgba(0, 0, 0, 0.25);
}
</style>