var video = null,
  list = 0,
  len = 0,
  count = 0,
  volumn = null,
  close = null

// 主函数，3s后启动脚本
window.onload =  function () {
  setTimeout(() => {
    if (getVideo() === false) { // 获取video元素
      console.log('无法获取video元素, 请刷新页面')
      window.alert('网速太慢啦，无法获取video元素，请刷新页面')
      return false
    }
    play() // 播放视频
    setInterval(() => { // 每10s检查视频是否播放完毕
      video = document.querySelector('.vjs-tech')
      if (video.ended) {
        console.log('正在刷新页面...')
        window.location.reload()
      }
    }, 10000)
    setInterval(() => { // 每10s检查视频是否播放完毕
      close = document.querySelector('.popboxes_close')
      if(close !== null) close.click()
    }, 10000)
    console.log('脚本成功运行中...')
  }, 3000)
}

// 播放视频
function play () {
  list = document.getElementById('chapterList').getElementsByTagName('li')
  len = list.length
  for (let i = 0; i < len; i++) {
    let watchstate = list[i].getAttribute('watchstate')
    let id = list[i].getAttribute('id')
    if ((watchstate === '0' || watchstate === '2') && id !== 'video-0') {
      list[i].click(); // 观看视频
      setTimeout(() => {
        video.currentTime = 0
        if (video.paused) video.play() // 视频停止的话，继续播放
        if (getVolumn() === false) { // 网速太慢的话，那下面的功能无法用了
          console.log('无法获取功能控件，请刷新页面')
          window.alert('网速太慢啦，无法获取功能控件，请刷新页面')
          return
        }
        document.querySelector('.volumeIcon').click() // 关闭声音
        document.querySelector('.speedTab15').click() // 1.5倍加速
        document.querySelector('.line1bq').click() // 标清
      }, 3000)
      break
    }
  }
}

// 延迟100ms
function delay () {
  var count = 0
  while(count < 50 * 1000 * 1000) count++
}

// 2s内获取video元素
function getVideo () {
  count = 0
  while(video === null && count < 200) {
    video = document.querySelector('.vjs-tech')
    delay()
    count++
  }
  if (video === null) return false
  return true
}

// 2s内获取volumn元素
function getVolumn () {
  count = 0
  while(volumn === null && count < 200) {
    volumn = document.querySelector('.volumeIcon')
    delay()
    count++
  }
  if (volumn === null) return false
  return true
}
