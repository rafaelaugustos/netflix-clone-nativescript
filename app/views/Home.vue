<template>
  <Page>
    <Header />
    <ScrollView scrollBarIndicatorVisible="false">
      <StackLayout>
        <List 
          v-for="item in List"
          :key="item.id"
          :title="item.title" 
          :movies="item.movies"
          class="list"
        />
      </StackLayout>
    </ScrollView>

    <CardAnimate />
  </Page>
</template>

<script>
  import Header from '@/components/Header'
  import List from '@/components/List'
  import CardAnimate from '@/components/CardAnimate'

  export default {
    data() {
      return {
        List: [
          { 
            id: 1, 
            title: 'My List', 
            movies: [ 
              {  
                id: 1,
                photo: '~/assets/images/movies/vikings.jpg'
              }, 
              {
                id: 2,
                photo: '~/assets/images/movies/got.jpg'
              },
              {
                id: 3,
                photo: '~/assets/images/movies/twd8.jpg'
              }
            ] 
          },
          { 
            id: 2, 
            title: 'Popular on Netflix',
            movies: [
              {
                id: 4,
                photo: '~/assets/images/movies/demolidor.jpg'
              },
              {
                id: 5,
                photo: '~/assets/images/movies/nanatsu.jpg'
              },
              {
                id: 6,
                photo: '~/assets/images/movies/cast.jpg'
              }
            ]
          },
          { 
            id: 3, 
            title: 'Netflix Originals',
            movies: [
              {
                id: 4,
                photo: '~/assets/images/movies/how.jpg'
              },
              {
                id: 5,
                photo: '~/assets/images/movies/big.jpg'
              },
              {
                id: 6,
                photo: '~/assets/images/movies/lucifer.jpg'
              }
            ]
          }
        ]
      }
    },
    components: { Header, List, CardAnimate }
  }
</script>

<style lang="scss" scoped>
  .list{
    margin-top: 25;
  }
</style>
