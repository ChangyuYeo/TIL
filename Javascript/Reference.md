# Data Type
자바스크립트의 자료형은 크게 2개로 나누어 진다. 
<br />
1. `Primitive` data type
1. `Refernce` data type
<br /><br />

## Primitive data type (원시 타입)
primitive type (원시 타입)은 자료 자체가 변수에 저장되는 자료들이다.
<br />
문자, 숫자 자료형들이 대표적으로 primitive type 이다.
<br /><br />

## Refernce data type (참조 타입)
refernce type (참조 타입)은 자료를 변수에 직접 저장하는게 아닌 데이터에 대한 참조만 저장이 된다.
<br />
Array, Object 자료형들이 대표적으로 Refernce data 이다.
<br /><br />

## 원시 타입과 참조 타입 변수 복사
### 원시 타입 복사
각 변수 간에 원시 타입 데이터를 복사할 경우 데이터의 값이 복사
<br />

```javascript
let num1 = 100
let num2 = num1
num1 = 10

console.log(num1, num2)
```

1. 변수 num1을 선언 후 100을 할당
1. 변수 num2을 선언 후 num1에 있던 데이터 복사해서 할당
1. num1을 10으로 재할당
<br />

num1은 10, num2는 100 이라는 결과가 나온다.
<br />
보통 정상적인 복사가 이루어 진다.
<br /><br />

### 참조 타입 복사
각 변수 간에 참조 타입 데이터를 복사할 경우 데이터의 참조가 복사
<br />

```javascript
let data = {
  name: 'Yeo',
  age: 24
}

let data2 = data

data.name = 'Park'

console.log(data, data2)
```

1. object 자료형 data을 선언 후 자료를 넣어주고
1. data2은 data에 있던 자료를 복사해서 할당하고
1. data 안의 name을 변경했다.
<br />

결과를보면 둘 다 { name: "Park", age: 24 } 라는 결과를 출력하게 된다.
<br />
즉, data와 data2는 동일한 참조를 하고 있으며, 동일한 객체를 가르키고 있는 것을 알 수 있다.
<br /><br />

## 참조 타입의 특징
### 참조 타입 간의 비교
값이 같은 object 두개를 만들고 비교를 해보면
<br />

```javascript
var obj = {
  name: 'Yeo'
}

// 새로운 object 생성
var obj2 = {
  name: 'Yeo'
}

console.log(obj == obj2, obj === obj2) // 둘 다 false
```

오브젝트안 데이터의 내용이 똑같기 때문에 true가 출력이 될 것 같지만, 모두 false를 출력을 하고 있다.
<br />

이유는, 참조하는 객체가 각각 다르기 때문에 false를 출력하는 것 이다.
<br /><br />

### 함수를 이용해 참조 타입 변경?
object의 내용을 바꿔주는 함수를 만들어서 실행해보면
<br />

```javascript
var test = {
  name: 'Yeo'
}

function func(obj) {
  obj = {
    name: 'Kim'
  }
}

func(test)
```

object의 내용을 { name: 'Kim' } 으로 재할당 해주는 함수인데 실행해보면 의도와 다르게 재할당이 되지가 않는다.
<br />

> 함수의 파라미터는 일종의 변수처럼 생성되며, 사라진다 
<br />

작성한 코드를 조금 다른 시점으로 보면
<br />

```javascript
//자바스크립트의 시점

var test = {
  name: 'Yeo'
}

function func(obj) {
  obj = {
    name: 'Kim'
  }
}

func(var obj = test) // 일종의 변수처럼 만들어 진다고 생각하면 된다
```

그럼 결국 test와 obj는 같은 객체를 참조하고 있는 중이라 해석을 할 수 있다.
<br />
그런데 함수 내부를 보면 obj가 재할당 되고 있는데, 이것은 test를 전혀 건드리지 않기 때문에 test가 재할당이 되지않은 이유이다.