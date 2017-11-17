let temp = document.createElement('script')
temp.setAttribute('type', 'text/javascript')
temp.setAttribute('defer', 'defer')
temp.id = 'zhihuishu'
temp.src = chrome.extension.getURL('zhihuishu.js')
document.body.appendChild(temp)
