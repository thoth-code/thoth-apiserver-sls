let PostIt = [
    {
        type: "concept",
        title: "OVER와 WINDOW",
        command: [
            "SELECT 집계함수(칼럼) OVER (PARTITION절, ORDER BY절, WINDOWING절)\nFROM 테이블;"
        ],
        describe: [
            "OVER은 분석절이라고 하는데 집계할 대상들에 대한 정보를 적어준다고 할 수 있을거 같다",
            "여기에 PARTITION절을 넣어서 특정 칼럼을 기준으로 대상을 정하거나(GROUP BY 마냥)",
            "ORDER BY절을 넣어서 대상들을 정렬하거나",
            "WINDOWING을 이용하여 대상을 칼럼을 기준으로 정하는 것이 아닌 질의결과에서 ROW의 범위를 정해줘 대상을 정할 수도 있다",
            "PARTITION, ORDER BY, WINDOWING은 모두 선택사항이다 - 반드시 들어가야되는 요소들은 아님"
        ],
        caution: [],
        tip: []
    },
    {
        type: "code",
        title: "PARTITION 절",
        command: [
            "SELECT 집계함수(칼럼1) OVER (PATRTITION BY 칼럼2)\nFROM 테이블;",
        ],
        describe: [
            "PARTTITION은 GROUP과 약간 유사한 점이 있다",
            "GROUP을 쓸 경우에는 같은 칼럼값을 갖는 애들끼리 그룹을 지어 그 그룹에 대해 정보를 출력할 수 있게 해주는 반면",
            "PARTITION을 쓸 경우에는 어떤 인스턴스의 칼럼값과 같은 칼럼값을 갖는 애들끼리 가상의 그룹을 지어 걔네들을 집계하여 출력한다",
            "위의 예시로 보면 - 테이블의 한 인스턴스에 대한 집계함수 결과를 내고자 할 때",
            "그 인스턴스의 칼럼2값과 같은 칼럼2의 칼럼값을 갖는 애들끼리 그룹을 지어서 그 그룹의 칼럼1 칼럼값들에 대해 집계를 하는 것",
            "원래는 하나의 인스턴스로는 집계합수를 쓸 수 없기 때문에, 그 인스턴스와 유사한 애들을 묶어서(이제 그 묶는 기준이 칼럼2가 되는 것) 그놈들에 대해 집계를 내는 거라고 생각하면 된다"
        ],
        caution: [],
        tip: []
    },
    {
        type: "code",
        title: "WINDOWING 절",
        command: [
            "SELECT 집계함수(칼럼1) OVER (ROWS UNBOUNDED PRECEDING)\nFROM 테이블;",
            "SELECT 집계함수(칼럼1) OVER (RANGE 3 PRECEDING)\nFROM 테이블;",
            "SELECT 집계함수(칼럼1) OVER (ROWS BETWEEN 3 PRECEDING AND UNBOUNDED FOLLOWING)\nFROM 테이블;",
        ],
        describe: [
            "ROW vs RANGE : ROW는 현재 행을 기준으로 \'행\'단위로 윈도우 범위를 설정하고 RANGE는 현져 행의 \'칼럼값\'을 기준으로 윈도우 범위를 설정한다",
            "UNBOUNDED vs 숫자 : UNBOUNDED는 조회된 결과(혹은 파티션)의 시작과 끝, 숫자를 쓰면 현재행을 기준으로 위 혹은 아래의 몇개 행을 윈도우로 설정할건지를 말함(UNBOUNDED는 말 그대로 제한이 없다는 뜻이므로 현재행을 기준으로 위 혹은 아래 끝까지 윈도우의 크기를 성정하는 셈)",
            "PRECEDING vs FOLLOWING : ~ PRECEDING가 ~로 범위의 시작을 설정한다는 뜻, ~ FOLLOWING이 ~로 범위의 끝을 설정한다",
            "범위의 시작과 끝은 하나만 지정해줘도 되고 BETWEEN AND를 통해 시작과 끝을 둘 다 설정해줄 수 있다"
        ],
        caution: [],
        tip: []
    },
    {
        type: "code",
        title: "RANK, DENSE_RANK, ROW_NUMBER",
        command: [
            "SELECT RANK() OVER (ORDER BY 칼럼1 DESC)\nFROM 테이블들;",
            "SELECT DENSE_RANK() OVER (ORDER BY 칼럼1 DESC)\nFROM 테이블들;",
            "SELECT ROW_NUMBER() OVER (ORDER BY 칼럼1 DESC)\nFROM 테이블들;",
        ],
        describe: [
            "이 셋 다 순위를 출력해주는 함수이지만 중복등수가 있을때 다르게 처리한다",
            "RANK()의 경우에는 중복순위가 있을때 다음 순위는 그만큼 순위가 낮아진다 - 예를들어 2등이 2명이면 다음 순위는 4등이 된다",
            "DENSE_RANK()의 경우에는 중복순위가 있어도 다음 순위가 낮아지지 않는다 - 예를들어 2등이 2명이면이어도 다음 순위는 3등이 된다",
            "ROW_NUMBER()의 경우에는 중복값이 있어도 중복순위를 매기지 않는다 - 말 그대로 행 번호이기 때문에 위에있는놈에게 더 낮은 숫자를 부여하게 된다"
        ],
        caution: [],
        tip: [
            "RANK와 DENSE_RANK, ROW_NUMBER는 순위를 정하는 함수이기 때문에 OVER안에 ORDER BY를 보통 같이 써준다",
        ]
    },
    {
        type: "code",
        title: "NTILE",
        command: [
            "SELECT NTILE(숫자) OVER (뭐시기 ORDER BY 뭐시기)\nFROM 테이블들;",
        ],
        describe: [
            "NTILE은 OVER절에 있는 정렬되어있는 대상을 (숫자)개로 등급을 나눠주는 함수이다",
        ],
        caution: [],
        tip: [
            "등급을 나눠줘야하니까 당연히 ORDER BY랑 같이 쓰는 경우가 많다"
        ]
    },
    {
        type: "code",
        title: "FIRST_VALUE, LAST_VALUE",
        command: [
            "SELECT FIRST_VALUE() OVER (뭐시기 ORDER BY 뭐시기)\nFROM 테이블들;",
            "SELECT LAST_VALUE() OVER (뭐시기 ORDER BY 뭐시기)\nFROM 테이블들;",
        ],
        describe: [
            "FIRST_VALUE()는 WINDOW의 맨 첫 ROW를 고르는 함수이고",
            "LAST_VALUE()는 WINDOW의 맨 마지막 ROW를 고르는 함수이고",
        ],
        caution: [],
        tip: [
            "ORDER BY로 정렬한 후 사용해 1순위, 마지막 순위 등을 갖고오는 데에 사용할 수 있다"
        ]
    },
    {
        type: "code",
        title: "LAG, LEAD",
        command: [
            "SELECT LAG(칼럼, 숫자) OVER (뭐시기 ORDER BY 뭐시기)\nFROM 테이블들;",
            "SELECT LEAD(칼럼, 숫자) OVER (뭐시기 ORDER BY 뭐시기)\nFROM 테이블들;",
        ],
        describe: [
            "LAG(칼럼, 숫자)는 해당 \"숫자\"만큼 위에(이전에)있는 행의 해당\"칼럼\"값을 가져오는 거고",
            "LEAD(칼럼, 숫자)는 해당 \"숫자\"만큼 아래에(이후에)있는 행의 해당\"칼럼\"값을 가져오는 거다",
        ],
        caution: [],
        tip: [
            "숫자를 안쓰면 그냥 위 혹은 아래의 한 행을 가리킨다"
        ]
    },
];

export default PostIt;