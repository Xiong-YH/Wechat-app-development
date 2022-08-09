// index.js
// 获取应用实例
Page({
  data:{
    swiperList:[],
    courses:[],
    searchList:null,
    type:'recommend',
    tabs:[
      {name:'推荐',type:'recommend'},
      {name:'路径',type:'path'},
      {name:"实战",type:"project"},
      {name:"活动",type:"activity"}
    ],
    activity:[]
  },
  onLoad(){
    wx.request({
      url: 'https://www.fastmock.site/mock/43e4d86156dff7db39428d6639416e3f/practise/api/getData',
      success: (res) => {
        const {data:{data}} = res;//ES6语法
        //const data = res.data.data
        const{swiperList,courses,activity} = data
        this.setData({swiperList,courses,activity})
    }
  })},
  handleInputChange(e){
    const value = e.detail.value;
    //搜索出内容
    let searchList = null
    if(value){
      searchList = this.data.courses.filter(item=>item.title.indexOf(value)>-1)
      // console.log(searchList)
    };
    this.setData({
      searchList
    })
  },
  //点击事件?
  changetype(e){
    const type = e.currentTarget.dataset.type;
    this.setData({type})
  },
  // handleRecommendHot(){
  //   wx.redirectTo({
  //     url: '../hot/hot.wxml',
  //   })
  // }
})