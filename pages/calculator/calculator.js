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
    var num = Number(this.data.num);
    this.setData({op:e.target.dataset.val});
    if(this.isClear){
      return;
    }
    this.isClear = true;
    if(this.result == null){
      this.result = num;
      return;
    }
    console.log(op);
  },
  dotBtn: function(e){
    var dot = e.target.dataset.val;
    console.log(dot);
  }

})