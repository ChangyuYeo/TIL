# for 반복문
## @for
sass문법에서도 다른언어 처럼 for 반복문을 사용할 수 있다. <br />

```scss
for ($변수) from (시작) through(끝){
	// 반복할 내용
}
```
`@for`은 정의한 횟수만큼 코드 실행을 반복하는데, <br />
`@for`문에 **from ~ through**를 사용하여 어디서 시작해서 어디서 끝날 지를 정할 수 있다.<br />

`nth-` 선택자를 사용해 활용할 수도 있다.

```scss
// for문을 이용해 nth-선택자에게 각각의 image를 배경에 넣어준다.
@for $i from 1 through 5 {
  .photo-box:nth-child(#{$i}) {
    background-image: url("../assets/phoster#{$i}.png");
  }
} 
// 1 ~ 5 총 5번 반복
```
<br />

## @each
`@each`은 lists나 맵의 각각의 요소마다 코드를 실행해서 스타일을 적용할 수 있게 한다.

```scss
$color-palette: #dad5d2 #3a3532 #375945 #5b8767 #a6c198 #dbdfc8;

@each $color in $color-palette {
  $i: index($color-palette, $color); //index는 list의 내장함수
  .color-circle:nth-child(#{$i}) {
    background: $color;
    width: 20px;
    height: 20px;
  }
}
```
<br />

## @while
`@while` 은 특정 조건에 만족할 때 까지 무한 반복을 하며, 조건을 만날 때 while 반복문을 빠져나오게 된다.

```scss
@function scale-below($value, $base, $ratio: 1.618) {
  @while $value > $base {
    $value: ($value/$ratio);
  }
  @return $value;
}

$normal-font-size: 16px;
.sup {
  font-size: scale-below(20px, 16px);
}
```