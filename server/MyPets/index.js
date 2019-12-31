/**
 * Created by yangxueyao on 2019/3/5.
 */

var CATEGORY ;
$(function () {
    $(".maybeLikeGoods").css({'height':$(window).height()});
    $(window).scroll(function () {
        var bodyHeight = $(document).scrollTop(); //屏幕高度
        var likeHeight = $(".maybeLike").offset().top; //猜你喜欢距离顶部距离
        if(bodyHeight >= likeHeight){
            $(".maybeLikeGoods").css({'overflow':'auto'});
        } else {
            $(".maybeLikeGoods").css({'overflow':'hidden'});
        }
    });
    $(".indexNav p").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('.maybeLikeGoods').html('');
        CATEGORY = $(this).index()+1;
        appShopHome($(this).index()+1) ;
        maybeLike();
    }).eq(0).click();
});


function appShopHome(type) {
    //CATEGORY 1狗 2猫
    httpPost('app_shop/home.do',{"CATEGORY":type.toString(),"USER_ID":USER_ID},function (res) {
    	console.log(JSON.stringify(res));
        //banner轮播图
        $(".rollBanner .swiper-wrapper").html('');
        for (var i=0;i<res.data.BANNER_LIST.length;i++){
           // 类型 0无 1超链接 2图文 3商品 4品牌 5H5活动链接 6开通会员
            var dic1 = res.data.BANNER_LIST[i];
            var bannerHref =  ["javascript:void(0)",dic1.URL,'text.html?BANNER_ID='+dic1.BANNER_ID,'goodsDetail.html?PRODUCT_ID='+dic1.PRODUCT_ID+'$FORM_ID='+dic1.FORM_ID,"typeBrand.html",dic1.URL,"mineMemberOpen.html"][dic1.CATEGORY]
            var bannerSlide = '<div class="swiper-slide" ><a href="'+bannerHref+'"><img src="'+API_IMAGE_URL+res.data.BANNER_LIST[i].LOGO+'"></a></div>';
            $(".rollBanner .swiper-wrapper").append(bannerSlide)
        }
        pictureRoll("rollBanner");
        //商品分类导航
        var goodsTypeList = '';
        var idLIst = [];
        if($('.indexNav p:first-child').hasClass('active')){
        	idLIst = ['Food_dog_1','Snack_dog_1','Drug_dog_1','Clean_dog_1','Daily_dog_1','Nest_dog_1','Trappings_dog_1','Toy_dog_1'];
        }else if($('.indexNav p:nth-child(2)').hasClass('active')){
        	idLIst = ['Food_cat_1','Snack_cat_1','Drug_cat_1','WC_cat_1','Clean_cat_1','Nest_cat_1','Toy_cat_1','Daily_cat_1'];
        }
        for (var i = 0; i < res.data.TYPE_LIST.length ; i++) {
			res.data.TYPE_LIST[i].idLIst = idLIst[i];
		}
        $.each(res.data.TYPE_LIST,function(i,val){
            goodsTypeList += '<li id='+val.idLIst+'><a href="classifyGoods.html?TYPE_ID='+val.TYPE_ID+'&TYPE_NAME='+val.TYPE_NAME+'"><img src="'+API_IMAGE_URL+val.LOGO+'"><p>'+val.TYPE_NAME+'</p></a></li>';
        });
        $(".mainType").html(goodsTypeList);
        //犬种分类（猫种分类）
        var kindTypeList = '';
        $.each(res.data.AREA_LIST,function (i,val) {
            kindTypeList += '<li><a href="classifyPrefecture.html?CATEGORY='+val.CATEGORY+'&SHOP_AREA_ID='+val.SHOP_AREA_ID+'"><img src="'+API_IMAGE_URL+val.LOGO+'"></a></li>'
        });
        $(".kindType").html(kindTypeList);
        
        //添加查看更多点击统计id
        var checkMoreLIst = [];
    	if($('.indexNav p:first-child').hasClass('active')){
        	checkMoreLIst = ['Food_dog_2','Snack_dog_2','Drug_dog_2','Clean_dog_2','Daily_dog_2','Nest_dog_2','Trappings_dog_2','Toy_dog_2'];
        }else if($('.indexNav p:nth-child(2)').hasClass('active')){
        	checkMoreLIst = ['Food_cat_2','Snack_cat_2','Drug_cat_2','WC_cat_2','Clean_cat_2','Nest_cat_2','Toy_cat_2','Daily_cat_2']
        }
        //商品专区
        $(".prefectureGoodsBox").html('');
        for(var i=0;i<res.data.PRODUCT_LIST.length;i++){
        	//添加统计id进数组
        	res.data.PRODUCT_LIST[i].checkMoreLIst = checkMoreLIst[i];
            var dic = res.data.PRODUCT_LIST[i].TYPE_DATA;
            //品牌列表
            var brandList = '';
            for (var j=0;j<dic.BRAND_LIST.length;j++){
                brandList += '<li ><a href="searchResult.html?KEYWORDS='+dic.BRAND_LIST[j].BRAND_NAME+'">'+dic.BRAND_LIST[j].BRAND_NAME+'</a></li>'
            }
            //商品列表
            var goodsList = '';
            for (var j=0;j<dic.PRODUCT_LIST.length;j++){
                goodsList += '<li> ' +
                                '<a href="goodsDetail.html?PRODUCT_ID='+dic.PRODUCT_LIST[j].PRODUCT_ID+'&FORM_ID='+dic.PRODUCT_LIST[j].FORM_ID+'">' +
                                    '<img src="'+API_IMAGE_URL+dic.PRODUCT_LIST[j].LOGO+'"> ' +
                                    '<div>'+dic.PRODUCT_LIST[j].PROCUCT_NAME+'</div> ' +
                                    '<strong>￥'+formatPrice(dic.PRODUCT_LIST[j].CURRENT_PRICE)+'</strong> ' +
                                '</a>'+
                            '</li> '
            }
            //根据KIND,链接类型 0:无 1:超链接 2:图文 3:指定商品
            var productHref =  ["javascript:void(0)",dic.URL,'text.html?BANNER_ID='+dic.BANNER_ID+'','goodsDetail.html?PRODUCT_ID='+dic.PRODUCT_ID+'$FORM_ID='+dic.FORM_ID][dic.KIND];
            var productList = '<div class="prefectureGoods"> ' +
                '<div class="prefectureGoodsTitle"> ' +
                '<span></span> ' +
                '<p><img src="'+API_IMAGE_URL+dic.ICON+'">'+dic.TYPE_NAME+'</p> ' +
                '<span></span> ' +
                '</div> ' +
                '<ul class="prefectureGoodsType"> ' + brandList+ '</ul> ' + //品牌列表
                '<div class="prefectureGoodsPicture"> ' +
                '<a href="'+productHref+'"><img src="'+API_IMAGE_URL+dic.PIC+'"></a> ' +
                '</div> ' +
                '<div class="prefectureGoodsListBox"> ' +
                '<ul class="prefectureGoodsList"> '+goodsList+'</ul> ' + //商品列表
                '</div> ' +
                '<div class="lookMore" id="'+checkMoreLIst[i]+'"> ' +
                '<a href="classifyGoods.html?TYPE_ID='+dic.TYPE_ID+'&TYPE_NAME='+dic.TYPE_NAME+'">查看更多</a> ' +
                '</div> ' +
                '</div>';
            $(".prefectureGoodsBox").append(productList);
        }

    });


}

function maybeLike() {
    // 页数
    var page = -1;
    $('.maybeLikeGoods').html('').dropload({
        scrollArea : $('.maybeLikeGoods'),
        loadDownFn : function(me){
            page++;
            // 拼接HTML
            var list = '';
            var data = {
                "AREA_ID":"0", //专区ID 0:默认 1:小型犬专区 2:中大型犬专区 3:幼犬专区 4:幼猫专区 5:成猫专区
                "CATEGORY":CATEGORY.toString(),//类型 1：狗 2：猫
                "COUNT":"10",
                "PAGE":page.toString(),
                "USER_ID":USER_ID
            };
            httpPost('app_shop/likeList.do',data,function (response) {
                $(".dropload-down").hide();
                response = response.data;
                for (var i = 0;i < response.length;i++) {
                    var result = response[i];
                    list += '<li> ' +
                            '<a href="goodsDetail.html?PRODUCT_ID='+result.PRODUCT_ID+'&FORM_ID='+result.FORM_ID+'">' +
                                '<img src="'+API_IMAGE_URL+result.LOGO+'"  originsrc="images/zanwei.png" class="oriImg"> ' +
                                '<p class="maybeLikeGoodsName">【'+result.BRAND+'】'+result.PROCUCT_NAME+'</p> ' +
                                '<strong class="maybeLikeGoodsPrice">￥<span>'+formatPrice(result.CURRENT_PRICE)+'</span></strong> ' +
                                '<div class="maybeLikeCount"> ' +
                                '<p>评价：'+result.REPLY+'</p> ' +
                                '<p>已售：'+result.BUYNUM+'</p> ' +
                                '</div> ' +
                            '</a>'+
                            '</li>';
                }
                $('.maybeLikeGoods').append(list);
                // 每次数据插入，必须重置
                me.resetload();
            },function(){
                // 无数据
                me.noData();
                // 锁定
                me.lock();
                me.resetload();
                $(".dropload-down").hide();
            },function(){
                // 即使加载出错，也得重置
                me.resetload();
                $(".dropload-down").hide();

            });
        }
    });
}


