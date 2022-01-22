{
    const selection = window.getSelection().toString().trim()
    chrome.runtime.sendMessage({msg: selection})
}