<template>
        <list class="wrapper" :style="isIpx()?'wipx':''">
           <refresh class="refreshOut" @refresh="refreshData" :display="refreshDisplay">
                <loading-indicator class="indicator"></loading-indicator>
                <text class="text_refresh">{{refreshText}}</text>
           </refresh>
           <cell v-for="(item,index) in itemsList" :key="index">
                <div class="information_content">
                    <div class="typical_image_name">
                        <image class="content_image" :src="gethref(item.member.logo)" resize="cover"></image>
                        <text class="typical_name">{{item.member.name!=null?item.member.name:item.member.screeName}}</text>
                    </div>
                    <div class="title_sourece_time">
                        <text class="text_title">{{item.content}}</text>
                        <text class="translate_text" @click="getTranslation(item.id,index)">翻译</text>
                        <text class="translate_result" v-if="translateClick&&item.translates&&isExistsTranlate(item.id)">{{item.translates[0].label}}</text>
                        <div class="source_time">
                            <div class="source_set_color">
                                <text class="grey_color">来源:</text>
                                <text class="source" @click="goAlertFocus(item.category,item.member.memberId,item.source)">{{item.member.screeName!=null?item.member.screeName:item.member.name}}@{{item.source}}</text>
                            </div>
                            <div class="time_hit">
                                <div class="time_ago">
                                    <!--<image class="clock_image" :src="get_img_path('Time.png')" resize="cover"></image>-->
                                    <text class="text_time_ago">{{timeAgo(item.publishTime?item.publishTime:item.ctime)}}</text>
                                </div>
                                <div class="time_ago">
                                    <!--<image class="clock_image" :src="get_img_path('click.png')"></image>-->
                                    <text class="text_time_ago">{{item.hits}}阅读</text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </cell>
           <loading @loading="loadingData" :display="loadingDisplay">
                <div class="loadingOut">
                    <loading-indicator class="load_indicator"></loading-indicator>
                    <text class="text_laoding">{{loadingText}}</text>
                </div>
           </loading>
        </list>
</template>

<style scoped>
.wrapper{
    position: fixed;  
    top:188px;
    left: 0;right: 0;
    bottom: 0;
}
.refreshOut{
    width: 750;
    padding-top: 10;
    padding-bottom: 10;
    align-items: center;
}
.text_refresh{
    font-size: 12wx;
}
.text_laoding{
    font-size: 12wx;
}
.indicator{
    width: 35px;
    height: 35px;
    color: grey;
    margin-bottom: 30px;
}
.information_content{
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    border-bottom-width: 1px; 
    border-bottom-color: #e8eaef;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-right: 20px;
    padding-left: 20px;
}
.title_sourece_time{
    flex-direction: column;
    width: 550px;
    margin-top: 5px;  
    margin-right: 10px; 
}
.text_title{
    width: 550px;
    font-size: 14wx;
}
.translate_text{
    font-size: 14wx;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    padding-right: 5px;
    border-width: 1px;
    border-color: #000; 
    border-radius: 5px;
    width: 73px;
    margin-top: 5px; 
}
.translate_result{
    width: 550px;
    font-size: 14wx;
    margin-top: 10px;
    background-color: #ededed;
}
.source_time{
    width: 550px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 25px;
}
.source_set_color{
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
}
.grey_color{
    align-items: center;
    justify-content: flex-start;
    color: #787878;
    font-size: 14wx;
}
.source{
    align-items: center;
    justify-content: flex-start;
    color: #36a0ff;
    font-size: 14wx;
}
.time_hit{
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
}
.time_ago{
    align-items: center;
    flex-direction: row;
    margin-right: 10px;
}
.clock_image{
    width: 20px;
    height: 20px;
    margin-right: 5px;
}
.text_time_ago{
    color: #787878;
    font-size: 12wx;
}
.content_image{
    width: 120px;
    height: 120px;
}
.typical_name{
    font-size: 16wx;
    margin-top: 10px;
    width: 120px;
}
.loadingOut {
    flex-direction: row;
    width: 750;
    padding: 30px;
    align-items: center;
    justify-content: center;
}
.load_indicator {
    width: 35;
    height: 35;
    color: #454545;
    margin-right: 10px;
}
</style>

<script>
const dom = weex.requireModule('dom');
const animation = weex.requireModule('animation');
const modal = weex.requireModule('modal');
var apis = require('../../common/action.js');
var deviceHeight = weex.config.env.deviceHeight;

export default {
    data () {
      return {
          page : 1,
          size : 6,
          refreshDisplay:'hide',
          refreshText:' ↓ 下拉刷新 ',
          loadingDisplay:'hide',
          loadingText:'加载更多',
          itemsList:[],
          translates:[{
                "key": "zh",
                "label": ""
          }],
          translateShow:false,
          translateClick:0,
          translateList:[],
          wipx:{top: 276},
        }
    },

    created(){
        var self = this;
        var fringeHeight = parseInt(self.getiPhonexFringeHeight(deviceHeight));
        self.wipx = {top : (188+fringeHeight)+'px'};
        
        self.page = 1;
        apis.requireNewsList({
	        "category" : "ex_twitter",//这个是在字典接口里查询得到了的结果，因为是固定的所以直接写了
	        "page" : self.page, 
	        "size" : self.size
        },function(res){
            if(res.respond.ok){
                //modal.toast({message:(res.list[0].title),duration:1});
                self.itemsList = res.list;
            }else{
                modal.toast({message:'网络请求失败',duration:1});
            }
        });
    },

    methods: {
        goAlertFocus:function(category,memberId,source){
            let params = this.getParamsByJson({
                Category : category,
                MemberId : memberId,
              //Source : source
            });
                
            this.jumpUrl("/alertfocus",params);
        },

        refreshData:function(event){
            //modal.toast({message:"下拉刷新",duration:1});
            var self = this;
            self.refreshDisplay = 'show';
            self.refreshText='正在刷新';
            self.page = 1;

            apis.requireNewsList({
                "category" : "ex_twitter",//这个是在字典接口里查询得到了的结果，因为是固定的所以直接写了
                "page" : self.page, 
                "size" : self.size
            },function(res){
                if(res.respond.ok){
                    //modal.toast({message:(res.list[0].title),duration:1});
                    self.itemsList = res.list;
                    self.refreshDisplay = 'hide';
                    self.refreshText=' ↓ 下拉刷新 ';
                    modal.toast({message:'刷新成功',duration:1});
                }else{
                    self.refreshDisplay = 'hide';
                    self.refreshText=' ↓ 下拉刷新 ';
                    modal.toast({message:'网络请求失败',duration:1});
                }
            });
        },

        loadingData:function(event){
            var self = this;
            self.page++;
            self.loadingDisplay = 'show';
            self.loadingText = '加载中...';

            apis.requireNewsList({
                "category" : "ex_twitter",//这个是在字典接口里查询得到了的结果，因为是固定的所以直接写了
                "page" : self.page,
                "size" : self.size
            },function(res){
                if(res.respond.ok){
                    //modal.toast({message:(res.list[0].title),duration:1});
                    self.itemsList=self.itemsList.concat(res.list);
                    self.loadingDisplay = 'hide';
                    self.loadingText='加载更多';
                    modal.toast({message:'加载成功',duration:1});
                }else{
                    self.refreshDisplay = 'hide';
                    self.refreshText='加载更多';
                    modal.toast({message:'网络请求失败',duration:1});
                }

                if (self.page >=res.lastPage) {
                    modal.toast({message:'没有更多',duration:1});
				}
            });
        },
        
        getTranslation(id,index){
            var self=this;
            apis.requireTranslate({"id" : id},function(res){
                if(!res.respond.ok){
                    //console.log(res);
                    return false;
                }

                if(!res.data.translates){
                    // return false;
                    res.data.translates=self.translates;
                }

                self.itemsList[index].translates=res.data.translates;
                self.translateShow=true;
                //console.log("翻译"+res.data.translates[0].label+"index:"+index);
                //console.log("translates:::"+JSON.stringify(self.list[index].translates));

                self.translateList.push(id);
                self.translateClick=self.translateClick+1;
                //modal.toast({message:res.data.translates[0].label,duration:1});

            });
      },
      
      isExistsTranlate(id){
        var self = this;
        //console.log(JSON.stringify(self.translateList));

        for(let i=0;i<this.translateList.length;i++){
          let item =this.translateList[i];
              if(item==id){
                //console.log("显示标签"+item);
                return true;
              }
        }
       
        return false;
      },

    }
}
</script>