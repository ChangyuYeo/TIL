# Destructuring 
Array, Object 자료형에 있는 자료들을 변수로 꺼내고 싶을 떄 destructuring 문법을 사용하면 변수를 쉽게 만들 수 있다.
<br /><br />

## Array 안에 데이터를 변수로 담는 방법

```javascript
var array = [1, 2, 3]
var num1 = array[0]
var num2 = array[1]
var num3 = array[2]
```

`destructuring` 문법을 사용하지 않고 기존에 방법으로 배열 안에 데이터를 꺼낸 방법이다.
<br />
여기서 `destructuring` 문법을 사용해 더 쉽게 만들 수 있다.
<br />

```javascript
var array = [1, 2, 3]
var [ num1, num2, num3 ] = array
```

이전 코드보다 더 쉽고 직관적으로 바뀌였다.
<br />

참고로 디폴트 값을 설정할 수 있다.
<br />

```javascript
var array = [1, 2, 3]
var [ num1, num2, num3, num4 = 10 ] = array 
```

num4는 아무 값도 안들어오는 경우 10이라는 기본 값을 할당해 줘서 undefined가 할당되는 것을 방지 할 수 있다.
<br />

## Object 안에 데이터를 변수로 담는 방법

```javascript
var people = {
  name: 'Changyu',
  age: 24
}

var { name, age } = people
```

people이라는 객체를 구조분해 하여 name, age 라는 변수가 생성되고 각각의 변수에 값을 할당 되어 있다.
<br />

> 오브젝트에서 key: vaule 의 이름이 같으면 하나로 생략이 가능하다. <br />
> { name: name } -> { name }

<br />

## 함수 파라미터 변수 만들 때,

```javascript
function func(name, age) {
  console.log(name)
  console.log(age)
}

var obj = { name: 'Yeo', age: 24 }
func(obj.name, obj.age)
```

기본의 방식처럼 만들어도 되지만,
<br />

```javascript
function func({ name, age }) {
  console.log(name)
  console.log(age)
}

var obj = { name: 'Yeo', age: 24 }
func(obj)
```

이렇게 destructuring문법을 이용해서 만들어 사용해도 된다.