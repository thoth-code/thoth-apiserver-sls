function App(rootPath, windows) {
    createLogo(rootPath);
    createNavigation(rootPath, windows);
    createFooter();
}

function createLogo(root) {
    let headerTag = document.createElement("header");
    let divTag = document.createElement("div");
    divTag.setAttribute("class", "link");
    divTag.setAttribute("id", "logo");
    let aTag = document.createElement("a");
    aTag.href = root + "index.html";
    let logo = "<h1>Thoth</h1><h2>temple of<br>open knowledges</h2>";
    aTag.innerHTML = logo;
    divTag.appendChild(aTag);
    headerTag.appendChild(divTag);
    document.body.appendChild(headerTag);
}

function makeListItem(isRoute, root, path, content) {
    let liTag = document.createElement("li");
    if(isRoute) {
        liTag.setAttribute("class", "link route");
    } else {
        liTag.setAttribute("class", "link");
    }
    let aTag = document.createElement("a");
    aTag.href = root + path;
    aTag.innerText = content;
    liTag.appendChild(aTag);
    return liTag;
}

function makeNavList(rootPath, windowItemList) {
    let ulTag = document.createElement("ul");
    for(let i in windowItemList) {
        let {isRoute, path, content} = windowItemList[i];
        ulTag.appendChild(makeListItem(isRoute, rootPath, path, content));
    }

    return ulTag;
}

function createNavigation(rootPath, windows) {
    let nav = document.createElement("nav");
    for(let i in windows) {
        nav.appendChild(makeNavList(rootPath, windows[i]));
    }

    document.body.appendChild(nav);
}

function createFooter() {
    let footerTag = document.createElement("footer");
    let divTag = document.createElement("div");
    divTag.innerText = "copyright©saltwalks2021";
    footerTag.appendChild(divTag);
    document.body.appendChild(footerTag);
}

export default App;