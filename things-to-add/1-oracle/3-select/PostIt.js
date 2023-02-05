let PostIt = [
    {
        type: "code",
        title: "중복제거",
        command: ["SELECT DISTINCT 칼럼들"],
        describe: [
            "DISTINCT 가 중복된 검색결과는 제거하는 옵션"
        ],
        caution: [],
        tip: []
    },
    {
        type: "code",
        title: "SELECT절 Alias",
        command: [
            "SELECT 칼럼 닉네임",
            "SELECT 칼럼 \"닉네임\"",
            "SELECT 칼럼 AS 닉네임",
            "SELECT 칼럼 AS \"닉네임\""
        ],
        describe: ["검색결과의 칼럼에 출력할 내용을 따로 설정하는게 가능"],
        caution: ["반드시 큰따옴표 \"를 써야된다 - 이경우 말고는 문자열을 표현할때 무적권 작은따옴표를 씀"],
        tip: []
    },
    {
        type: "code",
        title: "Concatenate - 문자열 합치기",
        command: ["SELECT 칼럼 || 칼럼"],
        describe: ["검색결과로 두개의 칼럼 내용을 붙여서 보여줄 수 있음"],
        caution: [],
        tip: []
    },
    {
        type: "code",
        title: "값 내림, 올림, 반올림",
        command: [
            "FLOOR(실수)",
            "CEIL(실수)",
            "ROUND(실수, 자릿수)"
        ],
        describe: [
            "FLOOR는 내림, CEIL은 올림, ROUND는 반올림",
            "FLOOR와 CEIL은 무조건 정수로 내리거나 올림",
            "ROUND는 자릿수를 지정해주지않으면 정수, 양수값을 넣으면 해당 소숫점 자릿수에서 반올림, 음수값을 넣으면 해당 십, 백, 뭐라냐 그거 어쩃든 거기서 반올림"
        ],
        caution: [],
        tip: []
    },
    {
        type: "code",
        title: "자료형변환",
        command: [
            "TO_NUMBER(값)",
            "TO_CHAR(값)",
            "TO_DATE('01-15-1998', 'dd-mm-yyyy')"
        ],
        describe: [
            "TO_NUMBER는 숫자로변환",
            "TO_CHAR은 문자열로 변환",
            "TO_DATE는 날짜로 변환, 첫번째 인자로 받은문자열을 두번째 인자로 양식을 문자열로 전달해준다고 생각해주면 된다"
        ],
        caution: [],
        tip: []
    },
    {
        type: "code",
        title: "분기문",
        command: [
            "SELECT CASE WHEN 조건 THEN 값\nWHEN 조건 THEN 값\nELSE 값 AS 이름"
        ],
        describe: [],
        caution: [],
        tip: ["출력 칼럼 이름을 Alias를 이용해 정해주는 것이 보통이다"]
    },
    {
        type: "code",
        title: "NULL값 처리하기",
        command: [
            "NVL(칼럼, 대체값)"
        ],
        describe: [
            "칼럼의 값이 NULL일 경우 그 값의 대체값을 지정함"
        ],
        caution: [],
        tip: []
    }
];

export default PostIt;