<!-- This file is a vue component that is eventually rendered in the lower part of the page -->
<!-- and used everytime across the application-->
<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__body">
                <div class="footer__text">
                    <p class="footer__nickname">
                        @Jahake
                    </p>
                    <p class="footer__author">
                        Developed by Mirzabaev Jakhangir
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer {
    padding: 24px 0px;
    background-color: #1f2937;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

.footer__body {
    padding: 0px 18px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.footer__text {
    color: #e0e7ff;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    max-width: 500px;
    text-align: center;
}

.footer__nickname {
    font-size: 14px;
    color: white;
    margin-bottom: 8px;
}

.footer__author {
    margin-bottom: 2px;
    font-size: 13px;
    text-decoration: underline;
}

.footer__comment {
    line-height: 1.45;
}
</style>