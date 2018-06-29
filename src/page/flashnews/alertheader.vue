<template>
  <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']">
      <div class="alertfocus_whole">
          <div class="picture_title">
              <image class=""></image>
              <text class=""></text>
          </div>
          <div>
              <div></div>
              <text></text>
              <image></image>
          </div>
      </div>
  </div>
</template>

<style>
.w-ipx{
    height: 154px;
    padding-top: 84px;
}
.alertfocus_whole{
    flex-direction: column;
    width: 750px;
    height: 447px;
    /*background-image: url('/assets/image/integration_bg.png');
    background-repeat: no-repeat;*/
    background-color:blueviolet;
}
</style>

<script>
    
</script>