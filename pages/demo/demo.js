var app = getApp();
var func = require('../common/func.js');

Page({
  data: {
    showName: '',
    zzlist: [{
      name: 'moekosu',age: 18
    },{
      name: 'zzLog', age: 19
    }],
    view: "view2",
    san1: 1,
    san2: 2,
    temp: {
      A: {zz: 'zzA'},
      B: { zz: 'zzB' },
      C: { zz: 'zzC' },
      D: { zz: 'zzD' }
    },
    color: 'red'
  },
  // bindtap事件，bind绑定会冒泡触发父节点事件
  demoClick: function(){
    this.setData({
      showName: func.re()
    });
    func.say();
  },
  // catchtap事件，catch开头绑定事件会阻止冒泡
  demoClick2: function(){
    this.setData({
      showName: 'catch method'
    });
  },
  changeColor: function(){
    this.setData({
      color: 'green'
    });
  },
  onLoad: function(){
    wx.request({
      url: 'http://10.12.3.213:28085/dccp-platform/oss.ajax',
      data: {
        "version": "1.0",
        "portalType": "WAP",
        "portalId": "100",
        "reqTime": "2016-04-08 18:39:00",
        "transactionId": "20160408183900000001",
        "sign": "ETSZD4361xdryq",
        "funcCode": "getActivityDetail",
        "activityId": "ACT20171221317691980"
      },
      dataType: 'json',
      method: "POST",
      //header: {},
      success: function(resp){
        console.log(resp);
      },
      fail: function(err){
        console.log("error: "+ err);
      },
      complete: function(){
        console.log("ajax req complete.");
      }
    })
  }
});