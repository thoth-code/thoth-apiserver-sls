let PostIt = [
    {
        type: "code",
        title: "그룹에 속하는 인스턴스 갯수 구하기",
        command: [
            "COUNT(*)"
        ],
        describe: [
            "그룹이나 검색결과 전체에 대해 속하는 인스턴스의 갯수를 구한다"
        ],
        caution: [],
        tip: [
            "괄호 안에는 칼럼이 들어가나 어차피 인스턴스의 갯수를 구하는 것이므로 모든 칼럼을 나타내는 *를 주로 쓴다"
        ]
    },
    {
        type: "code",
        title: "최대, 최소, 평균, 총합 구하기",
        command: [
            "MAX(칼럼)",
            "MIN(칼럼)",
            "AVG(칼럼)",
            "SUM(칼럼)"
        ],
        describe: [
            "그룹이나 검색결과 전체에 대해",
            "MAX : 최댓값을 구함",
            "MIN : 최솟값을 구함",
            "AVG : 평균값을 구함",
            "SUM : 총합을 구함"
        ],
        caution: [],
        tip: []
    },
];

export default PostIt;