<template>
  <CardView 
    elevation="40" 
    radius="10"
    class="card"
  >
    <Image
      src="~/assets/images/movies/vikings.jpg"
      class="card__image"
      stretch="aspectFill"
    />
  </CardView>
</template>

<style lang="scss" scoped>
  .card{
    margin-left: 10;
    margin-right: 10;
    height: 180;
    width: 130;
    background-color: #fff;

    &__image{
      overflow: hidden;
    }
  }
</style>
