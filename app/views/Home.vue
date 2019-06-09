<template>
  <Page>
    <Header />
      <GridLayout columns="*" rows="*">
          <Button text="Button" @tap="goPage" />
      </GridLayout>
  </Page>
</template>

<script >
  import Movie from './Movie'
  import Header from '@/components/Header'
  export default {
    data() {
      return {
        msg: 'Home'
      }
    },
    components: { Header }, 
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
