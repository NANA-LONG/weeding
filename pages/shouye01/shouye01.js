// pages/wedding_class/wedding_class.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlayingMusic: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () { 
    //创建getBack实例化
    this.bgm = wx.getBackgroundAudioManager()
    //音频标题
    this.bgm.title = 'merry me'
    // 专辑名称
    this.bgm.epname = 'wedding'
    // 歌手名
    this.bgm.singer = 'singer'
    // 专辑封面
    this.bgm.coverImgUrl = this.music_coverImgUrl
    this.bgm.onCanplay(() => {
      this.bgm.pause()
    })
    // 指定音频的数据源
    this.bgm.src = 'http://localhost:3000/bgm.mp3'

    self = this
    wx.request({
      url: 'http://localhost:3000/data.json',
      method: 'GET',
      success: function (res) {

        console.log(res.data)
        self.setData({
          groom_name: res.data.groom_name,
          bride_name: res.data.bride_name,
          slogan: res.data.slogan,
          date: res.data.date,
          address: res.data.address

        })
      }
    })
  },
//播放器的单击事件
play:function(){
  if(this.data.isPlayMusic){
    this.bgm.pause()
  }else{
    this.bgm.play()
  }
  this.setData({
    isPlayMusic:!this.data.isPlayMusic
  })
},
  // 新郎电话
  callman: function () {
    wx.makePhoneCall({
      phoneNumber: '13700000000'
    })
  },
  // 新娘电话
  callwomen: function () {
    wx.makePhoneCall({
      phoneNumber: '15600000000'
    })
  }
})
  