let PostIt = [
    {
        type: "code",
        title: "FROM절 Alias",
        command: ["SELECT 닉네임.칼럼\nFROM 테이블명 닉네임;"],
        describe: ["테이블명이 너무 길 경우 저렇게 별칭을 붙여 사용할 수 있다"],
        caution: ["반드시 AS나 큰따옴표같은거 없이 그냥 띄어쓰기 + 닉네입으로 써야한다"],
        tip: []
    },
    {
        type: "code",
        title: "칼럼 검색결과 제한",
        command: ["SELECT 칼럼\nFROM 테이블명\nWHERE 칼럼 IN ('값1', '값2');"],
        describe: ["해당 칼럼이 값1, 값2에 속하는 검색결과만 출력함"],
        caution: [],
        tip: []
    },
    {
        type: "code",
        title: "AND OR 조건",
        command: [
            "SELECT 칼럼 FROM 테이블명 WHERE 조건 AND 조건 OR 조건;"
        ],
        describe: [],
        caution: [],
        tip: []
    },
    {
        type: "code",
        title: "문자열 검색",
        command: [
            "SELECT 칼럼 FROM 테이블명 WHERE 칼럼 LIKE \'.어쩌고%\'"
        ],
        describe: [
            "LIKE를 이용해 정규식을 이용한 문자열 검색과 비스무리하게 검색을 할 수 있음",
            ".은 정규식에서 .처럼 하나의 문자를 대변하고 %는 정규식에서 .*처럼 임의길이문자열을 대변한다"
        ],
        caution: [],
        tip: []
    },
    {
        type: "code",
        title: "NULL인가 아닌가",
        command: [
            "SELECT 칼럼 FROM 테이블 WHERE 칼럼 IS NULL;",
            "SELECT 칼럼 FROM 테이블 WHERE 칼럼 IS NOT NULL;"
        ],
        describe: [],
        caution: ["=나 !같은 연산자가 아닌 IS, NOT의 키워드를 사용하는것에 주의"],
        tip: []
    }
];

export default PostIt;