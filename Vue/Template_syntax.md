# 템플릿 문법 정리
## 보간법
- 데이터 바인딩의 가장 기본 형태
- 이중 중괄호 구문을 이용해 문자열을 보간하는 방법
- 중괄호 안에는 실제 데이터가 대체되고, 데이터가 변경될 때 마다 갱신이 되는 반응성 이라는 개념을 갖는다.
- v-once 디렉티브를 사용하면 데이터가 변경이 되어도 갱신이 되지 않는 일회성 으로만 제공할 수 있다.
<br />

```javascript
// 보간법
<div>{{ data }}</div>

// 일회성 보간법
<div v-once>{{ msg }}<div>
```

<br /><br />

## 원시 HTML
- 이중 중괄호는 데이터를 HTML이 아닌 일반 텍스트로 해석하기 때문에,
- 실제 HTML을 출력하고 싶다면 `v-html`을 사용하면 된다.
<br />

```javascript
<h1 v-html="tag"></h1> 

// script의 data 부분
return {
  tag: '<div style="color: royalblue;">test</div>'
}
```

<br /><br />

## 속성
- 이중 중괄호 에서는 HTML 속성에 사용할 수 없다.
- 대신 `v-bind` 디렉티브를 사용하면 된다.
- v-bind는 약어로 `:` 으로 사용이 가능하다
<br />