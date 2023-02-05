let PostIt = [
    {
        type: "code",
        title: "정렬",
        command: ["SELECT 칼럼들\nFROM 테이블\nORDER BY 칼럼 DESC, 칼럼 ASC;"],
        describe: [
            "ORDER BY 가 검색결과 정렬하는 옵션",
            "DESC가 내립차순, ASC가 오름차순"
        ],
        caution: [],
        tip: ["정렬할 칼럼을 여러개 입력하면 먼저 입력한 칼럼을 먼저 정렬하고 그 칼럼의 같은 값을 가지는 놈들끼리 그 다음 칼럼의 정렬이 적용된다"]
    },
    {
        type: "code",
        title: "행 번호 매기기",
        command: [
            "SELECT ROWNUM, 칼럼 FROM 테이블명;",
            "SELECT 칼럼 FROM 테이블명 WHERE ROWNUM = 1;",
            "SELECT ROW_NUMBER() OVER (ORDER BY 칼럼), 칼럼\nFROM 테이블\nORDER BY 칼럼"
        ],
        describe: [
            "ROWNUM은 오라큻에서 기본제공해주는 칼럼으로 조회된 순서대로 숫자가 매겨진다"
        ],
        caution: ["ROWNUM과 ORDER BY를 같이 쓸 경우 ORDER BY전에 번호가 매겨지므로 정렬되어 번호가 매겨지지 않는다 - 따라서 이러한 경우에 두번째처럼 ROW_NUMBER()를 사용하는 것"],
        tip: ["WHERE절에 ROWNUM < 숫자 이런식으로 임의의 몇개 행을 갖고오는 등의 기출변형도 가능하다"]
    },
    {
        type: "code",
        title: "Row Limiting - 상위 n개의 결과 가져오기",
        command: [
            "SELECT 칼럼\nFROM 테이블\nORDER BY 칼럼\nOFFSET 숫자 ROWS FETCH NEXT 숫자 ROWS ONLY;"
        ],
        describe: [
            "OFFSET 숫자 ROWS : 정렬된 결과중 숫자 만큼의 결과는 건너뛴다는 소리 - 0이나 음수를 입력하면 첫번째부터 FETCH하게 된다",
            "FETCH NEXT 숫자 ROWS ONLY : OFFSET 이후부터 숫자 만큼의 인스턴스를 출력한다는 소리"
        ],
        caution: [],
        tip: []
    }
];

export default PostIt;