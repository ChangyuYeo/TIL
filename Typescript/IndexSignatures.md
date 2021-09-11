# index signatures
Javascript나 Typescript의 Object는 다른 Object의 대한 참조를 가지고 있는 string 으로 접근이 가능하다

```typescript
let name: string = {}
name['key'] = 'Jebong'
// Jebong이 출력이 된다
console.log(name['key'])
```

출력 결과로 name의 key라는 키 값 'Jebong' 이 되는 것을 볼 수 있다.
<br /><br />

object 자료에 들어오는 속성들이 뭔지 모를때, 타입지정할 속성이 너무 많을 때 <br />
`index signatures`를 이용해서 쉽게 사용할 수 있다.

```typescript
interface StringType {
  [key: string]: string
}

const people: StringType = {
  name: 'jebong',
  age: '24'
  email: 'asd@asd'
}
```

StringType 라는 interface는 string type인 키에 할당되는 값은 string type 이라는 뜻이다.
<br />
즉, 모든 속성이 string type을 가져야 하는 interface를 선언한 것이다.
<br /><br />

```typescript
interface StringType {
  [key: string]: string | number
}

const people: StringType = {
  name: 'jebong',
  age: 24
  email: 'asd@asd'
}
```
`union type`을 이용해서 여러 타입을 지정해 줄 수도 있다.
<br />