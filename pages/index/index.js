//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    result: '',
   num1:0,
   num2:0,
  },
  //事件处理函数
  getnum1:function(e){
    var aanum1 = Number(e.detail.value);
    console.log('第一个数字为' + aanum1 );
    this.setData({
      num1:aanum1,
    })
  },
  getnum2:function(e){
    var bbnum2 = Number(e.detail.value);
    console.log(bbnum2);
    this.setData({
      num2:bbnum2,
    })
  },
  // 为两个Input绑定相同的事件处理函数
  getnum:function(e){
    console.log(e.target.dataset.id);
    this[e.target.dataset.id] = Number(e.detail.value);
  }, 
  //在页面中直接进行比较
  getnum3:function(e){
    var data = [];
    data[e.target.dataset.id] = Number(e.detail.value);
    this.setData(data);
  } ,
  //form表单的提交比较方式
  formCompare:function(e){
    var str = '两数相等';
    var num1 = Number(e.detail.value.num1);
    var num2 = Number(e.detail.value.num2);
    if(num1 > num2){
      str = '第一个数大';
    }else if( num1 < num2){
      str = '第二个数大';
    }
    this.setData({result:str})

  },
  // 最容易想到的比较方式
  bijiao: function(res){
    var that = this;
    console.log(that.data);
    var num1 = that.data.num1;
    var num2 = that.data.num2;
    if(num1 == ''&& num2==''){
      console.log('请输入数值');
    }else{
      if(num1 > num2){
        that.setData({
          result:'num1大'
        })
      }else if(num1 == num2){
        that.setData({
          result:'两数相等。'
        })
      }else{
        that.setData({
          result:'num2大'
        })
      }
    }
    
  }

})
