// pages/hot/hot.js
Page({
  data: {
    rankType:'project',
    rankTypes:[
      {name:'实战排行',type:"project"},
      {name:'路径排行',type:"path"}
    ],
    periodtime:'week',
    period:[
      {title:'周',time:'week'},
      {title:'月',time:'month'}
    ]
  },
  hanleTabchange(e){
    // console.log(e.currentTarget.dataset.type)
  const rankType = e.currentTarget.dataset.type;
    this.setData({rankType})
  },
  handlechangeTime(e) {
    console.log(e.currentTarget.dataset.type)
    const periodtime = e.currentTarget.dataset.type;
    this.setData({periodtime})
  }
})