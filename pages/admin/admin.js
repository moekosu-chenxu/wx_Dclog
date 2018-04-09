// pages/admin/admin.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgSrc: ''
  },
  // 选择图片
  chooseImg: function(){
    var that_ = this;
    wx.chooseImage({
      success: function(res) {
        // loading
        wx.showLoading({
          title: '正在上传',
          mask: true
        });
        // 上传图片
        // wx.uploadFile({
        //   url: '/xx',
        //   filePath: res.tempFilePaths[0],
        //   name: 'file',
        //   success: function(resp){
        //     var data = resp.data;
        //   }
        // });
        // 设置图片
        var path = res.tempFilePaths;
        console.log(path);
        that_.setData({
          imgSrc: path
        });
        // 停止loading
        wx.hideLoading();
      }
    });
  },
  // 提交
  submit: function(){
    wx.showToast({
      title: '提交成功',
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