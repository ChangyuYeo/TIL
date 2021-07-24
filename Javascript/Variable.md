# variable(변수) 신문법 총정리
기존의 자바스크립트 변수는 var라는 키워드로만 선언이 가능했다.
<br />

```javascript
var name = 'Yeo'
```
<br />

신문법에서는 새로운 키워드들이 추가가 됬는데
<br />
```javascript
var name
let name
const name
```

let과 const라는 키워드로 선언이 가능하다.
<br />

## var, let, const 차이점
키워드들의 차이점을 간단하게 정리해보면
<br />

키워드 | 재할당 | 재선언 | 사용 범위
--- | --- | --- | ---
var | o | o | function
let | x | o | { }
const | x | x | { }

### 변수의 값 할당
var의 경우에는

```javascript
var name = 'Yeo'
name = 'Kim'
```

선언과 동시에 할당을 하고, 'Kim' 으로 재할당을 하는게 가능하다.
<br />

let, const의 경우에는

```javascript
let name = 'Yeo'
let name = 'Kim' // 불가능, 에러
name = 'Kim' // 가능

const name = 'Yeo'
const name = 'Kim' // 불가능, 에러
name = 'Kim' // 불가능, 에러
```

- let과 const는 재할당이 불가능하며,
- let은 var와 같이 재선언이 가능하고,
- const로 만들면 값 재선언이 불가능해서 **상수**라고 한다
<br />

하지만 const 변수에 오브젝트가 있으면, 오브젝트 내의 데이터는 변경이 가능하다.
<br />

```javascript
const object = { name: 'Yeo' }
object.name = 'Kim'
```

오브젝트의 테이터를 변경하는 것은 변수를 재할당 하는 것이 아니기 때문에 가능하다.
<br />
만약 완전 변경불가능한 오브젝트를 만들고 싶다면
<br />
Object.freeze()이라는 자바스크립트 기본함수를 이용해 만들 수 있다.
<br /><br />

### 변수의 사용범위
변수는 사용할 수 있는 범위가 있다
<br /> 
var의 경우 사용범위가 function이며, let과 const는 { } 안에서 사용이 가능하다.
<br />

```javascript
function func() {
  var name = "Yeo"
  console.log(name) 
}
console.log(name) // 사용 불가능
```

위 코드를 보면 function안에서 선언한 var변수는 function밖에서 사용하지 못하는 모습을 보여주고 있다.
<br />

```javascript
if (true) {
  let name = 'Yeo'
  console.log(name)
}

console.log(name) // 사용 불가능
```

위 내용처럼 let변수는 { } 안에 선언하면 중괄호 내에서만 사용이 가능하다.
<br /><br />

## Hoisting(호이스팅) 현상
자바스크립트의 변수와 함수는 선언하면 호이스팅이라는 현상이 일어난다. 
<br />
호이스팅은 변수나 함수의 **선언부분**을 변수의 범위 맨위로 강제로 끌고가서 가장 먼저 해석하는 현상이라고 생각하면 된다. 
<br />

```javascript
function func() {
  console.log('test')
  var name = 'Yeo'
}
```
만약 이런 코드를 작성했다 가정한다 <br />
여기서 자바스크립트가 이 코드를 해석하는 순서는

```javascript
function func() {
  var name
  console.log('test')
  name = 'Yeo'
}
```

name이라는 변수를 선언했던 부분을 강제로 변수의 범위 맨 위로 끌고사서 해석을 하게되는데, 이것이 `호이스팅` 현상이다.
<br />
변수 뿐만 아니라 함수도 호이스팅 현상이 나타나며, let, const 키워드로 만들어도 결과가 똑같다.
<br />

```javascript
console.log(name)
var name = 'Yeo'
console.log(name)
```

위 코드의 결과는 undefined와 Yeo가 차례대로 출력이되는데,
<br />

```javascript
var name
console.log(name)
name = 'Yeo'
console.log(name)
```

호이스팅 때문에 이런 순서로 코드가 실행되기 때문에 이런 결과가 나오게 된다.
<br />
> let, const 는 var와 다르게 호이스팅시 undefined 가 자동으로 할당이 안돼며 에러가 발생하게 된다
<br />

### 전역변수
변수는 바깥에 있는 변수는 안쪽에서 자유롭게 사용이 가능한 특징을 가지고 있다. (참조가 가능하다.)
<br />
전역변수는 모든 함수나 if, for등 내부에서 공통으로 사용할 수 있는 변수를 뜻한다.
<br />

```javascript
var age = 24

function func() {
  console.log(age)
}
```

이렇게 변수를 최상단에 위치하게되면 전역변수로 사용할 수 있게 된다. 
<br />

#### window로 전역변수 만들기
window객체에 변수를 새로 만들어 전역변수처럼 사용할 수 있는데,
<br />

```javascript
window.age = 24

console.log(age) // 전역변수 age 실행
console.log(window.age) // 위 코드와 동일 (구분이 쉬워짐)
```

이런식으로 전역변수를 만들면 나중에 전역변수를 구분할 때 쉬운 장점이 있다

