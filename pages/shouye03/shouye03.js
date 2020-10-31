// pages/shouye03/shouye03.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectorItems: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  },
  bindChange: function (e) {
    let id = e.currentTarget.id;
    let value = e.detail.value;
    //判断姓名
    if (id == "userName") {
      if (value) {
        if (!(/^[\u4E00-\u9FA5A-Za-z]+$/.test(value))) {
          this.showMessage('输入姓名格式有误');
        }
      } else {
        this.showMessage('姓名不能为空');
      }
    }
    //判断手机号
    if (id == "userPhone") {
      if (value) {
        if (!(/^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\d{8}$/.test(value))) {
          this.showMessage('请输入正确格式号码');
        }
      } else {
        this.showMessage('手机不能为空');
      }
    }
  },
  formSubmit: function (e) {
    let guestData = e.detail.value
    console.log(guestData);
    if (guestData.userName && guestData.userPhone && guestData.blessing) {
      this.showMessage('提交成功');
    } else {
      this.showMessage('提交失败');
    }
  },
  //显示信息
  showMessage: function (title) {
    wx.showToast({
      title: title,
      icon: 'none',
      duration: 3000
    })
  },
  selectorChange: function (e) {
    let i = e.detail.value;
    let value = this.data.selectorItems[i];
    this.setData({ selector: value });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { },

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