# BasicTypes
TypeScript 에서 기본으로 제공하는 데이터 타입 <br />
사용자가 만든 타입은 결국 `기본 자료형`들로 나누어 진다.

## index
- ECMAScript 에 따른 기본자료형
  - [Boolean](#boolean)
  - [Number](#number)
  - [String](#string)
  - [Symbol](#symbol)
  - [Null & Undefined](#null&undefined)
  - [Object](#object)
  - [Array](#array)
- TypeScript 에서 몇가지 추가된 타입
  - [Tuple](#tuple)
  - [Any](#any)
  - [Unknown](#unknown)
  - [Never](#never)
  - [Void](#void)
<br />


# boolean
- 가장 기본적인 데이터 타입
- 단순한 true 혹은 false를 나타낸다

boolean 타입 사용 예시
```typescript
let isDone: boolean = false

isDone = true

console.log(typeof isDone) // boolean 타입이 출력된다

let isOk: Boolean = true
let isNotOk: boolean = new Boolean(true)
```
<br />

# number
- 숫자를 나타내는 가장 기본적인 타입
- 타입스크립트는 16진수 및 10진수 이외에도 2진수, 8진수를 지원한다.
- NaN(not a number)와 1_000_000 과 같은 표기도 가능하다.

number 타입이 사용가능한 목록
```typescript
let decimal: number = 6 // 10진수
let hex: number = 0xf00d // 16진수
let binary: number = 0b1010 // 2진수
let octal: number = 0o774 // 8진수
let notANumber: number = NaN // NaN
let underscoreNum: number = 1_000_000 // 언더바를 이용한 표기
```
<br />

# string
- string 타입은 텍스트 형식을 참조하기 위해 사용
- javascript 와 마찬가지로, 큰 따옴표(") 또는 작은 따옴표(') 를 사용

string 타입 사용 예시
```typescript
let myName: string = 'jebong'
myName = "Changyu"

let fullName: string = 'Changyu Yeo'
let age: number = 24
let people: string = `이름은 ${ myName } 나이는 ${ age } 입니다!`
console.log(people) // 이름은 Changyu Yeo 나이는 24 입니다!
```
<br />

# symbol
- ES6에 새로 추가된 타입
- new Symbol 로 사용할 수 없다.
- Symbol을 함수로 사용해서 Symbol 타입을 만들어 낼 수 있다.

symbol 타입 사용 예시
```typescript
// tsconfig.json 에서 "lib" : [ "ES2015", "DOM" ] 을 설정해야 Symbol 타입 사용이 가능해 진다.
console.log(Symbol('foo') === Symbol('foo')) // false
```
<br />

symbol 타입은?
> Primitive Type(원시 타입)의 값을 담아서 사용 <br />
> `고유하고 수정 불가능한 값`으로 만들어준다 <br />
> 주로 접근을 제어하는데 쓰는 경우가 많다
<br />

```typescript
  let sym = Symbol()
  let obj = {
    [sym]: 'value'
  }
  console.log(obj[sym]) // sym을 이용해 접근, 'value' 출력
```
<br />

# null & undefined
- null은 null타입만, undefined은 undefined타입만 가질 수 있다.
- void 와 마찬가지로, 그 자체로는 그다지 유용하지 않다.
- 둘다 소문자만 존재함
- null과 undefined는 할당할 수 있는 것들은 거의 없다.
<br/>

```typescript
let a: null = null
let b: undefined = undefined
```
<br/>

tsconfig 설정을 하지 않으면 null & undefined은 **다른 모든 타입에 서브타입으로 존재하게 된다**

- string 이나 number에 null 또는 undefined를 할당할 수 있다는 의미이다
- 컴파일 옵션(tsconfig)에서  `"strictNullChecks": true`사용하면, null 과 undefined 는 void 나 자기 자신들에게만 할당할 수 있게된다.
- 이 경우, null 과 undefined 를 할당할 수 있게 하려면, `union type` 을 이용해야 한다

```typescript
let MyName: string = null // "strict": true 인 경우에는 error

let a: undefined = null // error
let b: void = undefined // void type은 undefined는 할당 되지만 null은 할당이 되지 않는다.
let c: string | null = null // union type을 이용해 null 값도 할당 가능하게 만들어 줄 수 있다.
c = 'Changyu'
```
<br />

## null
- 무언가 있는데, 사용할 준비가 덜된 상태라고 생각하면 된다.
- null 이라는 타입은 null 이라는 값만 가질 수 있다.
- typeof 연산자를 이용해서 결과를 보면 `object`라는 결과가 나온다.

```javascript
let n: null = null

console.log(n) // null
console.log(typeof n) // object
```
<br />

## undefined
- undefined은 값을 할당하지 않은 변수 이다.
- 사용할 준비가 안된 상태라고 생각하면 된다.
- object의 property 가 없을 때도 undefined 이다.
- typeof 연산자를 이용해서 결과를 보면 `undefined`라는 결과가 나온다.

```javascript
let u: undefined = undefined

console.log(u) // undefined
colsoe.log(typeof u) // undefined
```
<br />

# object
`Primitive Type(원시 타입)` 이 아닌 `Reference type(참조 타입)`을 나타낼 때 사용한다.

```typescript
const person1 = {
  name: 'Changyu', 
  age: 24
}

// Object.create() 는 지정된 프로토타입 객체 및 속성을 갖는 새 객체를 만드는 메소드 이다.
// object 이거나 null 인 타입을 인자로 받을 수 있다. (object | null)
const person2 = Object.create({name: 'Changyu', age: 24}) 
```
<br />

# array
원래 자바스크립트에서는 array는 object(객체)이다.
<br />

array의 타입 선언 방법
```typescript
let arr1: number[] = [1, 2, 3] // 숫자만 있는 배열 타입 (방법1)
let arr2: Array<number> = [1, 2, 3] // 숫자만 있는 배열 타입 (방법2)

let arr3: (number | string)[] = [1, 2, 3, '넷'] // union type 을 이용해 만든 숫자와 문자가 들어올 수 있는 배열 타입
```
<br />

# tuple
- 배열인데 타입이 한가지가 아닌 경우
- 튜플은 배열과 다르게, 여러 타입의 값들을 구겨넣을 수 있는 복합 타입이다.
- 타입 표현은, 대괄호 안에 원하는 타입과 개수를 넣고싶은 만큼 넣으면 된다.
- 값의 초기화는 배열과 동일하다.
- 배열을 `Destructuting` 하면 타입이 제대로 얻어진다.

```typescript
let t: [string, number]
t = ['Changyu', 24] // 항상 타입의 순서와 지정된 길이가 맞아야 된다.
t = [24, 'Changyu'] // 이경우 error
t[2] = 'Yeo' // 지정된 인덱스 이외에는 값을 할당할 수 없도록 undefined가 할당되어 error 가 발생한다

const people: [string, number] = ['Changyu', 24]
// Destructuting
const [first, second, third] = person // first: string, second: nunber, third는 error가 나온다
```
<br />

# any
- any는 어떤 타입이어도 상관없는 타입
- any는 최대한 사용하지 않는 것이 좋은데 any를 남용하게 되면,
- 컴파일 타임에 타입 체크가 정상적으로 이뤄지지 않기 때문이다.

```typescript
function retrunAny(message: any): any {
  console.log(message)
}

const any = returnAny('리턴타입은 any') // any인 경우 아무거나 들어올 수 있게 된다.
any.toString()

let looselyTyped: any = {}
const d = looselyTyped.a.b.c.d // 에러가 발생하지 않는다.

function leakingAny(obj: any) {
  const a = obj.num // any type
  // const a: number = obj.num  -> a에 number 타입을 주는 것으로 누수를 막을 수 있다.
  const b = a + 1 // any type
  return b
}

const c = leakingAny({ num: 0 }) // 이경우에 c도 any type 이 되버린다.
```
<br />

# unknown
- any와 비슷하게 현재 타입 정보를 모를 때 사용
- 해당 값을 사용할 때 `타입을 확인해야 한다는 점`이 any와의 차이점이다.

unknown type 의 사용법
```typescript
declare const maybe: unknown

const aNumber: number = maybe // unknown은 number에 바로 할당할 수 없는 상태이다.

// 타입 가드 형식
if (maybe === true) {
  const aBoolean: boolean = maybe // 조건문으로 인해 boolean type 으로 지정됨
  const aString: string = maybe // 조건문안에 maybe는 true 일 수 밖에 없기 때문에 string type은 지정을 못한다.
}

if (typeof maybe === 'string') {
  const aString: string = maybe // 조건문으로 인해 조건문 안에 maybe는 string type 으로 지정이 된다.
}
```
<br />

# never
never type은 모든 type의 subtype 이며, 모든 type에 할당 할 수 있다. <br />
하지만 , never 에는 어떤 것도 할당할 수 없다 (any 조차 never에게 할당 할 수 없다.)<br />

never type의 예시
```typescript
function error(message: string): never {
  throw new Error(message) // 함수가 끝나기 전 이 구간에서 Error 발생 후 종료됨
}

function fail() { // return type 이 never type 으로 추론된다.
  return error('error')
}

function infiniteLoop(): never {
  // 무한 반복하는 구조에서도 함수가 끝나지 않기 때문에 never type을 지정할 수 있다.
  while (true) {
    //..
  }
}
```
<br />

never는 잘못된 타입을 넣는 실수를 막고자 할 때 사용하기도 한다.
```typescript
let a: string = 'hello' // a는 string type 인 상태이다.

if (typeof a !== 'string') {
  a // 이 경우 a는 never type을 가지게 된다.
}

// typeof를 이용해 타입가드를 사용하는 방법
declare const b: string | number

if (typeof b !== 'string') {
  b // 이 경우 b는 number type을 가지게 된다.
}
```
<br />

# void
- 어떤 타입도 가지지 않은 빈 상태를 의미
- void type은 값은 없고 타입만 있다.
- 주로 값을 반환하지 않은 함수의 리턴 타입으로 사용된다.
- void type은 undefined만 할당할 수 있으므로 변수의 타이핑에는 거의 사용되지 않는다.

```typescript
function returnVoid(message: string): void {
  console.log(message)
}

returnVoid('리턴이 없어요!')
```