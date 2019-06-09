<template>
  <Page>
    <Header />
    <List title="My List" />
  </Page>
</template>

<script >
  import Movie from './Movie'
  import Header from '@/components/Header'
  import List from '@/components/List'

  export default {
    data() {
      return {
        msg: 'Home'
      }
    },
    components: { Header, List }, 
    methods: {
      goPage() {
        this.$navigateTo(Movie);
      }
    }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
