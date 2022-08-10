// pages/hot/hot.js
Page({
  listData:{},
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
    ],
    currentList:[
      {imgUrl:'https://img3.mukewang.com/529dc3380001379906000338-590-330.jpg',
      title:'初识HTML(5)+CSS(3)-升级版',},
      {imgUrl:'https://img.mukewang.com/szimg/62df56d7097e884112000676-358-201.jpg',
      title:'前端模拟面试，给你真实的求职体验和面试经验',},
      {imgUrl:'https://img.mukewang.com/szimg/62da500e09cae24712000676-358-201.jpg',
      title:'Spark+ClickHouse实战企业级数据仓库，进军大厂必备',},
      {imgUrl:'https://img.mukewang.com/szimg/62d61ce70956893012000676-358-201.jpg',
      title:'Selenium3+Pytest+Allure 全流程实战自动化测试',}
    ],
  },
  onLoad(){
    wx.request({
      url: 'https://www.fastmock.site/mock/43e4d86156dff7db39428d6639416e3f/practise/api/getHot',
      success: (res) => {
        const {data:{data}} = res;
        this.listData = data;
        const periodtime = wx.getStorageSync('periodtime')|| 'week';
        const rankType = wx.getStorageSync('rankType')|| 'project';
        // const{periodtime,rankType} = this.data;
        this.setData({periodtime,rankType})
        this.changeCurrentList(rankType,periodtime);
      },
    })
  },
  changeCurrentList(rankType,periodtime) {
    let currentList = [];
    if(rankType === 'project' && periodtime === 'week') {
      currentList = this.listData.projectWeek;
    }else if (rankType === 'project' && periodtime === 'month') {
      currentList = this.listData.projectMonth;
    }else if(rankType === 'path' && periodtime === 'week') {
      currentList = this.listData.pathWeek;
    }else if(rankType === 'path' && periodtime === 'month') {
      currentList = this.listData.pathMonth;
    }
    this.setData({currentList})
  },
  hanleTabchange(e){
    // console.log(e.currentTarget.dataset.type)
  const rankType = e.currentTarget.dataset.type;
  const {periodtime} = this.data;
    this.setData({rankType});
    wx.setStorage({
      data:rankType,
      key:'rankType'
    })
    this.changeCurrentList(rankType,periodtime);
  },
  handlechangeTime(e) {
    // console.log(e.currentTarget.dataset.type)
    const periodtime = e.currentTarget.dataset.type;
    const {rankType} = this.data;
    this.setData({periodtime});
    wx.setStorage({
      data:periodtime,
      key:'periodtime'
    }),
    this.changeCurrentList(rankType,periodtime);
  }
})