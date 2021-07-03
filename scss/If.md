# if 조건문
조건에 따라 스타일을 주고자 할 때, `if`와 `else`을 사용하는데, <br />
if문 하나만 사용하는 경우도 있으며, 뒤에 나오는 else문, else if문과도 함께 사용하는 경우도 있다.
<br />

## @if
`@if`에 괄호 없이 true나 false를 반환할 수 있는 조건문을 만들면 된다. <br />
조건에는 논리연산자 and, or, not을 사용하고, if문의 조건이 true일 때만 `{ }` 괄호 안에 있는 코드가 실행하게 된다. 
<br />

```scss
@mixin avatar($size, $circle: false) {
  width: $size;
  height: $size;

  @if $circle {
    border-radius: $size / 2;
  }
};

.square-av {
  @include avatar(100px, $circle: false);
}
.circle-av {
  @include avatar(100px, $circle: true);
}
```
<br />

## @else
`@else`는  `if`처럼 조건문이 필요하지는 않으며 if에서 걸었던 조건이 false가 나오면 else문의 코드가 실행하게 된다.
<br />

```scss
$light-background: #f2ece4;
$light-text: #036;
$dark-background: #6b717f;
$dark-text: #d2e1dd;

@mixin theme-colors($light-theme: true) {
  @if $light-theme {
    background-color: $light-background;
    color: $light-text;
  } @else {
    background-color: $dark-background;
    color: $dark-text;
  }
};

.banner {
  @include theme-colors($light-theme: true);
  body.dark & {
    @include theme-colors($light-theme: false);
  }
}
```
<br />

## @else if
`@else if`는 if로는 부족할 때, 즉 여러 개의 조건문을 사용해야 할 때 사용한다. <br />
`@else if`에도 true나 false를 반환하는 조건문을 작성하면 된다.<br /> 
if문의 조건에서 false가 나왔을 때, else if문으로 넘어가서 조건에 대해 true인지 false인지 판단하게 된다. <br />
true인 경우 else if문 내의 코드를 실행하고, false 라면 그 다음 조건문( else or else if )로 넘어가게 된다.
<br />

```scss
@mixin triangle($size, $color, $direction) {
  height: 0;
  width: 0;

  border-color: transparent;
  border-style: solid;
  border-width: ($size/2);


  @if $direction == up {
    border-bottom-color: $color;
  } @else if $direction == right {
    border-left-color: $color;
  } @else if $direction == down {
    border-top-color: $color;
  } @else if $direction == left {
    border-right-color: $color;
  } @else {
    @error "Unknown direction #{$direction}.";
  }
}

.next {
  @include triangle(5px, black, right);
}
```