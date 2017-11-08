var temp = document.createElement('script')
temp.setAttribute('type', 'text/javascript')
temp.setAttribute('defer', 'defer')
temp.id = 'muke'
temp.src = chrome.extension.getURL('muke.js')
document.body.appendChild(temp)
