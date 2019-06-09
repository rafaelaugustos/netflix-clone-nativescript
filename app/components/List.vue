<template>
  <StackLayout>
    <Label :text="title" />
    <ScrollView orientation="horizontal">
      <StackLayout orientation="horizontal">
        <Card />
      </StackLayout>
    </ScrollView>
  </StackLayout>
</template>

<script>
  import Card from './Card'

  export default {
    props: {
      title: String
    },
    components: { Card }
  }
</script>