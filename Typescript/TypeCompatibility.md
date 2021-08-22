# 타입 호환성 (Type Compatibility)
타입스크립트 코드에서 특정 타입이 다른 타입에 잘 맞는지를 판단 하는 것이 타입 호환성 이다.
- 타입 A를 타입 B로 취급해도 되는 것을 할당 가능하다고 하며
- 타입 A가 타입 B의 `서브타입(subtype)`이라고 표현하기도 함
  - 배열은 객체의 서브타입 -> 객체를 사용해야 하는 곳에 배열도 사용할 수 있다 
  - 튜플은 배열의 서브타입 -> 배열을 사용해야 하는 곳에 튜플도 사용할 수 있다.
  - 모든 것은 Any의 서브타입 -> Any를 사용하는 곳에 모든 것을 사용할 수 있다.
  - never는 모든 것의 서브타입 -> 어디에나 never를 사용할 수 있다.
<br />

## 서브타입 (subtype)
두 개의 타입 A와 B가 있고, B가 A의 서브타입이면, A가 필요한 곳에는 어디든 B를 사용할 수 있다.

subtype의 리터럴타입이 `1` 이고, suptype의 타입이 `number` 일 때,
- suptype의 type이 number이기 때문에 subtype의 값을 할당 할 수 있다.
- number type인 sup1으 type이 1인 subtype에 할당하지 못한다.

```typescript
let subtype: 1 = 1
let suptype: number = subtype 
subtype = suptype // error
```
<br />

subtype의 type이 `number[]` 이고, suptype의 타입이 `object` 일 때,
- array는 object중 하나이기 때문에 subtype은 suptype에 하위호환 이며 할당이 가능 하다.
- subtype은 suptype에 하위호환 이기 떄문에 할당하지 못한다.

```typescript
let subtype: number[] = [1]
let suptype: object = subtype
subtype = suptype // error
```
<br />

subtype의 type이 `[number, number]`인 tuple형태이고, suptype의 타입이 `number[]` 일 때,
```typescript
let subtype: [number, number] = [1, 2]
let suptype: number[] = subtype
subtype = suptype // error
```
<br />

subtype의 type이 `number` 이고, suptype의 타입이 `any` 일 때,
- any type은 어떤 타입이든 할당 할 수 있기 때문에 number type인 subtype 도 할당이 가능하다.
- any type인 suptype을 하위요소 subtype을 할당해도 에러가 발생하지 않는다.

```typescript
let subtype: number = 1
let suptype: any = subtype
subtype = suptype // any type 이기 때문에 error가 나타나지 않는다.
```
<br />

### 공변
같거나 서브 타입인 경우, 할당이 가능한 것을 말한다.
<br />

원시 타입(primitive type) 인 경우
```typescript
let subtype: string = 'A'
let suptype: string | number = subtype
```
<br />

object 인 경우 <br />
각각의 프로퍼티가 대응하는 프로퍼티와 같거나 서브타입이어야 한다.
```typescript
let subtype: { a: string; b: number } = { a: 'A', b: 1 }
let suptype: { a: string | number; b: number } = subtype
```
<br />

array 인 경우 <br />
object와 마찬가지로 대응하는 프로퍼티와 같거나 서브타입이어야 한다.
```typescript
let subtype: Array<{ a: string; b: number }> = [{ a: 'A', b: 1 }]
let suptype: Array<{ a: string | number; b: number }> = subtype
```
<br />

### 반변
함수의 매개변수 타입만 같거나 슈퍼타입인 경우, 할당이 가능하는 것을 말한다.
<br />

```typescript
class Person {}
class Developer extends Person {
  coding() {}
}
class StartupDeveloper extends Developer {
  burning() {}
}

function tellme(f: (d: Developer) => Developer) {}

// Developer => Developer 에다가 Developer => Developer 를 할당하는 경우
tellme(function dToD(d: Developer): Developer {
  return new Developer()
})

// Developer => Developer 에다가 Person => Developer 를 할당하는 경우
tellme(function pToD(d: Person): Developer {
  return new Developer()
})

// Developer => Developer 에다가 StartipDeveloper => Developer 를 할당하는 경우
tellme(function sToD(d: StartupDeveloper): Developer {
  return new Developer()
})
```
<br />

> strictFunctionTypes 옵션을 켜면 <br />
> 함수를 할당할 시에 함수의 매개변수 타입이 같거나 슈퍼타입인 경우가 아닌 경우, 에러를 통해 경고한다.