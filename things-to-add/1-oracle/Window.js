import * as upperWindow from "../Window.js";

function Window() {
    let window = [];
    window.push({
        isRoute: false,
        path: "database/1-oracle/1-table/index.html",
        content: "Table 추가, 수정, 삭제"
    });
    window.push({
        isRoute: false,
        path: "database/1-oracle/2-instance/index.html",
        content: "Instance 추가, 수정, 삭제"
    });
    window.push({
        isRoute: false,
        path: "database/1-oracle/3-select/index.html",
        content: "SELECT와 Function"
    });
    window.push({
        isRoute: false,
        path: "database/1-oracle/5-where/index.html",
        content: "FROM, WHERE"
    });
    window.push({
        isRoute: false,
        path: "database/1-oracle/6-orderby/index.html",
        content: "ORDER BY"
    });
    window.push({
        isRoute: false,
        path: "database/1-oracle/7-groupby/index.html",
        content: "GROUP BY, Group Function"
    });
    window.push({
        isRoute: false,
        path: "database/1-oracle/8-aggfunc/index.html",
        content: "Aggregation Function"
    });
    window.push({
        isRoute: false,
        path: "database/1-oracle/9-join/index.html",
        content: "JOIN"
    });
    window.push({
        isRoute: false,
        path: "database/1-oracle/11-subquery/index.html",
        content: "서브쿼리"
    });
    window.push({
        isRoute: false,
        path: "database/1-oracle/10-set-hirarchy/index.html",
        content: "집합연산과 계층형질의"
    });
    window.push({
        isRoute: false,
        path: "database/1-oracle/12-view/index.html",
        content: "뷰"
    });
    window.push({
        isRoute: false,
        path: "database/1-oracle/13-windowfunc/index.html",
        content: "Window Function"
    });
    window.push({
        isRoute: false,
        path: "database/1-oracle/14-index/index.html",
        content: "Index"
    });

    let windows = upperWindow.default();
    windows.push(window);

    return windows;
}

export default Window;