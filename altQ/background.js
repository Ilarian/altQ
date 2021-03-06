let URL;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if(!message.msg || !URL) return;
    selection = message.msg;
    createQueryTab(URL+selection)
})

chrome.commands.onCommand.addListener((command, tab) => {
    if(!command || !tab) return;
    switch(command) {
        case "google":
            URL = "https://google.com/search?q="
            break;
        case "wikipedia":
            URL = "https://wikipedia.org/wiki/"
            break;
    }

    //Executed on current tab
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['content-script.js']
    })
});

function createQueryTab(url){

    const props = {
        active: true,
        url: url
    }

    chrome.tabs.create(props);
}

