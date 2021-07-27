# Map
간단한 키와 값을 서로 연결(매핑)시켜 저장하며 저장된 순서대로 각 요소들을 반복적으로 접근할 수 있도록 한다. 
<br />

Object 자료형과 같은 key, value 형태로 자료를 저장할 수 있는 자료형이다.
<br />

```javascript
const people = new Map()
people.set('name', 'Yeo')
people.set('age', 24)

console.log(people) // Map(2) {"name" => "Yeo", "age" => 24}
```

결과를 보면 Object와 약간 다른 결과가 출력이 되는데,
<br />
map 자료형은 자료의 연관성을 표현하기 위해 화살표를 이용해서 출력이 된다.
<br /><br />
그래서 map 자료형은 key, value 값에 모든 자료를 집어넣을 수 있다.
<br />

```javascript
const people = new Map()
people.set([1, 2, 3], 'Yeo')
people.set('age', 24)

console.log(people) // Map(2) {Array(3) => "Yeo", "age" => 24}

```

자료의 이름으로 array도 되고 object도 될 수 있다.
<br /><br />

## Map 사용법

```javascript
const people = new Map()
people.set('age', 24)

perple.size // 자료 갯수: 1 출력
perple.get('age') // 자료 출력: 24 출력
perple.delete('age') // 자료 삭제: Map(0) {} 상태가 된다.

// 반복문 사용
for (let key of people.keys()) {
  console.log(key)
}

// 자료를 직접 넣기
const people2 = new Map([
  ['name', 'Yeo'],
  ['age', 24]
])

console.log(people2)
```