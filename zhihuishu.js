/**
 * @file zhihuishu.js
 * @author perhaps(perhapszql@gmail.com) 
 * @date 2017-11-17
 * @description 智慧树视频自动播放下一集，并以1.5倍速度，无声播放
 */

/**
 * dom 加载完毕的5s后才开始执行脚本
 */
window.onload = function () {
  setTimeout(() => begin(), 5000)
}

/**
 * 主程序
 */
async function begin() {
  let list = null // 整个视频播放列表
  let video = null // video播放器
  let count = 0

  // 60s内获取播放列表，若失败，则插件不能使用
  list = getElement('list')
  while (1) {
    if (list !== null || count >= 12) break
    count++
    await wait1s(5)
    list = getElement('list')
  }
  if (list !== null) { // 播放下一集
    playVideo(list)
  }

  // 60s内获取video元素，若失败，则插件不能使用
  await wait1s(5)
  video = getElement('video')
  count = 0
  while (1) {
    if (video !== null || count >= 12) break
    count++
    await wait1s(5)
    video = getElement('video')
  }
  if (video !== null) { // 特殊效果重新播放视频
    await specialEffect(video)
  }

  // 隔10s就检查视频是否播放完毕，是否弹出'测试'对话框
  background()
  console.log('脚本成功运行中...')
}

/**
 * 自动播放下一集
 * @param {Array} list 视频播放列表
 * @returns void
 */
function playVideo(list) {
  for (let i = 0, len = list.length; i < len; i++) {
    let watchstate = list[i].getAttribute('watchstate')
    let id = list[i].getAttribute('id')
    // 视频没被播放过并且不是标题行
    if ((watchstate === '0' || watchstate === '2') && id !== 'video-0') {
      list[i].click() // 播放视频
      return true
    }
  }
}

/**
 * 按要求播放视频: 1.5倍速度，无声播放
 * @param {Element} video 视频元素
 * @returns void
 */
async function specialEffect(video) {
  try {
    return new Promise((resolve) => { // 3s后按要求播放视频
      setTimeout(() => {
        video.currentTime = 2 // 视频重新播放
        if (video.paused && typeof video.play === 'function') video.play() // 视频停止的话，继续播放
        let volumn = getElement('volumn')
        let speedTab = getElement('speedTab')
        // let sharpness = getElement('sharpness')
        if (volumn !== null) volumn.click() // 关闭声音
        if (speedTab !== null) speedTab.click() // 1.5倍加速
        // if (sharpness !== null) sharpness.click() // 标清
        resolve()
      }, 3000)
    })
  } catch (error) {
    console.log(error)
  }
}

/**
 * 隔10s就检查视频是否播放完毕，是否弹出'测试'对话框
 * @returns void
 */
function background() {
  // 每10s检查视频是否播放完毕，是的话，刷新页面
  setInterval(() => {
    let video = getElement('video') // 需要不断的获取video元素
    if (video.ended) {
      console.log('正在刷新页面...')
      wait1s(1)
      window.location.reload()
    }
  }, 10000)
  // 每10s检查是否弹出'测试'对话框，并关闭
  setInterval(() => {
    let close = getElement('close') // 对话框的关闭按钮
    let choose = getElement('choose')
    if (choose && close) {
      choose.click()
      close.click()
      console.log('已关闭了测试弹窗')
    }
    if (close && !choose) {
      console.log('答题失败')
    }
  }, 10000)
}

/**
 * 获取指定元素
 * @param {string} ele 指定的元素名称
 * @returns {Element} 返回指定元素
 */
function getElement(ele) {
  switch (ele) {
    case 'list':
      { // 视频列表
        let list = document.getElementById('chapterList').getElementsByTagName('li')
        if (list === null) console.log('网速太慢啦，无法获取视频播放列表，请刷新页面')
        return list
      }
    case 'video':
      { // 播放器
        let video = document.querySelector('.vjs-tech')
        if (video === null) console.log('网速太慢啦，无法获取video元素，请刷新页面')
        return video
      }
    case 'volumn':
      { // 播放器的声音控件
        let volumn = document.querySelector('.volumeIcon')
        if (volumn === null) console.log('网速太慢啦，无法获取功能控件，请刷新页面')
        return volumn
      }
    case 'speedTab':
      { // 播放器的速度控件
        let speedTab = document.querySelector('.speedTab15')
        return speedTab
      }
    case 'sharpness':
      { // 播放器的清晰度控件
        let sharpness = document.querySelector('.line1bq')
        return sharpness
      }
    case 'close':
      { // '测试'对话框的关闭按钮
        let close = document.querySelector('.popboxes_close')
        // let close = document.querySelector('.popbtn_cancel')
        return close
      }
    case 'choose':
      {
        let chooseInput
        let chooseDiv
        let iframeContent = document.querySelector('#tmDialog_iframe')
        if (iframeContent) {
          chooseDiv = iframeContent.contentWindow.document.querySelector('.answerOption')
          if(chooseDiv) {
            chooseInput = chooseDiv.getElementsByTagName('input')[0]
          }
        }
        return chooseInput
      }
  }
}

/**
 * 延时函数
 * @param {number} sec 延时多少秒
 * @returns {Promise} 异步执行
 */
async function wait1s(sec) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, sec * 1000)
  })
}
