let PostIt = [
    {
        type: "code",
        title: "Table 생성",
        command: ["CREATE TABLE 이름 {\n칼럼1 NUMBER(자릿수),\n칼럼2 VARCHAR2(자릿수),\n칼럼3 DATE(자릿수)\n};"],
        describe: ["NUMBER는 해당 칼럼에 들어올 값의 자료형(Domain)이 해당 자릿수만큼의 숫자(3이면 100~999)라는 뜻",
                    "VARCHAR2는 해당 칼럼에 들어올 값의 자료형(Domain)이 해당 자릿수만큼의 문자열(3이면 예를들어 aaa)라는 뜻",
                    "DATE는 해당 칼럼에 들어올 값의 자료형(Domain)이 날짜라는뜻(문자열을 DATE자료형으로 변환하는건 INSERT에서 알랴줌)"],
        caution: [],
        tip: []
    },
    {
        type: "code",
        title: "칼럼 옵션",
        command: ["CREATE TABLE 이름 {\n칼럼1 NUMBER(자릿수) NOT NULL,\n칼럼2 NUMBER(자릿수) NOT NULL DEFAULT 기본값\n};"],
        describe: [
            "NOT NULL은 해당 칼럼에 들어올 값이 반드시 존재해야된다는것(말그래도 NULL이면 안된다는거임 - INSERT할때 비워두지마라)",
            "DEFAULT는 값을 입력하지 않으면 기본값을 넣어주는 옵션이다 - NOT NULL일때는 NULL을 입력하면 안되므로 입력하지 않아 디폴트값을 넣어주는 용도로 사용 가능"
        ],
        caution: [
            "DEFAULT는 NULL값을 대체해주는놈이 아니다 - NOT NULL이 아닐때 NULL을 입력하면 NULL이 들어가지만 입력하지 않으면 디폴트값이 들어감"
        ],
        tip: []
    },
    {
        type: "code",
        title: "칼럼 CHECK 제약조건",
        command: ["CREATE TABLE 이름 {\n칼럼1 VARCHAR2(자릿수) CHECK(칼럼1 IN '이런', '저런', '값들'),\n칼럼2 NUMBER(자릿수) CHECK(칼럼2 &lt; 값),\n칼럼2 NUMBER(자릿수) CONSTRAINT 제약조건이름 CHECK(칼럼2 &lt; 값)\n};"],
        describe: [
            "CHECK-IN 을 통해 해당 칼럼에 들어올 수 있는 값들을 특정하게 정해줄 수 있고",
            "CHECK-대소비교를 통해 해당 칼럼에 들어올 수 있는 값의 범위를 정해줄 수도 있다",
            "그리고 CONSTRAINT를 통해 제약조건의 이름도 지정해줄 수 있다"
        ],
        caution: [],
        tip: []
    },
    {
        type: "code",
        title: "칼럼 PRIMARY KEY 제약조건",
        command: ["CREATE TABLE 이름 { \n--방법1-- \n칼럼1 NUMBER(자릿수) CONSTRAINT 기본키이름 PRIMARY KEY,\n--방법2-- \n칼럼2 NUMBER(자릿수), \nCONSTRAINT 기본키이름 PRIMARY KEY(칼럼2)\n};"],
        describe: [
            "방법1처럼 한줄애 다 써줄수도 있고",
            "방법2처럼 위에다가는 칼럼이름과 도메인만 적어주고 아래쪽에 제약조건들을 몰아서 적어줄 수도 있다"
        ],
        caution: [],
        tip: ["보통 기본키이름은 '칼럼이름_PK'나 'PK_칼럼이름' 이렇게 지정해준다"]
    },
    {
        type: "code",
        title: "칼럼 FOREIGN KEY 제약조건",
        command: ["CREATE TABLE 이름 {\n--방법1--\n칼럼1 NUMBER(자릿수) CONSTRAINT 외래키이름 REFERENCES 테이블이름,\n--방법2-- \n칼럼2 NUMBER(자릿수), \nCONSTRAINT 외래키이름 FOREIGN KEY(칼럼2) REFERENCES 테이블이름\n};"],
        describe: [
            "얘도 마찬가지로 방법1처럼 한줄애 다 써줄수도 있고",
            "방법2처럼 위에다가는 칼럼이름과 도메인만 적어주고 아래쪽에 제약조건들을 몰아서 적어줄 수도 있다"
        ],
        caution: [],
        tip: ["보통 외래키이름은 '칼럼이름_FK'나 'FK_칼럼이름' 이렇게 지정해준다"]
    },
    {
        type: "code",
        title: "칼럼 UNIQUE KEY 제약조건",
        command: ["CREATE TABLE 이름 {\n--방법1-- \n칼럼1 NUMBER(자릿수) CONSTRAINT 고유키이름 UNIQUE,\n--방법2-- \n칼럼2 NUMBER(자릿수), \nCONSTRAINT 고유키이름 UNIQUE(칼럼2)\n};"],
        describe: [
            "얘도 마찬가지로 방법1처럼 한줄애 다 써줄수도 있고",
            "방법2처럼 위에다가는 칼럼이름과 도메인만 적어주고 아래쪽에 제약조건들을 몰아서 적어줄 수도 있다"
        ],
        caution: [],
        tip: ["보통 고유키이름은 '칼럼이름_UK'나 'UK_칼럼이름' 이렇게 지정해준다"]
    },
    {
        type: "code",
        title: "테이블 삭제",
        command: [
            "DROP TABLE 이름;",
            "DROP TABLE 이름 CASCADE CONSTRAINT;",
            "DROP TABLE 이름 RESTRICT CONSTRAINT;"
        ],
        describe: [
            "CASCADE는 외래키가 연결되어있으면 연결된놈까지 연쇄적으로 삭제한다는 의미이고",
            "RESTRICT는 외래키가 연결되어있지 않을 때만 삭제가 가능하다는 의미이다"
        ],
        caution: [],
        tip: []
    },
    {
        type: "code",
        title: "테이블 수정",
        command: [
            "ALTER TABLE 이름 ADD 칼럼1 VARCHAR2(자릿수);",
            "ALTER TABLE 이름 MODIFY 칼럼1 VARCHAR2(자릿수);",
            "ALTER TABLE 이름 DROP 칼럼1 CASCADE;",
            "ALTER TABLE 이름 ADD CONSTRAINT 기본키이름 PRIMARY KEY(칼럼2);"
        ],
        describe: [
            "ADD를 통해 칼럼을 추가하거나",
            "MODIFY로 칼럼을 수정할 수 있고",
            "DROP을 통해 칼럼을 삭제하거나(CASCADE말고 RESTRICT도 쓸 수 있으며 마찬가지로 연쇄적 삭제, 연결고리가 없을때만 삭제의 의미이다.)",
            "ADD CONSTRAINT를 통해 제약조건을 추가할 수도 있다.(예시에서는 기본키 제약조건을 넣은 것)",
        ],
        caution: [
            "칼럼을 수정하는 것은 부분적으로 수정하는 것이 아니라 덮어쓰기이다 - 만약 기존의 칼럼 조건들도 같이 적어주지 않으면 기존의 조건들이 삭제되는셈"
        ],
        tip: []
    }
];

export default PostIt;