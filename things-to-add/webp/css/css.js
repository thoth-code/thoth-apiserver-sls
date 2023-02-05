const constent = [
    {
        title: "다운받은 폰트 적용하기",
        code: [
            `@charset "UTF-8"
            @font-face {
                font-family: "폰트 닉네임 원하는걸로";
                src: url("폰트경로/폰트파일.eot");
                src: url("폰트경로/폰트파일.eot#iefix") format("embedded-opentype"),
                    url("폰트경로/폰트파일.woff") format("woff"),
                    url("폰트경로/폰트파일.ttf") format("truetype");
            }
            
            선택자 {
                font-family: 폰트 닉네임
            }`
        ]
    },
    {
        title: "플랙스 적용",
        code: [
            "display: flex;",
            "display: inline-flex;"
        ]
    },
    {
        title: "플랙스 아이템 배치 방향",
        code: [
            "flex-direction: row; /* 왼 -> 오 */",
            "flex-direction: column; /* 위 -> 아래 */",
            "flex-direction: row-reverse; /* 오 -> 왼 */",
            "flex-direction: column-reverse; /* 아래 -> 위 */"
        ]
    },
    {
        title: "플랙스 아이템이 컨테이너를 벗어날때 처리 - 줄넘김 처리",
        code: [
            "/* flex-direction: row 기준 */",
            "flex-wrap: nowrap; /* 처리안함 */",
            "flex-wrap: wrap; /* 빠져나가는놈 아래로 */",
            "flex-wrap: wrap-reverse; /* 빠져나가는놈 위로 */"
        ]
    },
    {
        title: "플랙스 아이템 배치 방향과 줄넘김 한꺼번에",
        code: [
            "flex-flow: row wrap;"
        ]
    },
    {
        title: "배치방향 한 줄에 있는 애들 있는 애들 배치 방법",
        code: [
            "/* flex-direction: row 기준 */",
            "justify-content: flex-start; /* 아이템들 1fr */",
            "justify-content: flex-end; /* 1fr 아이템들 */",
            "justify-content: center; /* 1fr 아이템들 1fr */",
            "justify-content: space-between; /* 아이템 1fr 아이템 1fr 아이템 */",
            "justify-content: space-around; /* 1fr 아이템 2fr 아이템 2fr 아이템 1fr */",
            "justify-content: space-evenly; /* 1fr 아이템 1fr 아이템 1fr 아이템 1fr */",
        ]
    },
    {
        title: "배치방향 한 줄의 위치 바꾸기",
        code: [
            "/* flex-direction: row 기준 */",
            "align-items: stretch; /* 채우기 */",
            "align-items: flex-start; /* 맨 위로 올리기 */",
            "align-items: flex-end; /* 맨 아래로 내리기 */",
            "align-items: center; /* 중앙정렬 */",
            "align-items: baseline; /* 글자크기 가장큰놈 기준으로 글자 밑단 맞추기 */",
        ]
    },
    {
        title: "배치방향 여러줄에 있는 애들 배치 방법 - wrap일때 줄넘김이 된 상태일때 배치 방법",
        code: [
            "/* flex-direction: row 기준 */",
            "align-content: stretch; /* 채우기 */",
            "align-content: flex-start; /* 맨 위로 올리기 */",
            "align-content: flex-end; /* 맨 아래로 내리기 */",
            "align-content: center; /* 중앙정렬 */",
            "align-content: space-between; /* justify-content와 똑같은데 이제 방향만 바뀜 */",
            "align-content: space-around; /* justify-content와 똑같은데 이제 방향만 바뀜 */",
            "align-content: space-evenly; /* justify-content와 똑같은데 이제 방향만 바뀜 */",
        ]
    },
    {
        title: "사이즈 기본값",
        code: [
            "/* flex-direction: row 기준 */",
            "flex-basis: 10px /* 가로 너비가 10px보다 작아지지 않음 */"
        ]
    },
    {
        title: "아이템 하나 배치방향으로 stretch",
        code: [
            "flex-grow: 0; /* 배치방향으로 stretch되지 않음 - 기본값 */",
            "flex-grow: 1; /* 배치방향으로 stretch됨 */",
            "flex-grow: 2; /* 배치방향으로 stretch되나 글자를 제외한 여백이 딴애들의 두배임 */"
        ]
    },
    {
        title: "아이템 flex-basis보다 폭이 작아지지 않게 하기",
        code: [
            "flex-shrink: 1; /* flex-basis보다 작아질 수 있음 - 기본값 */",
            "flex-shrink: 0; /* flex-basis보다 작아질 수 없음*/",
        ]
    },
    {
        title: "grow, shrink, basis 축약형",
        code: [
            "flex: 1; /* grow: 1, shrink: 1, basis: auto */",
            "flex: 1 500px; /* grow: 1, shrink: 1, basis: 500px */",
            "flex: 1 0 500px; /* grow: 1, shrink: 0, basis: 500px */",
        ]
    },
    {
        title: "아이템 하나 위치 정하기",
        code: [
            "/* flex-direction: row 기준 */",
            "align-self: auto; /* container 속성 상속 */",
            "align-self: stretch; /* 위아래 채우기 */",
            "align-self: flex-start; /* 맨위로 정렬 */",
            "align-self: flex-end; /* 맨아래로 정렬 */",
            "align-self: center; /* 가운제 정렬 */",
            "align-self: baseline; /* 글자 밑단 맞추기 */",
        ]
    },
    {
        title: "그리드 적용",
        code: [
            "display: grid;",
            "display: inline-grid;"
        ]
    },
    {
        title: "그리드 행 열 크기",
        code: [
            "grid-template-columns: 100px 100px 100px; /* 고정폭 */",
            "grid-template-columns: 1fr 2fr 3fr; /* 비율폭 1 : 2 : 3 */",
            "grid-template-columns: 100px 1fr; /* 고정폭과 비율폭 섞기 */",
            "grid-template-columns: repeat(4, 1fr); /* 1fr 1fr 1fr 1fr와 동일 */",
            "grid-template-columns: 100px minmax(200px, auto); /* 최소 최대 크기 지정 */",
            "grid-template-rows: ; /* column일때와 마찬가지로 설정 가능 */",
        ]
    },
    {
        title: "그리드에 비해 아이템이 적을때 처리",
        code: [
            "grid-template-columns: repeat(auto-fill, minmax(20%, auto)); /* 한 행에 4개가 들어가도 너비가 20%로 유지 - 한칸이 비워져 있음 */",
            "grid-template-columns: repeat(auto-fit, minmax(20%, auto)); /* 한 행에 4개가 들어가면 너비가 25%으로 늘어남 - 비워지지 않음 */",
        ]
    },
    {
        title: "그리드 셀 간 간격",
        code: [
            "row-gap: 20px; /* 행 간 20px의 간격 */",
            "column-gap: 20px; /* 열 간 20px의 간격 */",
            "gap: 30px 20px; /* row-gap: 30px, column-gap: 20px */",
        ]
    },
    {
        title: "그리드 열이나 행의 갯수를 모를때 - 갯수와 상관없이 공통된 크기를 지정하고 싶을 때",
        code: [
            "grid-auto-columns: minmax(200px, auto); /* 모든 열이 최소 200px의 너비를 갖게됨 */",
            "grid-auto-rows; minmax(200px, auto)/* 모든 행이 최소 200px의 높이를 갖게됨 */",
        ]
    },
    {
        title: "그리드 아이템이 차지하는 영역 설정",
        code: [
            "/* 그리드 라인이 1부터 시작하는게 전제 */",
            "grid-column-start: 1; grid-column-end; 4; /* 해당 아이템이 1~4번의 세로 그리드 라인을 차지함 */",
            "grid-column: 1 / 4 /* 동일한 의미의 축약형 */",
            "grid-column: 1 span 3 /* 동일한 의미이나 범위가 아닌 차지하는 영역의 크기를 명시 */",
            "grid-row-start: 2; grid-row-end: 4; /* 헤당 아이템이 2~4번의 가로 그리드 라인을 차지함 */",
            "grid-row: 2 / 4 /* 동일한 의미의 축약형 */",
            "grid-row: 2 span 2 /* 동일한 의미이나 범위가 아닌 차지하는 영역의 크기를 명시 */",
        ]
    },
    {
        title: "그리드 영역에 이름붙여 지정하기",
        code: [
            `부모 {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-template-rows: 20px 1fr 10px 20px;
                grid-template-areas:
                    "   a   .   b   "
                    "   c   c   c   "
                    "   .   .   .   "
                    "   .   d   d   ";
            }
            자식 {
                grid-area: a;
            }`,
        ]
    },
    {
        title: "아이템이 배치되는 방법",
        code: [
            "grid-auto-flow: row; /* 순서대로 가로방향으로 배치 */",
            "grid-auto-flow: column; /* 순서대로 세로방향으로 배치 */",
            "grid-auto-flow: dense; /* dense는 아이템의 크기가 커서 줄바꿈될때 빈자리를 다른 아이템들로 채우는 옵션 */",
            "grid-auto-flow: row dense; /* 순서대로 가로방향 배치하되 빈자리가 있으면 채움 */",
            "grid-auto-flow: column dense; /* 순서대로 세로방향 배치하되 빈자리가 있으면 채움 */",
        ]
    },
    {
        title: "모든 아이템들을 셀 내에서 어떻게 위치시킬건지",
        code: [
            "align-item: stretch; /* 셀 높이와 동일하게 아이템 높이를 늘림 */",
            "align-item: start; /* 아이템들을 셀 내에서 위로 배치 */",
            "align-item: center; /* 아이템들을 셀 내에서 가운데 높이에 배치 */",
            "align-item: end; /* 아이템들을 셀 내에서 아래로 배치 */",
            "justify-item: stretch; /* 셀 너비와 동일하게 아이템 너비를 늘림 */",
            "justify-item: start; /* 아이템들을 셀 내에서 왼쪽으로 배치 */",
            "justify-item: center; /* 아이템들을 셀 내에서 너비의 가운데에 배치 */",
            "justify-item: end; /* 아이템들을 셀 내에서 오른쪽으로 배치 */",
            "place-item: center end; /* 축약형 : align=center, justify=end */",
        ]
    },
    {
        title: "grid template와 무관하게 아이템들 배치",
        code: [
            "align-content: stretch; /* 기본값 - 셀 내에서 높이 최대로 늘림 */",
            "align-content: start; /* 셀 무시하고 아이템 전부 위로 배치 */",
            "align-content: center; /* 셀 무시하고 아이템 전부 가운데 높이에 배치 */",
            "align-content: end; /* 셀 무시하고 아이템 전부 아래로 배치 */",
            "align-content: space-between; /* 아이템들 높이 간격 일정하게 */",
            "align-content: space-around; /* 아이템들 top, bottom에 일정한 padding들어간 효과 */",
            "align-content: space-evenly; /* 아이템들 뿐만 아니라 그리드 컨테이너 경계선까지 포함해서 서로간 높이 간격 일정하게 */",
            "justify-content: stretch; /* 기본값 - 셀 내에서 너비 최대로 늘림 */",
            "justify-content: start; /* 셀 무시하고 전부 왼쪽으로 몰기 */",
            "justify-content: center; /* 셀 무시하고 전부 가운데로 몰기*/",
            "justify-content: end; /* 셀 무시하고 전부 오른쪽으로 몰기 */",
            "justify-content: space-between; /* 아이템들 서로간 너비 간격 일정하게 */",
            "justify-content: space-around; /* 아이템들 left, right에 일정한 padding들어간 효과 */",
            "justify-content: space-evenly; /* 아이템뿐만 아니라 그리드 컨테이너 경계선까지 포함해서 서로간 너비 간격 일정하게 */",
            "place-content: space-evenly end; /* 축약형 : align=space-evenly, justify=end */",
        ]
    },
    {
        title: "아이템 하나에 대해 셀 내에서의 위치 정하기",
        code: [
            "align-self: stretch; /* 해당 아이템 높이 늘리기 */",
            "align-self: start; /* 해당 아이템이 셀의 위로 배치되도록 */",
            "align-self: center; /* 해당 아이템이 셀의 가운데 높이에 배치되도록 */",
            "align-self: end; /* 해당 아이템이 셀의 아래에 배치되도록 */",
            "justify-self: stretch; /* 해당 아이템 너비 늘리기 */",
            "justify-self: start; /* 해당 아이템이 셀의 왼쪽으로 배치되도록 */",
            "justify-self: center; /* 해당 아이템이 셀의 가운데 너비에 배치되도록 */",
            "justify-self: end; /* 해당 아이템이 셀의 오른쪽에 배치되도록 */",
            "place-self: stretch end; /* 축약형 : align=stretch, justify=end */",
        ]
    }
]