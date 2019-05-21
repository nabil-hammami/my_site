function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 40 + 'px';
}

function eventClick(obj){
    switch (obj) {
        case "imgLogBook":
            document.getElementById("mainFrame").src = "./HTML/logBook.html";
            break;
        case "menuLastTestResult":
            document.getElementById("mainFrame").src = "./REPORTS/cucumber_report.html";
            break;
        default:
            document.getElementById("mainFrame").src = "";
    }
}

function eventMouseOver(obj) {
    switch (obj) {
        case "imgLogBook":
            document.getElementById("imgLogBook").src = "./IMG/logBookMouseOver.png";
            break;
    }
}

function eventMouseOut(obj) {
    switch (obj) {
        case "imgLogBook":
            document.getElementById("imgLogBook").src = "./IMG/logBook.png";
            break;
    }
}