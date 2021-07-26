# 반복문 정리
## for in
for in 반복문은 **Object** 자료형에 저장된 자료들을 하나씩 꺼내고 싶을 때 사용한다.
<br />

```javascript
let object = {
  name: 'Yeo',
  age: 30
}

for (let key in object) {
  console.log(object[key])
}
```

for in 반복문은 해당 오브젝트의 자료 내부 데이터 갯수 만큼 반복하게 되며 
<br />
반목할 때마다 key라는 변수는 내부 데이터 name과 age가 데이터의 key값이 된다.
<br /><br />

### for in 특징
1. `enumerable` 만 출력한다.<br />
enumerable 라는 값이 true인 자료들만 for in 반복문을 사용할 수 있는데
<br />
보통 Object 자료형이 enumerable 속성을 가지고 있다.
<br /><br />

2. 부모 prototype에 저장된 것도 출력해준다.<br />
Object의 부모 프로토타입에 있는 속성도 반복문으로 출력할 수 있다.
<br />

```javascript
class Parent {
  name = 'Yeo'
}
Parent.prototype.age = 24

let obj = new Parent()

for (let key in obj) {
  console.log(obj[key])
}
```

결과를 보면 부모가 가지고 있는 데이터의 값도 출력을 해주는 것을 볼 수 있다.
<br /><br />
if문을 이용해서 이 현상을 방지할 수 있다.
<br />

```javascript
class Parent {
  name = 'Yeo'
}
Parent.prototype.age = 24

let obj = new Parent()

for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(obj[key])
  }
}
```

`hasOwnProperty()` 라는 함수는 해당 오브젝트가 이 key 값을 직접 가지고 있냐고 물어보는 함수라 생각하면 된다. (true, false 반환)
<br /><br />

## for of
array, 문자열, arguments, NodeList, Map, Set 자료형에 적용할 수 있는 반복문이다.
<br />
즉, `iterable`인 자료형들에만 적용가능한 반복문이다.
<br />
> iterable? <br />
> 반복 가능한 객체, 이터레이터를 가지고있는 객체이다. <br />
> array, 문자열, arguments, NodeList 등이 대표적인 이터러블 객체이며, <br />
> `Symbol.interator()`라는 일종의 메소드를 가지고 있다.

<br />

```javascript
let array = [1, 2, 3, 4, 5]
for (let data of array) {
  console.log(data)
}
```

결과로 array 안에 있던 모든 자료를 하나씩 출력하는 것을 볼 수 있다.