# Getter와 Setter
## Getter 메소드
getter는 객체의 프로퍼티를 가져오는 함수를 말한다.
<br />
동적으로 계산이 필요한 프로퍼티 값을 가져와야 할 때, getter를 사용하면 별도의 함수를 만들 필요가 없는 장점이 있다.
<br /><br />

## Setter 메소드
setter는 객체의 프로퍼티를 설정하는 함수를 말한다.
<br />
setter는 프로퍼티 값이 변경되어 질 때마다 함수를 실행하는데 사용된다.
<br /><br />

## objcet 에서 get/set 사용예시

```javascript
var people = {
  name: 'Yeo',
  age: 19,
  get nextAge() {
    return this.age + 1
  },
  set setAge(age) {
    this.age = age
  }

  // 좀 더 직관적으로 사용 가능
  console.log(people.nextAge) // 소괄호 없이 사용할 수 있음
  console.log(people.setAge = 24) // 등호로 데이터를 입력할 수 있음
}
```

위 코드 처럼 `get`과 `set` 키워드를 함수 옆에 추가해주고 사용하면 결과를 출력할 때 좀 더 보기에 좋고 직관적이게 사용이 가능하다.
<br /><br />

## get / set 사용 기준
1. get : 데이터를 출력할 때 사용
1. set : 데이터를 입력하거나, 수정할 때 사용
<br />

> set 함수는 데이터를 입력해서 수정해주는 함수이기 때문에, 파라미터가 한개 꼭 존재해야 한다.<br />
 > get 함수는 파라미터가 있으면 오류가나며, 함수 내에 **return을 가져와야 한다.**

<br /><br />

## class 에서 get/set 사용예시

```javascript
class people {
  constructor() {
    this.name = 'Yeo'
    this.age = 19
  }
  get nextAge() {
    return this.age + 1
  }
  set setAge(age) {
    this.age = age
  }
}

var res = new people()
console.log(res.nextAge)
console.log(res.setAge = 24)

```

class 안의 함수들 앞에 get / set 키워드를 써주면 된다.
<br />
사용법은 이전의 코드와 똑같다.