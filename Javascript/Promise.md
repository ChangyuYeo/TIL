# Promise
Promise는 약속이라는 의미에서도 알 수 있듯이 바로 실행되는 것이 아닌 미래의 어느 시점에서 완료(성공, 실패)되는 비동기 처리 작업이다.

> 자바스크립트는 비동기 처리를 위해 하나의 패턴으로 콜백 함수를 사용하는데, <br />
> 전통적인 콜백 함수의 치명적인 단점인 `콜백 지옥` 현상이 나타난다. <br />
> 단점을 보안하기 위해 ES6에서는 프로미스 라는 기능을 도입했는데,  <br />
> 콜백 패턴의 단점을 보완하며 비동기 처리 시점을 명확하게 표현할 수 있다는 장점이 있다.

<br/>

```javascript
let promise = new Promise((resolve, reject) => {
  resolve('성공') // 실행 성공 판정
})
promise.then(res => {
  console.log(`결과: ${ res }`)
}).catch(err => {
  console.error(`error발생: ${ err }`)
}).finally(() => {
  // finally는 무조건 실행된다.
})
// 출력 결과는 -> '결과: 성공' 이 출력된다
```

`new Promise()` 로 promise라는 변수를 하나 생성하면 Promise가 만들어 진다.
<br />
Promise는 `then()` 함수로 실행이 가능하다.
<br /><br />

## 프로미스의 처리 메소드
### then
then() 은 실행 성공시 호출되는데, 두 개의 파라미터를 받는다.
- 첫 번째 파라미터는 성공시 호출되고,
- 두 번째 파라미터는 실패시 호출된다. (잘 안씀)

### catch
catch() 는 예외(에러)가 발생할때만 호출되며, Promise 형태로 반환한다.
<br />

### finally
finally() 는 실행이 성공을 했던, 예외가 발생하던 항상 호출되는 메소드이다.
<br />

> 예외(에러) 처리를 할 때는 then() 의 두 번째 파라미터값으로 처리하면 <br />
> 복잡해지고 가독성이 좋지 않기 때문에 catch() 에서 예외처리를 해주는 것을 권장하고 있다.

<br />
Promise를 간단하게 정리하자면 성공 시 then()을 실행해주고, 실패 시 catch()를 실행하며, finally()는 항상 실행해달라는 것이다.
<br /><br />

## Promise의 특징
new Promise()로 생성된 변수를 콘솔창에 출력해보면,
- 실행 전에는 `prnding` 이 출력
- 성공 후엔 `resolved` 이 출력
- 실페 후엔 `rejected` 이 출력

이렇게 프로미스 오브젝트들은 3개의 상태가 있는 것을 알 수 있다.
<br /><br />

# async/await
ES8에서 추가된 자바스크립트의 비동기 처리 패턴 문법 이다.
<br />

함수앞에 `async` 키워드를 쓰면 리턴값은 항상 `Promise` 가 된다.
<br />

`await`는 `promise`가 정상적으로 처리돼 결과 값이 넘어올 때 까지 기다리도록 할 때 사용하는 키워드 이다.
<br />

```javascript
async function func() {
  await 비동기 처리...
}
```

이런 식으로 직관적이게 만들 수 있는 것이 async/await 이다.
<br />

```javascript
async function cal() {
  let sum = new Promise((resolve, reject) => {
    let val = 1 + 10
    resolve(val)
  })
  try {
    let res = await sum
    console.log(`성공했어요!! 결과: ${ res }`)
  } catch {
    console.error('error발생 ㅠㅠㅠ')
  }
}

cal()
```

await는 sum을 **기다린 다음에** 완료되면 res 변수에 담아주는 역할을 하고있다.
<br />

> await는 실패하면 에러가 나고 코드가 멈춘다. <br />
> 때문에 try, catch를 사용해서 예외 처리를 해줘야 된다.

<br />
