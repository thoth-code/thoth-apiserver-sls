import * as upperWindow from "../Window.js";

function Window() {
    let window = [];
    window.push({
        isRoute: false,
        path: "database/1-oracle/index.html",
        content: "OracleDB"});
    window.push({
        isRoute: false,
        path: "database/2-RDB/index.html",
        content: "RDB 개념"});

    let windows = upperWindow.default();
    windows.push(window);

    return windows;
}

export default Window;