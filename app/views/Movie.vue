<template>
  <Page actionBarHidden="true">
    <ScrollView>
      <FlexboxLayout flexDirection="column">
        <StackLayout class="fullscreen" backgroundColor="red">
          <Image 
            src="~/assets/images/logo.png" 
            class="img-header"
            stretch="aspectFit"
          />
        </StackLayout>
        <AbsoluteLayout class="button">
          <Image src="~/assets/images/icons/play.png" class="play" stretch="aspectFill" />
        </AbsoluteLayout>
      </FlexboxLayout>
    </ScrollView>
  </Page>
</template>

<script>
  
</script>

<style lang="scss" scoped>
  .img-header{
    width: 80;
  }
  .fullscreen{
    background-image: url('~/assets/images/movies/vikingfull.jpg') ;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    height: 250;
    margin: 0
  }

  .button{
    width: 60;
    margin-top: -20;
    height: 60;
    border-radius: 50%; 
    background-color: #fff;
    z-index: 99999;
  }

  .play{
    width: 20;
    height: 20;
    margin-top: 20;
  }
</style>
