Page({ 
  data:{
    num:'123',
    op:'+',
   
  },
  result:null,
  isClear:false,
  numBtn: function(e){
    var num = e.target.dataset.val;
    if(this.data.num ==='0' || this.isClear){
      this.setData({num:num})
      this.isClear = false
    }else{
      this.setData({num:this.data + num})
    }
    console.log(num);
  },
  opBtn: function(e){
    var op = e.target.dataset.val;
    console.log(op);
  },
  dotBtn: function(e){
    var dot = e.target.dataset.val;
    console.log(dot);
  }

})