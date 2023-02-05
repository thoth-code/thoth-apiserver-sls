let PostIt = [
    {
        type: "code",
        title: "WHERE-IN",
        command: [
            "SELECT 칼럼들\nFROM 테이블1\nWHERE 기본키(외래키) IN\n(SELECT 기본키(외래키)\nFROM 테이블2\nWHERE 테이블1.기본(외래)키 = 테이블2.기본(외래)키);"
        ],
        describe: [
            "WHERE-IN 를 쓰면 일단 서브쿼리를 실행하고 그 결과로 나온 칼럼의 칼럼값을 갖고있는 인스턴스만 테이블1에서 골라온다"
        ],
        caution: [],
        tip: [
            "NOT IN을 써서 결과로 나오지 않은 인스턴스를 골라올 수도 있다"
        ]
    },
    {
        type: "code",
        title: "WHERE-EXISTS",
        command: [
            "SELECT 칼럼들\nFROM 테이블1\nWHERE EXISTS\n(SELECT *\nFROM 테이블2\nWHERE 테이블1.기본(외래)키 = 테이블2.기본(외래)키);"
        ],
        describe: [
            "WHERE-EXISTS를 쓰면 서브쿼리의 결과가 존재하는지만 검사하고 존재하면 그 인스턴스에 해당하는 인스턴스를 테이블1에서 꺼내 보여준다"
        ],
        caution: [],
        tip: [
            "WHERE-IN과 결과는 같으나 차이점은 EXISTS는 서브쿼리문의 결과가 존재하는지만 판단하는 반면 IN은 데이터를 모두 확인한다는 것이다",
            "따라서 EXIST의 경우에는 연산량이 적으므로 단순히 인스턴스가 존재하는지만을 확인하기 위함이면 EXISTS를 쓰는게 더 좋다",
            "마찬가지로 NOT EXISTS를 써서 존재하지 않는 인스턴스를 골라올 수도 있다"
        ]
    },
    {
        type: "code",
        title: "단일행 서브쿼리",
        command: [
            "SELECT 칼럼들\nFROM 테이블들\nWHERE 칼럼 = (SELECT 어쩌고);"
        ],
        describe: [
            "서브쿼리의 검색결과로 하나의 인스턴스, 하나의 칼럼만이 나오게 해 그 값을 가지고 뭔가를 해보고싶을때 사용하면 된다",
            "예를들면 서브쿼리로 선택된 칼럼값과 같은 칼럼값을 가지는 인스턴스들을 고른다거나 그 칼럼값보다 큰 칼럼값을 가지는 인스턴스들을 고른다거나"
        ],
        caution: [],
        tip: [
            "= 말고 <>같은 대소비교 연산자를 사용하는 것도 가능하다",
        ]
    },
    {
        type: "code",
        title: "다중칼럼 서브쿼리",
        command: [
            "SELECT 칼럼들\nFROM 테이블들\nWHERE (칼럽1, 칼럼2) IN\n(SELECT 칼럼1, 칼럼2 FROM 어쩌고);"
        ],
        describe: [
            "서브쿼리의 검색결과로 하나의 인스턴스, 여러개의 칼럼이 나오게 해 그 칼럼값을 가지고 뭔가를 해보고싶을때 사용하면 된다",
            "예를들면 서브쿼리로 하나의 인스턴스 중 여러 칼럼값을 선택해 그것과 같은 칼럼값을 가지는 인스턴스들을 고르는 등"
        ],
        caution: [],
        tip: []
    },
    {
        type: "code",
        title: "INLINE VIEW",
        command: [
            "SELECT 칼럼들\nFROM (SELECT 어쩌고);"
        ],
        describe: [
            "FROM에 새로운 쿼리문을 넣어서 그의 결과로 나온 것을 하나의 테이블처럼 생각하고 쿼리문을 짜는 것을 INLINE VIEW라고 한다"
        ],
        caution: [],
        tip: []
    },
    {
        type: "code",
        title: "스칼라 서브쿼리",
        command: [
            "SELECT 칼럼들, (SELECT 어쩌고) AS 칼럼별칭\nFROM 테이블들;"
        ],
        describe: [
            "SELECT문으로 칼럼을 선택할 때 여기에 쿼리문을 넣어 그 쿼리문의 결과가 하나의 칼럼으로 출력되게 하는 것을 스칼라 서브쿼리라고 한다"
        ],
        caution: [],
        tip: [
            "보통 서브쿼리가 칼럼명으로 출력되면 너무 길고 알아보기 힘들기 때문에 SELECT Alias를 이용해 칼럼 별칭을 지정해주는 것이 일반적이다"
        ]
    },
];

export default PostIt;