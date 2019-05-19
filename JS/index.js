function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 40 + 'px';
}

function eventClick(obj){
    if (obj === "imgLogBook"){
        document.getElementById("mainFrame").src = "./HTML/logBook.html";
    }
}

function eventMouseOver(obj) {
    if (obj === "imgLogBook"){
        document.getElementById("imgLogBook").src = "./IMG/logBookMouseOver.png";
    }
}

function eventMouseOut(obj) {
    if (obj === "imgLogBook"){
        document.getElementById("imgLogBook").src = "./IMG/logBook.png";
    }
}