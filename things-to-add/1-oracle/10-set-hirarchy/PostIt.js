let PostIt = [
    {
        type: "concept",
        title: "집합연산은 호환성이 있어야 가능하다",
        command: [],
        describe: [
            "두 SELECT 쿼리문 간의 집합연산을 하기 위해서는 두 쿼리문의 결과가 호환성이 있어야 한다",
            "무슨소리인고 하니, 두 쿼리문의 결과가 칼럼의 수와 순서, 자료형이 모두 같아야 집합연산이 가능하다는 것이다"
        ],
        caution: [],
        tip: []
    },
    {
        type: "code",
        title: "합집합",
        command: [
            "SELECT 칼럼들 FROM 테이블들;\nUNION;\nSELECT 칼럼들 FROM 테이블들;",
            "SELECT 칼럼들 FROM 테이블들;\nUNION ALL;\nSELECT 칼럼들 FROM 테이블들;",
        ],
        describe: [
            "UNION : 합집합 연산",
            "UNION ALL : 합집합 연산을 하되 중복된 검색결과까지 결과로 보여줌",
        ],
        caution: [],
        tip: []
    },
    {
        type: "code",
        title: "교집합",
        command: [
            "SELECT 칼럼들 FROM 테이블들;\nINTERSECT;\nSELECT 칼럼들 FROM 테이블들;"
        ],
        describe: [
            "제곧내"
        ],
        caution: [],
        tip: []
    },
    {
        type: "code",
        title: "차집합",
        command: [
            "SELECT 칼럼들 FROM 테이블들;\nMINUS;\nSELECT 칼럼들 FROM 테이블들;"
        ],
        describe: [
            "MINUS는 차집합을 수행하되 먼저 등장하는 쿼리문의 결과에서 나중에 등장하는 쿼리문의 결과를 제외해서 보여준다"
        ],
        caution: [],
        tip: []
    },
    {
        type: "code",
        title: "계층형 질의",
        command: [
            "SELECT LEVEL, 칼럼들, CONNECT_BY_ISLEAF\nFROM 테이블들\nSTART WITH 조건\nCONNECT BY PRIOR 자식의 칼럼 = 부모의 칼럼\nORDER BY LEVEL;"
        ],
        describe: [
            "LEVEL : 계층 순번을 나타내는 숫자",
            "START WITH 조건 : 루트를 조건을 통해 골라낸다",
            "CONNECT BY PRIOR 자식의 칼럼값 = 부모의 칼럼값 : PRIOR가 불은쪽이 자식이고 안붙은 쪽이 부모이다",
            "이렇게 생각을 하고 자식의 칼럼값이랑 부모의 칼럼값을 비교해 둘이 일치하면 자식으로 간택되는거고 아니면 자식으로 들어오지 않는 것",
            "활용 사례를 보면 한 사원의 상사의 사원id가 외래키로 들어있고 직급이 높은순으로 계층구조를 보고싶으면 조건으로 상사가 없는놈을 고르고 CONNECT BY PRIOR에는 사원id = 상사의 사원id 를 넣어주면 된다",
            "CONNECT_BY_ISLEAF는 해당 인스턴스가 마지막 노드인가(리프노드인가)를 0과 1로 보고싶을때 쓰면 된다"
        ],
        caution: [],
        tip: []
    },
];

export default PostIt;