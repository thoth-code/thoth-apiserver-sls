let PostIt = [
    {
        type: "concept",
        title: "뷰가 뭐임",
        command: [],
        describe: [
            "뷰는 간단하게 말하면 읽기 전용 테이블이라고 생각하면 된다",
            "물론 읽기만 되는건 아니지만 인스턴스의 추가나 수정이 제한적이다",
            "또한 SELECT쿼리문을 이용해 뷰를 생성하기 때문에 SELECT쿼리문을 저장하는 용도나",
            "데이터베이스에 접속하는 다른 사용자에게 보여주기 원하는 데이터만을 골러서 보여주는 용도로 사용된다"
        ],
        caution: [],
        tip: []
    },
    {
        type: "code",
        title: "뷰 생성",
        command: [
            "CREATE VIEW 뷰 이름 AS\nSELECT 어쩌고"
        ],
        describe: [
            "참쉽쥬"
        ],
        caution: [],
        tip: []
    },
];

export default PostIt;