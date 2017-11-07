function begin () {
  let list = document.getElementById('chapterList').getElementsByTagName('li')
  let len = list.length

  // 视频播放完毕，继续播放
  let video = document.getElementsByClassName('vjs-tech')[0]
  video.addEventListener('ended', () => {
    playVideo()
  })

  // 播放视频
  function playVideo () {
    for (let i = 0; i < len; i++) {
      let watchstate = list[i].getAttribute('watchstate')
      if (watchstate === '0' || watchstate === '2') {
        list[i].click(); // 观看视频
        setTimeout(() => {
          // console.log(video)
          let video = document.getElementsByClassName('vjs-tech')[0]
          video.currentTime = 1
        }, 5000)
        document.querySelector('.volumeIcon').click(); // 关闭声音
        document.querySelector('.speedTab15').click(); // 1.5倍加速
        document.querySelector('.line1bq').click(); // 标清
        break
      }
    }
  }

  playVideo()
  console.log('脚本成功运行中...')
}

setTimeout(() => {
  begin()
}, 5000)
