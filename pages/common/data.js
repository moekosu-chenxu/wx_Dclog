var data = [{
  id: '1',
  pic: '',
  name: '王XX',
  price: '12米/90分钟',
  desc: '测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述'
}, {
  id: '2',
  pic: '',
  name: '李XX',
  price: '12米/90分钟',
  desc: '描述1'
}, {
  id: '3',
  pic: '',
  name: '陈XX',
  price: '12米/90分钟',
  desc: '描述1'
}, {
  id: '4',
  pic: '',
  name: '刘XX',
  price: '12米/90分钟',
  desc: '描述1'
}, {
  id: '5',
  pic: '',
  name: '李XX',
  price: '12米/90分钟',
  desc: '描述1'
}, {
  id: '6',
  pic: '',
  name: '陈XX',
  price: '12米/90分钟',
  desc: '描述1'
}, {
  id: '7',
  pic: '',
  name: '刘XX',
  price: '12米/90分钟',
  desc: '描述1'
}, {
  id: '8',
  pic: '',
  name: '李XX',
  price: '12米/90分钟',
  desc: '描述1'
}, {
  id: '9',
  pic: '',
  name: '陈XX',
  price: '12米/90分钟',
  desc: '描述1'
}, {
  id: '10',
  pic: '',
  name: '刘XX',
  price: '12米/90分钟',
  desc: '描述1'
}, {
  id: '11',
  pic: '',
  name: '李XX',
  price: '12米/90分钟',
  desc: '描述1'
}, {
  id: '12',
  pic: '',
  name: '陈XX',
  price: '12米/90分钟',
  desc: '描述1'
}, {
  id: '13',
  pic: '',
  name: '刘XX',
  price: '12米/90分钟',
  desc: '描述1'
}, {
  id: '14',
  pic: '',
  name: '李XX',
  price: '12米/90分钟',
  desc: '描述1'
}, {
  id: '15',
  pic: '',
  name: '陈XX',
  price: '12米/90分钟',
  desc: '描述1'
}, {
  id: '16',
  pic: '',
  name: '刘XX',
  price: '12米/90分钟',
  desc: '描述1'
}];

function getAllData()
{
  return data;
}

function getDataById(id)
{
  var result = "";
  for(var i=0; i< data.length; i++){
    if (id == data[i].id){
      result = data[i];
      break;
    }
  }
  return result;
}

module.exports = {
  getData: getAllData,
  getOne: getDataById
}