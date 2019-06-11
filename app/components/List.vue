<template>
  <StackLayout>
    <Label 
      :text="title" 
      class="title"
    />

    <ScrollView orientation="horizontal" scrollBarIndicatorVisible="false">
      <StackLayout orientation="horizontal">
        <Card 
          v-for="item in movies"
          :key="item.id"
          :photo="item.photo"
        />
      </StackLayout>
    </ScrollView>
  </StackLayout>
</template>

<script>
  import Card from './Card'

  export default {
    props: {
      title: String,
      movies: Array
    },
    components: { Card }
  }
</script>

<style lang="scss" scoped>
  .title{
    margin-bottom: 10;
    margin-left: 10;
    font-weight: 600;
    font-size: 15;
  }
</style>
