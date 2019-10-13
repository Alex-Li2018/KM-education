//图片数据
const imgArr = [
    {id: 1, src: require("../../img/banner/operate.jpg")},
    {id: 2, src: require("../../img/banner/tCat.jpg")},
    {id: 3, src: require("../../img/banner/eTrain.jpg")},
    {id: 4, src: require("../../img/banner/freeCheck.jpg")},
    {id: 5, src: require("../../img/banner/design.jpg")}
];
//星级服务
const starServicelist = [
    {   id: 1, 
        src: require("../../img/icon/icon_03.png"), 
        txt: '网店代运营', 
        subTxt: '淘宝代运营,天猫代运营',
        thirdTxt: '京东代运营,阿里代运营'
    },{   id: 2, 
        src: require("../../img/icon/icon_05.png"),
        txt: '店铺装修',
        subTxt: '网店定位、店铺入驻、网店装修',
        thirdTxt: '产品上架、店铺信誉优化'
    },{
        id: 3, 
        src: require("../../img/icon/icon_07.png"),
        txt: '视觉营销',
        subTxt: '视觉定位、首页制作 、详情页制',
        thirdTxt: '作、活动页制作、素材制作等'
    },{
        id: 4, 
        src: require("../../img/icon/icon_09.png"),
        txt: '爆款打造',
        subTxt: '产品选择、图片拍摄、宝贝描述',
        thirdTxt: '卖点提炼、商品上下架等'
    },{
        id: 5, 
        src: require("../../img/icon/icon_15.png"),
        txt: '店铺推广', 
        tTxt: '站内站外优化、直通车、钻展',
        thirdTxt: '推广、广告投放、活动提报'
    },{
        id: 6, 
        src: require("../../img/icon/icon_16.png"),
        txt: '数据分析',
        subTxt: '商品分析、活动分析、报表分析',
        thirdTxt: '竞争分析、消费洞察'
    },{
        id: 7, 
        src: require("../../img/icon/icon_17.png"),
        txt: '信誉优化',
        subTxt: '优化网店信誉',
        thirdTxt: '提升店铺销量'
    },{
        id: 8, 
        src: require("../../img/icon/icon_18.png"),
        txt: '免费店铺诊断',
        subTxt: '诊断店铺基础情况',
        thirdTxt: '深度解决店铺销量问题'
}];

export default { imgArr, starServicelist };