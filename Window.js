function Window() {
    let window = [];
    window.push({
        isRoute: false,
        path: "webp/index.html",
        content: "HTML, CSS"});
    window.push({
        isRoute: false,
        path: "python/index.html",
        content: "Python"});
    window.push({
        isRoute: false,
        path: "ocaml/index.html",
        content: "OCaml"});
    window.push({
        isRoute: false,
        path: "js/index.html",
        content: "JavaScript"});
    window.push({
        isRoute: false,
        path: "algorithm/index.html",
        content: "Algorithm"});
    window.push({
        isRoute: false,
        path: "github/index.html",
        content: "Git"});
    window.push({
        isRoute: false,
        path: "database/index.html",
        content: "Database"});

    let windows = [];
    windows.push(window);

    return windows;
}

export default Window;