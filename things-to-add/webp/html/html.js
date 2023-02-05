const content = [
    {
        title: "입력창 구성하기",
        code: [
            `<form action="요청을 보낼 URL">
                <label for="연결할 input태그의 id">
                    <legend>label 제목</legend>
                </label>
                <input id="labal의 for에 적혀있는거">
            </form>`,
            `<form action="요청을 보낼 URL">
                <label>
                    <legend>label 제목</legend>
                    <input>어쩌고</input>
                </label>
            </form>`
        ],
        hashtag: [
            "html", "form", "label", "legend"
        ]
    },
    {
        title: "문자 입력창",
        code: [
            `<input type="text" name="URL 쿼리의 키">`,
        ],
        hashtag: [
            "html", "input", "text"
        ]
    },
    {
        title: "이메일 입력창",
        code: [
            `<input type="email" name="URL 쿼리의 키" value="URL 쿼리의 초기값">`,
        ],
        hashtag: [
            "html", "input", "email"
        ]
    },
    {
        title: "비밀번호 입력창",
        code: [
            `<input type="password" name="URL 쿼리의 키" value="URL 쿼리의 초기값">`,
        ],
        hashtag: [
            "html", "input", "password"
        ]
    },
    {
        title: "form태그에 입력한내용 전송하기",
        code: [
            `<input type="submit" value="버튼에 보여줄 문구">`,
        ],
        hashtag: [
            "html", "input", "submit"
        ]
    },
    {
        title: "일반 버튼",
        code: [
            `<input type="button" value="버튼에 보여줄 문구">`,
        ],
        hashtag: [
            "html", "input", "button"
        ]
    },
    {
        title: "체크박스",
        code: [
            `<input type="ckeckbox" name="URL 쿼리의 키" value="체크박스 선택하면 적용될 값">`,
            `<input type="ckeckbox" name="URL 쿼리의 키" value="체크박스가 선택된채로 시작함" checked>`,
        ],
        hashtag: [
            "html", "input", "checkbox"
        ]
    },
    {
        title: "사용자에겐 보이지 않지만 같이 URL로 전송하고싶은 내용이 있을 때",
        code: [
            `<input type="hidden" name="URL 쿼리의 키" value="URL 쿼리로 전송될 값">`,
        ],
        hashtag: [
            "html", "input", "hidden"
        ]
    },
    {
        title: "선택창",
        code: [
            `<select name="URL 쿼리의 키">
                <option value="선택했을 때 URL 쿼리로 전송될 값">옵션</option>
                <option value="선택했을 때 URL 쿼리로 전송될 값">옵션</option>
                <option value="선택했을 때 URL 쿼리로 전송될 값">옵션</option>
            </select>`,
        ],
        hashtag: [
            "html", "select", "option"
        ]
    },
    {
        title: "표 만들기",
        code: [
            `<table>
                <thead>
                    <tr>
                        <th>열 이름</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>행의 한 칸에 들어갈 내용</td>
                    </tr>
                </tbody>
            </table>`,
        ],
        hashtag: [
            "html", "table", "thead", "tr", "th", "tbody", "td"
        ]
    },
]