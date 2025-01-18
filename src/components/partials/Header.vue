<!-- This file is a vue component that is eventually rendered in the upper part of the page -->
<!-- and used everytime across the application-->
<!-- It contains of a navigation and a brand name of the app which in this case is Fotheby's Auction House -->
<template>
    <header class="header">
        <div class="container">
            <div class="header__body">
                <div class="header__brand">
                    Fotheby's Auction
                </div>
                <nav class="header__nav">
                    <RouterLink to="/" class="nav__link">Home</RouterLink>
                    <RouterLink to="/auctions" class="nav__link">Auctions</RouterLink>
                    <RouterLink to="/lots" class="nav__link">Lots</RouterLink>
                    <RouterLink to="/dashboard/auctions" class="nav__link">Manage Auctions</RouterLink>
                    <RouterLink to="/dashboard/lots" class="nav__link">Manage Lots</RouterLink>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
    position: fixed;
    padding: 16px 0px;
    background-color: #374151;

    z-index: 10;
    width: 100%;
    box-shadow: 0 1px 4px 0.5px rgba(0, 0, 0, 0.5);
}


.container {
    max-width: 1200px;
    margin: 0 auto;
}

.header__body {
    padding: 0px 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header__brand {
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 2px;
    text-shadow: 0px 2px 3px rgb(0 0 0 / 30%), 0px 8px 13px rgb(0 0 0 / 10%),
        0px 18px 23px rgb(0 0 0 / 10%);
}

.header__nav {
    display: flex;
    gap: 16px;
}

.nav__link {
    color: #e0e7ff;
    font-size: 14px;
}

.nav__link:hover {
    color: rgba(255, 255, 255, 0.9);
    text-decoration: underline;
}

@media screen and (max-width: 490px) {
    .header__body {
        flex-direction: column;
        gap: 12px;
    }
}
</style>