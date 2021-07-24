# Arrow function (화살표 함수)
> **화살표 함수**는 ES6 이후로 부터 사용할 수 있게 된 함수문법이다.
<br />

기존의 함수 선언은 이런 식으로 만들어 진다

```javascript
function func() {
  // 함수의 내용
}

// 익명함수
let func = function() {
  // 마찬가지로 함수의 내용
}

```

ES6 신문법을 사용해 기존 익명함수를 화살표함수로 만들어 사용이 가능하다
<br />

```javascript
let func = () => {
  // 함수의 내용이 들어가는 부분
}
```

function이라는 키워드 대신에 => 가 들어가는걸 볼 수 있다
<br /><br />

## 화살표 함수의 장점
### 함수 본연의 기능을 잘 표현하는 문법
function 문법의 사용이유는, 
<br />
1. 여러가지 기능을 하는 코드를 한 단어로 묶고 싶거나 나중에 재사용을 할 때,
1. 또는 입출력기능을 만들 떄 함수를 사용한다.
<br />
그리고 화살표 함수를 사용하면 입출력기능을 아주 직관적으로 표현해준다.

```javascript
let test = (number) => {
  return number * 2
}

console.log(test(5))
```

- 숫자를 넣으면 2를 곱해주는 함수를 만드는 코드이다
- 함수 표현식 자체가 'number가 number*2 가 되는 함수' 라고 이해가기가 쉬워진다
<br />

### 화살표함수는 생략이 가능하다
화살표함수는 조건이있으면 생략이 가능한 부분들이 있다.
- 파라미터가 하나라면 소괄호 생략가능
- 중괄호 안에 return이 한줄이라면 중괄호와 return도 생략가능

조건에 맞게 위에 코드를 생략을 해보면

```javascript
let test = number => number * 2

console.log(test(5))
```

이런식으로 좀 더 직관적으로 생략이 가능하다
<br /><br />

### 화살표 함수에 this 값
화살표 함수을 쓰면 내부에서 this값을 쓸 때 밖에 있던 this값을 그대로 사용한다고 생각하면 된다.

- 기존 함수는 함수가 쓰인 위치에 따라서 내부의 this 값이 변하기도 한다.
- 하지만 화살표 함수는 어디서 쓰던간에 내부의 this 값을 변화시키지 않는다.
- 즉, 외부에 있던 this의 의미를 그대로 내부에서도 사용이 가능한 함수가 화살표 함수이다.
<br />

```javascript
let object = {
  test: function() {
    console.log(this)
  }
}

object.test()
```

위의 코드의 this는 메소드를 가지고있는 오브젝트를 가르켜 object가 콘솔창에 출력이 된다
<br />
하지만 화살표 함수를 사용하면,

```javascript
let object = {
  test: () => {
    console.log(this)
  }
}

object.test()
```

- 콘솔창에 window 객체를 출력하는 결과를 볼 수 있다.
- 화살표함수에 this는 외부에 있던 this를 그대로 사용하기 때문에
- object 밖에 있던 this 즉, window 객체를 출력하게 된다.
