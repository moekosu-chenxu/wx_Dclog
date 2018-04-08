// pages/list/list.js
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      id: '1',
      pic: '',
      desc: '王XX'
    }, {
      pic: '',
      desc: '李XX'
    }, {
      pic: '',
      desc: '陈XX'
    }, {
      pic: '',
      desc: '刘XX'
    }, {
      pic: '',
      desc: '李XX'
    }, {
      pic: '',
      desc: '陈XX'
    }, {
      pic: '',
      desc: '刘XX'
    }, {
      pic: '',
      desc: '李XX'
    }, {
      pic: '',
      desc: '陈XX'
    }, {
      pic: '',
      desc: '刘XX'
    }, {
      pic: '',
      desc: '李XX'
    }, {
      pic: '',
      desc: '陈XX'
    }, {
      pic: '',
      desc: '刘XX'
    }, {
      pic: '',
      desc: '李XX'
    }, {
      pic: '',
      desc: '陈XX'
    }, {
      pic: '',
      desc: '刘XX'
    }],
    showDetail: true,
    detail:{
      id: '',
      pic: '',
      name: '',
      price: '',
      desc: ''
    }
  },
  // 监听查看详情弹出框
  scanDetail: function(event){
    console.log(event);
    // 获取id
    var call_id = event.currentTarget.dataset.callid;
    // 赋值
    this.setData({
      detail: {
        id: call_id,
        pic: '',
        name: '王XX',
        price: '12米/90分钟',
        desc: '测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述'
      },
      // 弹框
      showDetail: false
    });
  },
  // 呼叫
  call: function(event){
    // 获取id
    var callid = event.currentTarget.dataset.callid;
    // TODO call 具体业务
    wx.showToast({
      title: '呼叫成功',
      icon: 'success',
      duration: 1000
    })
  },
  // 关闭弹框
  closepop: function(){
    this.setData({
      showDetail: true
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})