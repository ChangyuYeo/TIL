# 프로그래밍 방식 네비게이션
RouterLink 이외에도 프로그래밍 방식으로 라우팅을 제어할 수 있다.
<br />

라우터의 객체중 `$router` 에 여러 메소드들을 통해서 원하는 동작을 만들 수 있는데,
<br />
예를 들어, 다른 URL로 이동하기위해 `this.$router.push` 를 사용해 페이지를 이동할 수 있다.

선언적 방식	| 프로그래밍 방식
--- | ---
\<RouterLink :to='...'> | router.push('...')

<br />

## $router 메소드

메소드 | 설명
--- | ---
push | URL 이동. 히스토리 스택에 추가되므로 뒤로가기 버튼 동작시 이전 URL 로 이동
replace | URL 이동. 현재 URL 을 대체하기 때문에 히스토리 스택 쌓지 않음
go | 숫자만큼 뒤로가기 또는 앞으로 가기 (음수:backward, 양수: forward)

<br />

### $router.push
- push() 메소드는 template 내에서 \<RouteLink :to="/"> 를 통해 페이지 이동을 하면 이는 내부에서 `$router.push` 를 호출하는 것이다.
- push 메소드를 사용하면 히스토리 스택에 추가 되는데,
- 뒤로가기 버튼을 눌렀을때 순차적으로 스택에 쌓였던 전 페이지가 보이게 된다.

```vue
this.$router.push('detail')
```
<br />

### $router.replace
- replace() 메소드는 push() 메소드와 같이 URL 이동을 시키지만 히스토리 스택을 쌓지 않는 차이점이 있다.
- 단순히 현재 페이지를 전환하는 역할을 하기 때문이다.

```vue
this.$router.replace('about')
```
<br />

### $router.go
- go() 메소드는 파라미터로 넘긴 숫자만큼 히스토리 스택에서 앞, 뒤 페이지로 이동하는 메소드 이다.
- 음수는 이전, 양수는 다음 페이지를 보여주는데 해당 숫자의 URL 이 스택에 없으면 라우팅에 실패하게 된다.

```vue
this.$router.go(1)
this.$router.go(-2)
```