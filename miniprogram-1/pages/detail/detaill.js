// pages/detail/detaill.js
Page({
  data:{
    id:undefined
  },
  onLoad(options) {
    //得到id
    this.setData({
      id:options.id
    })
    // console.log(options,'options')
  }
})