let PostIt = [
    {
        type: "code",
        title: "같은 칼럼값을 가진애들끼리 그룹짓기",
        command: [
            "SELECT 칼럼1, AVG(칼럼2)\nFROM 테이블\nGROUP BY 칼럼1\nHAVING 조건;"
        ],
        describe: [
            "칼럼1의 값이 같은 놈들을 하나의 그룹으로 묶어서 그룹단위의 조회를 하게 해주는 명령어",
            "HAVING은 그룹에 적용되는 조건으로, 조건에 맞지 않는 그룹은 조회되지 않는다"
        ],
        caution: [
            "SELECT 절에는 GROUP의 기준이되는 칼럼(GROUP BY에 지정해준 칼럼)과 함수들 외에는 오지 못한다",
            "HAVING 절에는 SELECT에 지정해준 결과로 출력할 칼럼 외에는 사용하지 못한다"
        ],
        tip: []
    },
    {
        type: "code",
        title: "ROLLUP",
        command: [
            "SELECT 칼럼1, 칼럼2, 집계함수(칼럼3)\nFROM 테이블들\nGROUP BY ROLLUP(칼럼1, 칼럼2);",
        ],
        describe: [
            "위와 같은 ROLLUP은 다음과 같다",
            "GROUP BY 칼럼1, 칼럼2\nUNION ALL\nGROUP BY 칼럼1\nUNION ALL\nGROUP BY를 사용하지 않았을때의 집계함수 결과"
        ],
        caution: [],
        tip: []
    },
    {
        type: "code",
        title: "CUBE",
        command: [
            "SELECT 칼럼1, 칼럼2, 집계함수(칼럼3)\nFROM 테이블들\nGROUP BY CUBE(칼럼1, 칼럼2);",
        ],
        describe: [
            "위와 같은 CUBE는 다음과 같다",
            "GROUP BY 칼럼1, 칼럼2\nUNION ALL\nGROUP BY 칼럼1\nUNION ALL\nGROUP BY 칼럼2\nUNION ALL\nGROUP BY를 사용하지 않았을때의 집계함수 결과"
        ],
        caution: [],
        tip: []
    },
    {
        type: "code",
        title: "GROUPING SETS",
        command: [
            "SELECT 칼럼1, 칼럼2, 집계함수(칼럼3)\nFROM 테이블들\nGROUP BY GROUPING SETS(칼럼1, 칼럼2);",
        ],
        describe: [
            "위와 같은 CUBE는 다음과 같다",
            "GROUP BY 칼럼1\nUNION ALL\nGROUP BY 칼럼2"
        ],
        caution: [],
        tip: []
    },
    {
        type: "code",
        title: "GROUPING 함수",
        command: [
            "SELECT 칼럼1, 칼럼2, 집계함수(칼럼3), GROUPING(칼럼1), GROUPING(칼럼2)\nFROM 테이블들\nGROUP BY ROLLUP(칼럼1, 칼럼2);",
        ],
        describe: [
            "GROUPNG함수는 해당 ROW가 집계함수의 결과를 나타내는 결과를 나타내기 위한 ROW일 경우에 1을 출력하고 아니면 0을 출력한다",
            "GROUPING(특정킬럼)의 경우에는 그 칼럼의 모든 칼럼값을 집계한 결과를 나타내는 ROW에 1을 출력한다",
            "예를들어 ROLLUP(칼럼1, 칼럼2)에 대해서는",
            "GROUP BY 칼럼1의 집계결과를 보여주는 ROW의 경우에 칼럼2의 모든 칼럼값을 집계했으므로 GROUPING(칼럼2)이 1이 된다",
            "GROUP BY를 사용하지 않았을때의 집계 결과를 나타내는 ROW의 경우 칼럼1와 칼럼2의 모든 칼럼값을 집계한 것이므로 GROUPING(칼럼1)과 GROUPING(칼럼2)이 모두 1이 된다"
        ],
        caution: [],
        tip: []
    },
];

export default PostIt;