/**
 * Created by fangjunjie on 2018/9/29.
 */
$.ajax({
    type:"get",
    url:"tabbar.html",
    async:true,
    success:function (e) {
        $("body").append(e);

        var hrefArray = ['index.html','type.html','car.html','mine.html'];
        var imageClickArray = ['image/tabBar_home_click_icon.png','image/tabBar_type_click_icon.png','image/tabBar_car_click_icon.png','image/tabBar_mine_click_icon.png'];
        for (var i = 0;i < hrefArray.length;i++) {
            if (window.location.href.indexOf(hrefArray[i]) != -1) {
                $('.tabbarBg').eq(i).find('img').attr('src',imageClickArray[i]);
                $('.tabbarBg').eq(i).find('div').addClass('active');
            }
        }
        $('.tabbarBg').click(function () {
            var index = $(this).attr('data-index');
            if (index == 3){
                if(isLogin() == false){return false}
            }else if (index == 2){
                if(isLogin() == false){return false}
            }
            window.location.href = hrefArray[index];
        });
    }
});

