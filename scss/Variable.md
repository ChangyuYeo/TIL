# Variable (변수)
sass 문법에서도 변수를 선언하여 사용할 수 있다.<br />
변수를 사용하는 기준
- 값이 두 번 이상 반복되면 변수를 선언에 사용
- 기존의 값을 다른 값으로 변경해야할 경우 사용

보통 타이포그래피, 폰트색상, 폰트사이즈, 글자 간격 등의 값을 변수로 정의해서 사용한다. <br />

## 변수 생성방법
`$` 기호를 사용하여 변수를 선언하고 값을 지정한다
```scss
// $변수명: 값;
$primary: royalblue;
$my-fontsize: 13px;
$my-font : 'Noto Sans KR', sans-serif;
```
<br />

## 변수 type
변수의 타입은 numbers, strings, color, booleans, lists, null이 있다.
- numbers: 1, .82, 20px, 2em 등
- strings: "./images/a.png", bold, left, uppercase 등
- colors: green, #FFF, rgba(255,0,0,.5) 등
- booleans: true, false
- null
- `lists`
- `maps`
<br />

### Lists
리스트는 순서가 있는 값으로, 값마다 인덱스를 가지고 있다. <br /> lists를 만들려면 lists의 요소들을 쉼표`,` 나 공백 또는 일관성이 있는 `/`로 구분하여 생성하고, <br />
다른 타입의 변수들과 다르게 특수 괄호를 사용하지 않아도 lists로 인식한다. <br />
빈 lists를 만들 때나 lists에 들어있는 값이 하나 인 경우 `[ ]` 나 `( )` 를 사용하여 생성한다. <br />
> lists에 들어있는 값의 index는 0부터 시작하지 않고 1부터 시작한다.

```scss
$font-size : 10px 12px 16px; //폰트사이즈 리스트
$image-file : photo_01, photo_02, photo_03 //이미지 파일명 리스트

//아래와 같은 형태로 사용(순회도 가능)
list.nth(10px 12px 16px, 2); // 12px
list.nth([line1, line2, line3], -1); // line3
```
<br />

### Maps
maps는 `( )` 괄호 안에 **키: 값**의 형태로 저장하여 사용한다. <br /> 
키와 값을 정의할 때, 키는 고유해야 하지만 키에 해당하는 값은 중복이 가능하다. <br />
변수를 각각 선언하는 대신, 관련 있는 변수들을 한번에 모아 maps로 만들어서 사용할 수 있다. <br />

내장함수 | 내용
--- | ---
map-get(map,key) | 키에 해당하는 값을 값을 리턴하는 함수
map-keys(map) | map에 들어있는 키(key) 전부를 리턴하는 함수
map-values(map) | map에 들어있는 값(value) 전부를 리턴하는 함수
<br />

```scss
$font-sizes: ("h1": 45px, "h2": 19px, "p": 16px);

section {
	h2 {
		font-size : map-get($font-sizes, "h1");  // 500
	}
}
map-get($font-size, "h3");  // null
```
<br />

## 변수의 Scope
1. 지역변수 <br />
지역변수는 선언한 자기자신을 감싸고 있는 중괄호 `{}` 안에서 사용 
```scss
.info{
	$line-normal : 1.34; // 지역변수
	font-size : 15px;
	line-height : $line-normal;
	text-align : right;
  span{
		line-height : $line-normal;
	}
}
```

2. 전역변수 <br />
- 전역변수는 가장 윗부분에 정의하면 파일 내에 어디서든지 사용가능하다.
- !global을 사용하여 local 변수를 global 변수로 만들어 사용할 수도 있다.
```scss
$font-p : 15px; // 전역 변수

.main-box{
	p {
    $mycolor: #333 !global;  // 전역 변수
		font-size : $font-p;
	}
	a {
    font-size : $font-p;
		text-decoration : none;
    color: $mycolor
	}
}
```
<br />

## Operator
### 비교연산자 (숫자형)
```scss
@debug 100 > 50; // true
@debug 10px < 17px; // true
@debug 96px >= 1in; // true
@debug 1000ms <= 1s; // true

// 비교하거나 연산하는 값의 단위가 일치하지 않으면 에러가 발생!
// 단위가 없는 숫자와 일반숫자와 비교하는 경우에는 에러가 발생하지 않는다.
@debug 100px > 10s;
// Error: Incompatible units px and s

@debug 100 > 50px; // true
@debug 10px < 17; // true
// Not Error
```
<br />

### 산술연산자
```scss
@debug 10s + 15s; // 25s
@debug 1in - 10px; // 0.8958333333in
@debug 5px * 3px; // 15px*px
@debug 1in % 9px; // 0.0625in (1in == 96px)
// 비교하거나 연산하는 값의 단위가 동일하지 않으면 에러
@debug 100px + 10s;
// Error: Incompatible units px and s.
```
<br />

### String의 a + b
`+` 연산자에서 a와 b가 모두 문자열이라면 문자열  a, b 를 합쳐서 새로운 문자열로 반환<br />
```scss
.status-bar {
	font-family : "Noto Sans KR", sans- + serif;
}

td {
	&::after{
		content : "Heades" + " up!"; // 문자열 더하기
	}
}
```
<br />

### 논리연산자
```scss
@debug not true; // false
@debug not false; // true

@debug true and true; // true
@debug true and false; // false

@debug true or false; // true
@debug false or false; // false
```