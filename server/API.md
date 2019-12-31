# MyPets商城API接口文档

---

| 接口清单         | 接口地址                |
| ---------------- | ----------------------- |
| 活动配置信息接口 | app_product/formList.do |
| 商城主页内容接口 | app_shop/home.do        |
| ''猜你喜欢''接口 | app_shop/likeList.do    |

#### *注:以上接口只允许POST请求

***

基础地址已配置在Vuex的state文件中

**服务器基础地址 API_SERVICE_URL** = **'https://api.csjc19.com/TX/'**

**服务器图片基础地址 API_IMAGE_URL = "https://pic.csjc19.com/"** 

**服务器视频基础地址 API_VIDEO_URL = "http://video.csjc19.com/"**

***

## 活动配置信息接口

```js
/*
	POST请求
	@param url 后缀
	@param data  携带请求参数 { FORM_ID,PRODUCT_ID,USER_ID }
	@param function 成功回调
*/
	httpPost(
        // url
        'app_product/formList.do',
        // data
        {"FORM_ID":'0','PRODUCT_ID':'1633',"USER_ID":'0'},
        // function
         (res) => {
		var config = res.config;
		DISCOUNT = config.DISCOUNT; //折扣价
		IS_SHOW_DISCOUNT = config.IS_SHOW_DISCOUNT;//是否显示折扣
		PREHEAT = config.PREHEAT;//是否是预热状态
		DOUBLE_TENTH = config.DOUBLE_TENTH;//是否双十一当天
		IS_BACK = config.IS_BACK;//是否返场
		console.log(JSON.stringify(res));
		//测试数据
//		DISCOUNT = config.DISCOUNT; //折扣价
//		IS_SHOW_DISCOUNT = 0;//是否显示折扣
//		PREHEAT = 0;//是否是预热状态
//		DOUBLE_TENTH = 1;//是否双十一当天
//		IS_BACK = 0;//是否返场
	});
```

---





## 商城主页内容接口

```js
/*
	POST请求
	@param url 后缀
	@param data  携带请求参数 { CATEGORY,USER_ID } *需要注意,携带参数必须是字符串类型
	@param function 成功回调
*/
    httpPost(
        // url
        'app_shop/home.do',
        // data CATEGORY 1: 狗, 2: 猫 type表示决定显示猫狗的值
        {"CATEGORY":type.toString(),"USER_ID":USER_ID},
        (res) => {
    	console.log(res);
    });
```

- 源码的此接口是控制该商城控制显示狗用品商城还是猫用品商城

```js
// 接口返回数据格式 & 详情
res: {
    response: "0",
    desc: "获取成功",
    data: {
        // 动物分区,1:小型犬专区 2:中大型犬专区 3:幼犬专区 4:幼猫专区 5:成猫专区
        AREA_LIST: [{
            AREA_NAME: "", // 专区名称
            CATEGORY: int, // 1: 狗 2: 猫
            CREATETIME: "", // 创建时间
            LOGO: "", // logo
            SHOP_AREA_ID: int, // 专区id
            SORT: int, // 序号
            STATUS: int // 状态值
        }],
        // banner轮播图
        BANNER_LIST: [{
            BANNER_ID: int, // id
            CATEGORY: int,
            CONTENT: "", // 内容
            CREATETIME: "", // 创建时间
            FORM_ID: int // 表单id
            ICON: "" // 轮播小图
            INFO: "" // 标注信息
            LOGO: "", // 轮播大图
            PRODUCT_ID: int, // 商品ID
            SORT: int, // 序号
            STATUS: int, // 状态值
            TITLE: "", // 标题
            TYPE: int, // 类型
            URL: "" // url
        }],
        // 商品专区列表
        PRODUCT_LIST: [{
            TYPE_DATA: {
                BRAND_IDS: "", // 包含品牌id
                BRAND_LIST: [{
                    BRAND_ID: int, // 品牌id
                    BRAND_NAME: "", // 品牌名字
                    CREATETIME: "", // 创建时间
                    IS_RECOMMEND: int, // 是否推荐
                    LOGO: "",
                    SORT: int,
                    STATUS: int,
                }],
                CATEGORY: int, // 1: 狗 2: 猫
                CONTENT: "", // 内容
                CREATETIME: "", // 创建时间
                FORM_ID: int, // 表单id
                ICON: "", // 小图
                KIND: int, // 链接类型 0:无 1:超链接 2:图文 3:指定商品
                LOGO: "", // 中图
                PIC: "", // 大图
                PRODUCT_ID: int,
                PRODUCT_LIST: [{
                    ACTIVITY_ID: 0
                    ACTIVITY_NUM: 0
                    BRAND: ""
                    BUYNUM: 0
                    BUY_PEOPLE: 0
                    BZ: ""
                    COLOR: ""
                    CURRENT_PRICE: 189
                    DEFAULT_RUSH_NUM: 0
                    DISCOUNT_FEE: 0
                    END_TIME: ""
                    FORM_ID: 6509
                    FORM_NO: ""
                    IS_REMIND: 0
                    KIND: 1
                    LIMIT_BUY: 0
                    LOGO: ""
                    NET_CONTENT: ""
                    POST_FEE: 0
                    PRICE: 189
                    PROCUCT_NAME: ""
                    PRODUCT_ID: 2513
                    PRODUCT_NUMBER: ""
                    PROGRESS: 0
                    PULL_CATEGORY: 0
                    REFER_PRICE: 189
                    REMIND_NUM: 0
                    REPLY: 0
                    RUSH_NUM: 0
                    RUSH_STATE: 0
                    START_TIME: ""
                    STOCK: 0
                    STOCK_TYPE: 0
                    STYLE: 0
                    TASTE: ""
                    TEMP: 0
                    THING_SIZE: ""
                    VIP_PRICE: 189
                    WEIGHT: 0
                }],
                SORT: int,
                STATUS: int,
                TYPE_ID: int,
                TYPE_NAME: "", // 类型名 例如: 猫粮
                URL: "" // 链接地址
            }
        }],
        // 它嗅会员
        SEASON_BANNER_LIST: [{
            BANNER_ID: 48
            CATEGORY: 6
            CONTENT: ""
            CREATETIME: ""
            FORM_ID: 0
            ICON: ""
            INFO: ""
            LOGO: ""
            PRODUCT_ID: 0
            SORT: 48
            STATUS: 1
            TITLE: ""
            TYPE: 5
            URL: ""
        }],
        // 商品类别导航列表 例如: 猫粮,保健品,猫砂,服侍,玩具,日用品等
        TYPE_LIST: [{
            BRAND_IDS: "1,71,72,73,102,"
            CATEGORY: 2
            CONTENT: ""
            CREATETIME: ""
            FORM_ID: 0
            ICON: ""
            KIND: 1
            LOGO: ""
            PIC: ""
            PRODUCT_ID: 0
            SHOP_TYPE_ID: 9
            SORT: 9
            STATUS: 1
            TYPE_ID: 9
            TYPE_NAME: "猫粮"
            URL: ""
        }],
        // 空数组
        VIDEO_LIST: []
    }
}
```

---





## ''猜你喜欢''接口

```js
/*
	POST请求
	@param url 后缀
	@param data  携带请求参数 { AREA_ID,CATEGORY,COUNT,PAGE,USER_ID }
	@param function 成功回调
*/

var data = {
    "AREA_ID":"0", //专区ID 0:默认 1:小型犬专区 2:中大型犬专区 3:幼犬专区 4:幼猫专区 5:成猫专区
    "CATEGORY":CATEGORY.toString(),//类型 1：狗 2：猫
    "COUNT":"10",
    "PAGE":page.toString(),// 页数,从第一页开始
    "USER_ID":USER_ID
};
```

```js
// 接口返回数据格式 & 详情
res:{
    response: "0",
    desc: "获取成功",
    config: {
        COUPON_URL: ""
        DISCOUNT: "9.5折"
        DOUBLE_TENTH: 0
        IS_BACK: 0
        IS_SHOW_DISCOUNT: 1
        PREHEAT: 0
    },
    // 请求时data(参数字典)里的count对应的数量,10即代表10个返回的数据
    data: [{
        ACTIVITY_ID: 0,
        ACTIVITY_NUM: 0,
        BRAND: "华元/HOOPET",
        BUYNUM: 0,
        BUY_PEOPLE: 0,
        BZ: "",
        COLOR: "",
        CURRENT_PRICE: 29.9, // 目前价格
        DEFAULT_RUSH_NUM: 0,
        DISCOUNT_FEE: 0,
        END_TIME: "",
        FORM_ID: 6259,
        FORM_NO: "",
        IS_REMIND: 0,
        KIND: 1,
        LIMIT_BUY: 0,
        LOGO: "/upload/product/20191204/hywyad5cb8fiymof9s9dg1v8lpz0yntl.jpg",
        NET_CONTENT: "",
        POST_FEE: 0,
        PRICE: 29.9, // 价格
        PROCUCT_NAME: "【Hoopet/华元宠具】牛油果伊丽莎白圈  犬猫通用",
        PRODUCT_ID: 2421,
        PRODUCT_NUMBER: "",
        PROGRESS: 0,
        PULL_CATEGORY: 0,
        REFER_PRICE: 29.9,
        REMIND_NUM: 0,
        REPLY: 0,
        RUSH_NUM: 0,
        RUSH_STATE: 0,
        START_TIME: "",
        STOCK: 0,
        STOCK_TYPE: 0,
        STYLE: 0,
        TASTE: "",
        TEMP: 0,
        THING_SIZE: "",
        VIP_PRICE: 29.9, // vip价格
        WEIGHT: 0,
    }]
}
```

