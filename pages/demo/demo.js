var app = getApp();
var func = require('../common/func.js');

Page({
  data: {
    showName: ''
  },
  demoClick: function(){
    this.setData({
      showName: func.re()
    });
    func.say();
  }
});