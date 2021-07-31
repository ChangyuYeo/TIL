# 템플릿 문법 정리
## 보간법
### 문자열
vue의 데이터 바인딩 형태는 `이중 중괄호` 를 이용해서 문자열 보간법 이다.
<br />
**v-once**를 이용하면 해당 데이터가 변경되어도 갱신되지 않은 일회성 보간을 만들 수 있다. ~(잘안씀)~
<br />

```javascript
<div>{{ data }}</div>

// 일회성 보간법
<div v-once>{{ msg }}<div>
```

<br /><br />

### 원시 HTML
실제 HTML을 출력하고 싶다면 `v-html`을 사용하면 된다.

```javascript
<h1 v-html="tag"></h1> 

// script의 data 부분
return {
  tag: '<div style="color: royalblue;">test</div>'
}
```

<br /><br />

### 속성
이중 중괄호에는 HTML 속성에 사용할 수 없지만, `v-bind` 를 쓰면 사용이 가능하다.
<br />