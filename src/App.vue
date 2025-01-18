<!-- This vue file serves as a boilerplate for our frontend application -->
<!-- containing html code, js logic handling components and global css styles -->
<template>
  <div class="wrapper">
    <Header />
    <main class="content">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/partials/Header.vue';
import Footer from './components/partials/Footer.vue';
import HomeView from './views/HomeView.vue';
export default {
  components: {
    Header,
    Footer,
    HomeView
  }
}
</script>

<style>
html,
body,
#app {
  height: 100%;
}

.wrapper {
  min-height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.content {
  background-color: #374151;
  padding: 100px 16px 75px 16px;
  flex: 1 1 auto;
}
</style>