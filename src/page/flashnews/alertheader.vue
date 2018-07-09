<template>
  <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']">
      <div class="alertfocus_whole">
          <div class="picture_title">
              <image class="typical_image" src="/assets/images/icon_logo.png" resize="cover"></image>
              <text class="typical_name">QUOINE_SG</text>
          </div>
          <div class="collect_content">
              <div class="blank"></div>
              <text class="article_hits">557 文章     |    1022 点击</text>
              <div class="logo_image_div">
                  <image class="logo_image" src="/assets/images/icon_logo.png" resize="cover"></image>
              </div>
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
    background-color: #133D5F;
}
.picture_title{
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 750px;
    height: 347px;
}
.typical_image{
    width:120px;
    height: 120px;
}
.typical_name{
    margin-top: 20px;
    font-size: 35px;
    color: white;
}
.collect_content{
    flex-direction: row;
    widows: 750px;
    height: 100px;
}
.blank{
    width: 187px;
    height: 100px;
}
.article_hits{
    text-align: center;
    font-size: 25px;
    color: white;
    width: 375px;
    height: 100px;
}
.logo_image_div{
    align-items: center;
    justify-content: flex-end;
    widows: 187px;
    height: 100px;
}
.logo_image{
    widows: 95px;
    height: 95px;
}
</style>

<script>
    
</script>