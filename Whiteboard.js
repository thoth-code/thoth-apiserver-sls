function Whiteboard(title, postitList) {
    createHeader(title);
    createMain(postitList);
    createFooter();
}

function createHeader(title) {
    let headerTag = document.createElement("header");

    let logoDivTag = document.createElement("div");
    logoDivTag.setAttribute("id", "logo");
    let hovDivTag = document.createElement("div");
    hovDivTag.setAttribute("class", "hov_box");
    let aTag = document.createElement("a");
    aTag.href = "../index.html";
    aTag.innerText = "Thoth";
    hovDivTag.appendChild(aTag);
    logoDivTag.appendChild(hovDivTag);

    let titleDivTag = document.createElement("div");
    titleDivTag.setAttribute("id", "title");
    titleDivTag.innerText = title;

    headerTag.appendChild(logoDivTag);
    headerTag.appendChild(titleDivTag);

    document.body.appendChild(headerTag);
}

function createMain(postitList) {
    let mainTag = document.createElement("main");
    for(let i in postitList) {
        mainTag.appendChild(makeArticle(postitList[i]));
    }

    document.body.appendChild(mainTag);
}

function createFooter() {
    let footerTag = document.createElement("footer");
    footerTag.innerText = "copyright©saltwalks2021";
    document.body.appendChild(footerTag);
}

function makeArticle(postit) {
    let {type, title, command, describe, caution, tip} = postit;

    let articleTag = document.createElement("article");
    articleTag.setAttribute("class", type);

    let h2Tag = document.createElement("h2");
    h2Tag.innerText = title;
    articleTag.appendChild(h2Tag);

    if(command.length !== 0) {
        let commandUlTag = document.createElement("ul");
        commandUlTag.setAttribute("class", "command");
        for(let i in command) {
            let liTag = document.createElement("li");
            liTag.innerText = command[i];
            commandUlTag.appendChild(liTag);
        }
        articleTag.appendChild(commandUlTag);
    }

    if(describe.length !== 0) {
        let describeUlTag = document.createElement("ul");
        describeUlTag.setAttribute("class", "describe");
        for(let i in describe) {
            let liTag = document.createElement("li");
            liTag.innerText = describe[i];
            describeUlTag.appendChild(liTag);
        }
        articleTag.appendChild(describeUlTag);
    }

    if(caution.length !== 0) {
        let cautionUlTag = document.createElement("ul");
        cautionUlTag.setAttribute("class", "caution");
        for(let i in caution) {
            let liTag = document.createElement("li");
            liTag.innerText = caution[i];
            cautionUlTag.appendChild(liTag);
        }
        articleTag.appendChild(cautionUlTag);
    }

    if(tip.length !== 0) {
        let tipUlTag = document.createElement("ul");
        tipUlTag.setAttribute("class", "tip");
        for(let i in tip) {
            let liTag = document.createElement("li");
            liTag.innerText = tip[i];
            tipUlTag.appendChild(liTag);
        }
        articleTag.appendChild(tipUlTag);
    }

    return articleTag;
}

export default Whiteboard;