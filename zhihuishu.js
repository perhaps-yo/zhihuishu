/**
 * @file zhihuishu.js
 * @author perhaps(perhapszql@gmail.com) 
 * @date 2017-11-17
 * @description 智慧树视频自动播放下一集，并以1.5倍速度，标清，无声播放
 */

let list = null // 整个视频播放列表
let video = null // video元素
let close = null // 偶尔弹出的对话框的关闭按钮

/**
 * dom 加载完毕才开始执行脚本
 */
window.onload = function() {
  setTimeout(() => begin(), 3000)
}

async function begin() {
  list = getElement('list')
  video = getElement('video')
  await playVideo() // 获取video后，按要求播放视频
  await background()
  console.log('脚本成功运行中...')
}

/**
 * 播放视频
 * @returns void
 */
async function playVideo() {
  for (let i = 0, len = list.length; i < len; i++) {
    let watchstate = list[i].getAttribute('watchstate')
    let id = list[i].getAttribute('id')
    // 视频没被播放过并且不是标题行
    if ((watchstate === '0' || watchstate === '2') && id !== 'video-0') {
      list[i].click() // 播放视频
      setTimeout(() => specialEffect(), 3000) // 按要求播放视频
      break
    }
  }
}

/**
 * 隔10s就检查视频是否播放完毕，是否弹出'测试'对话框
 * @returns void
 */
async function background() {
  // 每10s检查视频是否播放完毕，是的话，刷新页面
  setInterval(() => {
    video = getElement('video')
    if (video.ended) {
      console.log('正在刷新页面...')
      window.location.reload()
    }
  }, 10000)
  // 每10s检查是否弹出'测试'对话框，并关闭
  setInterval(() => {
    close = document.querySelector('.popboxes_close')
    if(close !== null) close.click()
  }, 10000)
}

/**
 * 按要求播放视频: 1.5倍速度，标清，无声播放
 * @returns void
 */
function specialEffect() {
  video.currentTime = 2 // 视频重新播放
  if (video.paused && typeof video.play === 'function') video.play() // 视频停止的话，继续播放
  getElement('volumn').click() // 关闭声音
  getElement('speedTab').click() // 1.5倍加速
  getElement('sharpness').click() // 标清
}


/**
 * 获取指定元素
 * @param {string} ele 指定的元素
 * @returns {Element} 返回指定元素
 */
function getElement(ele) {
  switch (ele) {
    case 'list': {
      list = document.getElementById('chapterList').getElementsByTagName('li')
      if (list === null) window.alert('网速太慢啦，无法视频播放列表，请刷新页面')
      return list
    }
    case 'video': {
      video = document.querySelector('.vjs-tech')
      if (video === null) window.alert('网速太慢啦，无法获取video元素，请刷新页面')
      return video
    }
    case 'volumn': { // 视频的声音控件
      let volumn = document.querySelector('.volumeIcon')
      if (volumn === null) window.alert('网速太慢啦，无法获取功能控件，请刷新页面')
      return volumn
    }
    case 'speedTab': { // 视频的速度控件
      let speedTab = document.querySelector('.speedTab15')
      return speedTab
    }
    case 'sharpness': { // 视频的清晰度控件
      let sharpness = document.querySelector('.line1bq')
      return sharpness
    }
  }
}
