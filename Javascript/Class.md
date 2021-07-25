# Class (클래스)
prototype의 기능을 활용하여 새롭게 생성자 함수를 만들 수 있게 하는 방법이다.
<br /><br />

## Class 사용법

class 키워드로 constructor 함수 를 만들 수 있다.
<br />

```javascript
class Parent {
  constructor() {
    this.name = 'Yeo'
  }
}

var children = new Parent()
```

function 키워드를 사용한 것 보다 간단하고 직관적적으로 인스턴스를 만들어 낼 수 있다.
<br /><br />

## 상속가능한 함수 만들기
상속가능한 함수를 만드는 방법 크게 2가지가 있는데,
1. contructor 안에 추가하는 방법
1. prototype에 추가하는 방법
<br />

### contructor 안에 추가하는 방법

```javascript
class Parent {
  constructor() {
    this.name = 'Yeo'
    this.func = function() {
      console.log('함수가 실행이 돼요!')
    }
  }
  
  var children = new Parent()
}
```

이 방법은 새로 생성되는 인스턴스는 func()라는 함수를 직접 가지게 되어 사용이 가능하게 된다.
<br /><br /> 

### prototype에 추가하는 방법
```javascript
class Parent {
  constructor() {
    this.name = 'Yeo'
  }
  func() {
    console.log('함수가 실행이 돼요!')
  }
}

var children = new Parent();
```

오브젝트에 함수를 추가하듯이 추가해주면 된다.
<br />
그럼 생성자함수로 만들어진 자식은 func()이라고 썻을 때 부모의 prototype에 있던 func() 함수를 사용할 수 있다.
<br />

### (참고)Object.getPrototypeOf()
> 이 함수 안에 오브젝트를 넣으면 부모 prototype을 출력해준다. <br />
> __proto__ 키워드와 비슷한 역할을 한다.

```javascript
class Parent {
  constructor() {
    this.name = 'Yeo'
  }
}

var children = new Parent();
console.log(children.__proto__)
console.log(Object.getPrototypeOf(children))
```

둘 다 부모의 prototype을 출력하는 결과를 볼 수 있다. 
<br /><br />

## constructor안에 파라미터 추가하기
```javascript
class Parent {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

var children = new Parent('Yeo', 24)
```

이런 식으로 파라미터를 넣어서 constructor를 만들 수 있다.
<br /><br />

## prototype 내에 함수 여러개 추가하기
```javascript
class Parent {
  constructor(name, age) {
    this.name = name
    this.age =age
  }
  func() {
    console.log('함수가 실행 돼요!!')
  }
  func2() {
    console.log('새로 추가된 두번째 함수 입니다!')
  }
}

var children = new Parent('Yeo', 24)
```

오브젝트에 함수를 추가해주듯 써주면 된다.
<br />