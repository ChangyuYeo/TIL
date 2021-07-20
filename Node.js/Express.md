# Express
Express는 웹앱을 위한 Node.js 웹 애플리케이션 프레임워크 이다 <br />
Node.JS에서 웹 프레임 워크를 사용하면 간편하게 웹 서버를 구축할 수 있다. 
<br /><br />

## express 개념
- 어플리케이션
- 미들웨어
- 라우팅
- req, res (요청, 응답)

### 미들웨어
클라이언트에서 req(요청),res(응답) 사이 중간(미들)에 위치하는 함수로, 요청과 응답 사이클에서 중간에 거쳐가는 함수들이라고 생각하면된다 <br />
보통 use() 라는 함수를 사용하며, next() 함수를 호출해야만 다음 로직을 수행한다
<br />

### 라우팅
- 요청한 url에 대해 적절한 핸들링(처리하거나 관리하는) 함수로 연결해 주는 기능
- express는 라우팅을 위한 Router라는 클래스도 있다

### req, res 관련 메소드
req 메소드
- req.params
- req.query 
- req.body
- req.headers

res 메소드
- res.status(code)
- res.send(body)
- res.json(json)
<br /><br />

## 디렉토리의 구조

```
express_tutorial/
├── package.json
├── public
│   └── css
│   └── style.css
├── router
│   └── main.js
├── server.js
└── views
 ├── about.html
 └── index.html
```
express의 디렉토리 구조 이다
<br /><br />

## Express 서버 사용법

server.js
```javascript
const express = require('express')
const app = express()

app.listen(8080, () => {
  console.log('Express server has started on port 8080')
})
```

첫 두줄은 express 첨부와 사용 <br />
app.listen()은 원하는 포트에 서버를 오픈하는 부분 <br />

listen()함수는 두개의 인자값이 필요하다<br />
listen(서버를 오픈할 포트번호, 콜백함수로 서버 오픈시 실행할 코드)<br />

```
$ node server.js
```

위 명령어를 입력하면 서버를 동작할 수 있다
<br /><br />

## nodemon
nodemond은 서버가 껐다가 켜는 작업을 자동화 시킬 수 있는 라이브러리다

```
$ npm install -g nodemon
```

설치가 완료되면 

```
$ nodemon server.js
```

명령어로 서버를 실행해준다 <br />
이제 파일 저장할 때 마다 알아서 서버를 새로 시작해준다
<br /><br />

## GET 요청
get()은 주소창에 입력 받을 때 실행할 사항들을 나타내는 라우트함수 <br />
Router를 정의하기 위해 GET요청을 해준다 <br />

```javascript
app.get('/', (req, res) => { 
  res.send('메인 페이지 입니다!')
})
```

브라우저에서 / 경로로 접속하면 메인페이지를 띄우는 Router를 만들 수 있다 <br />
이렇게 GET 요청을 이용해서 여러 파일과 연결할 수 있다 <br />

```javascript
app.get('/', (req, res) => { 
  res.send('메인 페이지 입니다!')
})
app.get('/about', (req, res) => { 
  res.send('about 페이지 입니다!')
})
```

Router의 코드들은 서버 코드와 다른 폴더 router라는 폴더를 만들어서 정리 <br />
<h3>GET 요청시 HTML 파일 보내주기</h3>
브라우저에서 / 방문시에 HTML 파일을 보내주기위해 파일을 작성한다. <br />

index.html
```HTML
<!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    <div>메인 페이지 입니다!!</div>
  </body>
</html>
```

HTML 파일을 생성했으면

server.js
```javascript
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
```

을 추가해서 / 경로로 접속시 해당 html을 연결한다

- sendFile() 함수: 파일을 보낼떄 사용한다
- __dirname: 현재 파일의 경로를 뜻한다
<br />

## POST 요청 (form 데이터)
post()는 request body에 parameter를 보내서 정보를 추출함<br />
클라이언트에서 서버로 post 요청을 보내려면 form을 쓰거나 ajax를 써야한다.

server.js
```javascript
app.post('/login', function(req, res){
  console.log(req.body)
  res.send('POST')
})
```

form을 쓰기위해서는 body-parser 미들웨어를 사용해야된다
<br /><br />

## body-parser 미들웨어
body-parser 는 node.js 모듈로 클라이언트의 post request body로 부터 파라미터를 추출할 수 있게 해주는 미들웨어

```
$ npm install body-parser
```

server.js
```javascript
const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended: true})) 
```

npm후 server.js에 다음 코드를 추가해주면 사용이 가능하다... <br />
2021년 이후로 설치한 프로젝트들은 body-parser 라이브러리가 express에 기본 포함되어있어서 따로 설치할 필요가 없다<br />

server.js
```javascript
app.use(express.urlencoded({extended: true})) 
```
지금은 위 코드만 추가해도 사용이 가능하다

```HTML
<form action="/add" method="POST">
  <input type="text" name="id" />
  <input type="password" name="pw" />
  <button type="submit">전송</button>
</form>
```

- 이렇게 버튼을 누르면 /add 라는 경로로 POST 요청을 하는 폼을 만들고
- 이제 전송버튼을 누를때 마다 서버에 input에 담긴 데이터들이 전송하게 된다
- input마다 name 속성을 이용해 각각의 이름을 넣어줌

이제 body-parser을 이용해서 form 데이터를 POST 방식으로 서버에 전송할 수 있다