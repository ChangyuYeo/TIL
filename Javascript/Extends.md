# Extends
class를 상속한 class를 만들고 싶을 때 사용하는 문법이다.
<br />

새로운 클래스를 만들었다 가정한다.

```javascript
class Parent {
  constructor(name) {
    this.lastName = 'Yeo'
    this.name = name
  }
}

var res = new Parent('Changyu')
```

만들어진 클래스와 유사한 class를 하나 더 만들고 싶을 때 `상속` 기능을 사용하면 편하게 만들 수 있다.
<br />
클래스의 상속을 하기위해 `extends` 키워드를 사용한다.
<br />

```javascript
class Parent {
  constructor(name) {
    this.lastName = 'Yeo'
    this.name = name
  }
}

class Children extends Parent {
  constructor(name) {
    super(name)
    this.age = 24
  }
}

```

상속받은 class에 새로운 속성을 추가하고 싶으면 상속받을 클래스 constructor 안에 내용을 추가해주면 된다.
<br />
그리고 상속받은 부모 class에 속성을 가져오기 위해 `super()` 함수를 입력해준다.
<br />

super 키워드의 기능은 크게 2가지가 있다.
1. `constructor` 안에서 쓰면 부모 class의 `constructor`
1. `prototype` 함수 안에서 쓰면 부모 class의 `prototype`
<br />

> super() 함수는 상속중인 부모 class의 constructor()를 의미한다. <br />
> 쉽게 말하면 Parent class의 constructor() 와 같다는 말이다. <br />
> 부모 class에 명시된 name이라는 파라미터도 똑같이 명시를 해주어야 된다.



<br />

부모 class 안에 함수를 추가한다면 상속받은 class의 자식들도 사용이 가능하다.
<br />

```javascript
class Parent {
  constructor(name) {
    this.lastName = 'Yeo'
    this.name = name
  }
  func() {
    console.log('함수가 실행이 돼요!')
  }
}

class Children extends Parent {
  constructor(name) {
    super(name)
    this.age = 24
  }
  func2() {
    console.log('자식 클래스의 함수 입니다!')
    super.func() // 함수 상속
  }
}

var res = new Children('Changyu')
```

상속되어 만들어진 클래스이기 때문에 부모 prototype에 함수가 있으면 실행이 된다.
<br />
class 간에 함수를 상속하는 것도 `super` 키워드를 사용하면 사용이 가능하다.
<br />
여기서의 super는 부모 class의 prototype을 의미한다.
