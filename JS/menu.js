function createMenu() {
    // 2D Array declaration
    let menuElements = [[], []];

    // Array initialisation
    menuElements[0] = ['menu_latestTestResult', './REPORTS/cucumber_report.html', 'Latest test results'];
    menuElements[1] = ['menu_roadmap', './ROADMAP/Roadmap.html', 'Roadmap'];

    let i = 0;
    do {
        let content = document.createTextNode(menuElements[i][2]);
        let elementA = document.createElement("a");
        let elementH3 = document.createElement("h3");
        let elementLi = document.createElement("li");
        let pageElement = document.getElementById("nav-ul-menu");
        elementA.appendChild(content);
        elementA.setAttribute("id", menuElements[i][0]);
        elementA.setAttribute("href", menuElements[i][1]);
        elementA.setAttribute("target", "mainFrame");
        elementH3.appendChild(elementA);
        elementLi.appendChild(elementH3);
        pageElement.appendChild(elementLi);
        i++;
    }
    while (i < menuElements.length);
}


