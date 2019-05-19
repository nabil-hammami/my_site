function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 40 + 'px';
}

function eventClick(obj){
    if (obj === "logBook"){
        document.getElementById("mainFrame").src = "./HTML/logBook.html";
    }
}