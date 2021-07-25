# Constructor (생성자 함수)
- 자바스크립트의 함수는 재사용 가능한 코드를 묶음으로 사용하는 것 외에 객체를 생성 하기 위한 방법으로도 사용된다. 

- 객체를 생성할 떄 `new 키워드`를 사용하여 함수를 호출하게 되면 return문 없이 새로운 객체를 반환할 수 있다.

- 함수 안에서 this를 이용해서 반환되는 객체의 초기 상태를 정의할 수 있는데 이렇게 객체를 만들어주는 함수를 `생성자 함수`라고 한다.

- 생성자 함수는 new 키워드를 사용하지 않으면 일반적인 함수와 동일하게 동작하여 새로운 객체를 반환하지 않는다. (함수명을 대문자로 시작하는 것이 관습이다)

- 객체에 타입이 적용되면 해당 객체는 그 타입의 `instance(인스턴스)` 라고 불러 new 키워드로 만들어진 객체는 해당 타입의 인스턴스 라고 말한다.
<br /><br/>

## 생성자 함수 사용법
```javascript
function People() {
  this.name = "Yeo"
  this.age = 24
}
```
<br/><br/>

여기서 this는 새로생성되는 오브젝트를 말하는데 즉, 인스턴스라고 생각하면 된다.
<br/>

```javascript
function People() {
  this.name = 'Yeo'
  this.age = 24
}

let a = new People() 
let b = new People() 
```

`new 키워드` 를 이용해 새로운 오브젝트를 만들 수 있다. 
<br /><br />

생성자 함수를 이용해 함수를 포함한 오브젝트도 만들어 낼 수 있다.
<br/>

```javascript
function People() {
  this.name = 'Yeo'
  this.age = 24
  this.func = function() {
    console.log(`안녕하세요! ${ this.name } 입니다!`)
  }
}

let a = new People() 

a.func()
```

저렇게 함수를 추가하면 모든 인스턴스는 func라는 함수를 가지고 있게 된다.
<br />
또한 생성자 함수는 함수의 파라미터를 활용할 수도 있다.
<br />

```javascript
function People(name, age) {
  this.name = name
  this.age = age
  this.func = function() {
    console.log(`안녕하세요! ${ this.name } 입니다!`)
  }
}

let a = new People('Yeo') 

a.func()
```

함수에 파라미터를 추가한다면 앞으로 생성자 함수를 사용할 때마다 파라미터자리에 데이터를 넣어서 실행할 수 있는 것이다.
<br />