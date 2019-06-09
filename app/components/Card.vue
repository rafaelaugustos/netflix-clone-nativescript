<template>
  <CardView 
    elevation="40" 
    radius="5"
    :class="['card', cardAnimated]"
    @tap="goPage"
  >
    <Image
      :src="photo"
      class="card__image"
      stretch="aspectFill"
    />
  </CardView>
</template>

<script>
  import Movie from '@/views/Movie'

  export default {
    data(){
      return {
        cardAnimated: {

        }
      }
    },
    props: {
      photo: String
    },
    methods: {
      goPage(element) {
        element.view.animate({
          scale: { x: 2, y: 2 },
          duration: 2000
        })
        // this.$navigateTo(Movie);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .card{
    margin: 10;
    height: 180;
    width: 130;
    position: 'absolute';
    background-color: #fff;

    &__image{
      overflow: hidden;
      border-radius: 5;
    }
  }
</style>
