# function
## @function
`@function` 을 사용하여 함수를 생성하고 **함수이름()** 형태로 함수를 호출하고 실행할 수 있다. <br />
함수 안에서는 `@return` 을 이용해 값을 반환한다. 
<br />

함수는 **mixin**과 비슷하지만 **mixin**은 스타일 코드를 반환하고
<br />
**function**은 `@return` 을 사용해서 값 자체를 반환한다는 차이가 있다.
<br />

(거듭제곱 구하는 함수)
```scss
/*-----SCSS-----*/
@function pow($base, $exponent) { 
  $result: 1;
  @for $_ from 1 through $exponent {
    $result: $result * $base;
  }
  @return $result;
}

.sidebar {
  float: left;
  margin-left: pow(4, 3) * 1px;
}

/*-----CSS-----*/
.sidebar {
  float: left;
  margin-left: 64px;
}
```
<br />

## 내장함수
scss에는 기본적으로 **내장되어 있는 함수**가 있다. <br />

1. 색상 함수
  - `lighten(color, amount)`: 기존 색상의 밝기를 높인다.( 0%-100% 사이의 값 )
  - `darken(color, amount)`: 기존 색상의 밝기를 낮춘다.( 0%-100% 사이의 값 )
  - `mix(color1, color2, weight)`: 2개의 색상을 섞어서 새로운 색상을 만든다.

2. 숫자 함수
  - `max(number, ..)`: 괄호에 넣은 값 중에 가장 큰 수를 반환한다.
  - `min(number, ..)`: 괄호에 넣은 값 중에 가장 작은 수를 반환한다.
  - `parcentage(number)`: 퍼센트로 숫자를 바꿔준다.
  - `comparable(num1,num2)`: 숫자1과 숫자2가 비교 가능한지 확인 후 true,false 값을 반환한다.

3. 문자 함수
  - `srt-insert(string,insert,index)`: 문자열에 원하는 위치(index)에 문자를 넣은 후(insert), 새로운 문자열을 반환한다.
  - `str-index(string,substing)`: 문자열에서 해당 문자의 index 값을 반환한다.
  - `to-upper-case(string)`: 문자열 전부를 대문자로 바꿔준다.
  - `to-lower-case(string)`: 문자열 전부를 소문자로 바꿔준다.

4. 확인 함수
  - `unit(number)`: 숫자의 단위를 반환해 준다.
  - `unitless(number)`: 단위를 가지고 있는지 판단하여 true,false 값을 반환한다.
  - `variable-exists(name)`: 변수가 현재 범위에 존재하는지 판단하여 true,false 값을 반환한다.