// 연습문제 5개 풀기
console.log('----------1번 문제----------')
// 1.
// var 강아지1 = { type : '말티즈', color : 'white' }
// var 강아지2 = { type : '진돗개', color : 'brown' }

class Dog {
  constructor(type, color) {
    this.type = type
    this.color = color
  }
  addAge() {
    if (this instanceof Cat) {
      this.age++
    }
  }
}

var dog1 = new Dog('말티즈', 'white')
var dog2 = new Dog('진돗개', 'brown')

console.log(dog1, dog2)

console.log('----------2번 문제----------')

//2.
// var 고양이1 = { type : '코숏', color : 'white', age : 5 };
// var 고양이2 = { type : '러시안블루', color : 'brown', age : 2 }; 

class Cat extends Dog {
  constructor(type, color, age) {
    super(type, color)
    this.age = age
  }
}

var cat1 = new Cat('코숏', 'white',5)
var cat2 = new Cat('러시안블루', 'brown', 2)

console.log(cat1, cat2)

console.log('----------3번 문제----------')

// 3. 고양이와 강아지 object들에 기능을 하나 추가하고 싶습니다. 
// 모든 고양이와 강아지 object들은 .한살먹기() 라는 함수를 사용할 수 있습니다. 

cat1.addAge()
console.log(`한 살 더먹음 ${ cat1.age } 살`)


console.log('----------4번 문제----------')
// 4. get/set을 이용해봅시다
// (1) 모든 Unit의 인스턴스는 공격력, 체력 속성이 있으며 기본 공격력은 5, 기본 체력은 100으로 설정되어 있어야 합니다.
// (2) 모든 Unit의 인스턴스는 전투력을 측정해주는 battlePoint라는 getter가 있습니다.
// console.log( 인스턴스.battlePoint ) 이렇게 사용하면 현재 공격력과 체력을 더한 값을 콘솔창에 출력해주어야합니다.
// (3) 모든 Unit의 인스턴스는 heal이라는 setter가 있습니다.

class Unit {
  constructor(power = 5, energy = 100) {
    this.power = power
    this.energy = energy
  }
  get battlePoint() {
    return this.power + this.energy
  }
  set heal(num) {
    this.energy += num
  }
}

var res1 = new Unit()
console.log(res1)
console.log(`전투력 측정 결과: ${ res1.battlePoint }`)
console.log(`체력 조정: ${ res1.heal = 50 }`)


console.log('----------5번 문제----------')

// 5. get/set을 이용해봅시다2 
// (1) data 오브젝트안에 setter 역할 함수를 하나 만들어보십시오.
// setter 함수에 1,2,3,4 이렇게 아무 자연수나 파라미터로 입력하면 홀수는 odd, 짝수는 even 이라는 속성에 array 형태로 저장되어야합니다.   
// (2) data 오브젝트안에 getter 역할 함수를 하나 만들어보십시오.
// getter 함수를 사용하면 odd, even에 저장된 모든 데이터들이 숫자순으로 정렬되어 출력되어야합니다. 

var data = {
  odd: [],
  even: [],
  get getData() {
    return [...this.odd, ...this.even].sort()
  },
  setData: function(...rest) {
    rest.forEach(a => {
      if (a % 2 == 1) {
        this.odd.push(a)
      } else {
        this.even.push(a)
      }
    })
  }
}

data.setData(1, 2, 3, 4, 5)
console.log(data.odd, data.even)
console.log(data.getData)
