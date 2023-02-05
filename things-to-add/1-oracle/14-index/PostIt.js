let PostIt = [
    {
        type: "code",
        title: "Index 생성",
        command: [
            "CREATE INDEX 인덱스이름 ON 테이블명(칼럽1, 칼럼2);",
            "CREATE UNIQUE INDEX 인덱스이름 ON 테이블명(칼럽1, 칼럼2);",
        ],
        describe: [
            "이렇게 하면 해당 테이블의 명시한 칼럼들로 인덱스 테이블이 생성된다",
        ],
        caution: [],
        tip: []
    },
    {
        type: "code",
        title: "Index 조회",
        command: [
            "SELECT * FROM USER_INDEXES WHERE TABLE_NAME='테이블이름';",
        ],
        describe: [
            "생성된 인덱스는 USER_INDEXES 시스템 뷰에서 조회가 가능하다",
            "이 뷰의 TABLE_NAME칼럼을 이용해 테이블명으로 인덱스 테이블을 조회할 수 있다"
        ],
        caution: [],
        tip: []
    },
    {
        type: "code",
        title: "Index 삭제",
        command: [
            "DROP INDEX 인덱스명;",
        ],
        describe: [
            "제곧내",
        ],
        caution: [],
        tip: []
    },
    {
        type: "code",
        title: "Index 리빌드",
        command: [
            "ALTER INDEX 인덱스명 REBUILD;",
        ],
        describe: [
            "인스턴스의 변경이나 삭제 등의 연산이 자주 일어나게 되면 인덱스 테이블의 트리가 깊이가 깊어지게 된다",
            "따라서 주기적으로 이러한 리빌드 과정을 거쳐 인덱스를 다시 새로고침해주는 것이 중요하다",
        ],
        caution: [],
        tip: []
    },
];

export default PostIt;