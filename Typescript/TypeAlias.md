# 타입 별칭(Type Alias)
특정 타입이나 인터페이스를 참조할 수 있는 타입 변수를 `타입 별칭(Type Alias)`이라고 한다. <br />
기타 직접 작성해야하는 타입을 다른 이름을 지정할 수 있다.
<br />

Type Alias 사용예시

`Primitive` type 인 경우,
```typescript
type Mytype = string

const name: Mytype = 'Changyu'
console.log(typeof name) // string
```
<br />

`Union Type` type 인 경우,
```typescript
type Mytype = string | number

let person: Mytype = 0
person = 'Changyu'
```
<br />

`Tuple` type 인 경우,
```typescript
type Mytype = [string, number];
let person: Mytype = ['Changyu', 24];
```
<br />

`Function` type 인 경우,
```typescript
type MyFuncType = (a: number, b: number) => number
```
<br />

## 인터페이스와 타입별칭 차이점
- 인터페이스와 다르게 타입별칭은 정의한 타입의 참고로 사용하는 것이지 타입을 생성하는 것이 아니다.
- VSCode 프리뷰 에서 차이가 나는데, 
  1. 인터페이스는 마우스를 올려보면 해당 인터페이스를 가리키고,
  1. 타입별칭은 마우스를 올려 보면 타입별칭을 보여주게 된다.
- Interface 와 비슷하지만 `확장이 불가능하다는 차이점`을 가지고 있다.
