let PostIt = [
    {
        type: "code",
        title: "Instance 추가",
        command: ["INSERT INTO 테이블이름 (칼럼1이름, 칼럼2이름)\nVALUES (칼럼1값, 칼럼2값);"],
        describe: [
            "위 괄호에서 적어준 칼럼 이름 순서에 맞게 그 칼럼에 들어갈 값들을 아래 괄호에 적어주면 된다",
            "또한 값들을 칼럼 조건에 맞게(도메인, 제약조건, NOT NULL같은 것들에 위배되지 않게) 적어주면 된다"
        ],
        caution: [],
        tip: [
          "칼럼이름 안적어줘도 칼럼에 들어갈 값들을 테이블 생성시의 칼럼 순서에 맞게 써주면 별 문제 없드라"
        ]
    },
    {
        type: "code",
        title: "Instance 수정",
        command: ["UPDATE 테이블이름\nSET\n칼럼1이름 = 칼럼1값\n칼럼2이름 = 칼럼2값\nWHERE 조건;"],
        describe: [],
        caution: ["인스턴스를 선택하는것은 무조건 저 WHERE절을 이용하므로 조건을 걸어주지 않으면 모든 인스턴스가 수정된다."],
        tip: []
    },
    {
        type: "code",
        title: "Instance 삭제",
        command: ["DROP FROM 테이블이름 WHERE 조건;"],
        describe: [],
        caution: ["인스턴스를 선택하는 것은 WHERE절을 이용하므로 조건을 걸어주지 않으면 모든 인스턴스가 삭제된다."],
        tip: [
            "FROM은 생략 가능하다"
        ]
    },
    {
        type: "code",
        title: "다른테이블에서 갖고와서 추가",
        command: ["INSERT 테이블명 (칼럼1, 칼럼2)\nSELECT 칼럼1, 칼럼2 FROM 저쩌고 WHERE 뭐시기"],
        describe: [
            "INSERT-SELECT를 이용해서 다른 테이블에서 인스턴스를 선택해서 추가할 수 있다"
        ],
        caution: [
            "다만 SELECT할때 칼럼들의 제약조건이나 제대로된 값이 순서에 맞게 매핑되도록 해야 한다"
        ],
        tip: []
    }
];

export default PostIt;