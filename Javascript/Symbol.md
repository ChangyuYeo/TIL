# Symbol
ES6 부터 Symbol 이라는 `Primitive` 자료형이 하나 추가되었는데, 
<br />
Symbol은 코드 내에서 `유일한 값`을 가진 변수 이름을 만들 때 사용
<br /><br />

## Symbol 생성

```javascript
const mySymbol = Symbol('description')

console.log(mySymbol)
console.log(typeof mySymbol) // symbol
```

사용법은 Symbol() 함수를 이용해서 만들면 되고, 문자열을 파라미터로 받을 수 있는데, 
<br />
이 문자열은 symbol에 대한 설명을 넣는 용도로 디버깅 용도로만 사용이 된다.
<br /><br />

## Symbol 사용
symbol은 오브젝트 자료형에 Private 한 key 값을 부여하고 싶을 때 사용
<br />

```javascript
const people = {
  name: 'Yeo'
}

const age = Symbol('myAge')
people[age] = 24

console.log(people) // {name: "Yeo", Symbol(myAge): 24}
console.log(people[age]) // 24
```

위 코드는 Symbol을 key로, 24를 value 형태로 오브젝트에 넣은 코드이다.
<br />

**{name: "Yeo", Symbol(myAge): 24}** 라는 결과가 출력이 되는 것을 볼 수 있는데,
<br />

이런식으로 별도에 이름을 가진 자료를 Object안에 만들고 싶을 때 Symbol을 쓰면 된다.
<br /><br />

## Symbol 특징
### symbol은 for문에 출력이 되지 않는다.
- 보통 Object를 반복문을 돌릴 때 for in 같은 문법을 사용한다.
- 그런데 symbol은 반복문에서 출력이 되지 않기 때문에
- 무언가 숨기고 싶은 내용을 저장하고 싶을 때 Symbol을 이용해서 자료를 저장하면 된다.
<br /><br />

### symbol를 비교하면?

```javascript
const symbol = Symbol('mySymbol')

symbol === 'mySymbol' // false
symbol === 'symbol' // false
symbol === 'Symbol' // false
symbol === true // false
symbol === false // false
symbol === 0 // false
symbol === null // false
symbol === undefined // false
```

 값을 담게 된 symbol라는 이름의 변수는 다른 어떤 값과 비교해도 true가 될 수 없는 고유한 변수 인데,
<br />

```javascript
const symbol = Symbol('mySymbol')
const symbol2 = Symbol('mySymbol')

console.log(symbol === symbol2) // false
```

심지어 두 심볼은 같은 설명인데도 불구하고 두 심볼을 비교해보면 false가 출력이 된다.
<br />
symbol은 Symbol()이라고 사용할 때마다 각각 유니크한 symbol이 생성되어 그렇다.
<br /><br />



### symbol의 전역 심볼
symbol이 같은 값을 가지면 같은 symbol로 취급해주는 전역 symbol을 만들 수 있다.
<br />

```javascript
// Symbol() 대신 Symbol.for() 로 생성한다.
const symbol1 = Symbol.for('mySymbol')
const symbol2 = Symbol.for('mySymbol')

console.log(symbol1 === symbol2) // true
```

두 심볼을 비교하면 true 가 출력이 되는 것을 볼 수 있다.
<br />
Symbol.for()로 새로운 symbol을 만들 때 내용이 같으면 이미 그 내용을 가지고 있는 symbol을 그 자리에 넣어주기 때문이다.
<br /><br />

### 기본 내장 symbol
Array, Object 자료형을 만들 때 숨겨져있는 기본 Symbol들도 있다.
<br />
예를 들면 모든 array 자료형은 [Symbol.iterator] 라는 이름을 가진 심볼이 안에 있다.
<br />

```javascript
const array = [1, 2, 3, 4]
console.log(array[Symbol.iterator]) // ƒ values() { [native code] }
```

Symbol.iterator 이라는 심볼은 for of를 사용할 수 있게 도와주는 symbol이라 생각하면 된다.
