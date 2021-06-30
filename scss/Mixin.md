# Mixin
`Mixin`은 **코드를 재사용**하기 위해 만들어진 기능이다. <br />
선택자들 사이에서 반복되고 있는 코드들은 `mixin`을 사용하여 코드 반복을 줄인다. <br />
중복되는 코드는 `mixin`으로 만들어 놓고 원하는 선택자 블럭에 `mixin`을 `include`하면 된다.
<br />

```scss
@mixin 이름(매개변수) //생성
@include 이름(인수)  //사용
```
<br />

- 앞에 `@Mixin`을 쓰고 이름을 정해준 후, 중괄호 `{ }` 안에 중복되는 코드를 넣어준다.
- `@include`를 사용하여 스타일 하고자 하는 요소에 포함 시키면 된다.
- mixin은 파일을 만들어서 import하여 사용하거나, mixin을 사용할 파일 내에서 선언 후 사용할 수 있다. 
- 이때, 여러 개의 mixin을 만들어 사용한다면, `_mixins.scss` 파일을 만들어서 관리한다.

```scss
@mixin center-xy{
	display: flex;
	justify-content : center;
	align-items : center;
}

.card{
	@include center-xy; // 정의한 center-xy mixin을 사용하여 코드 한줄이면 끝!
}

.aside{
	@include center-xy; 
}
```
<br />

## Arguments
mixin 이름 뒤에 `인수(Arguments)`를 넣어서 사용할 수 있으며, 일반 언어와 마찬가지로 매개변수와 인수의 개수가 같아야 한다. <br />

```scss
@mixin image-style($ul, $size, $repeat, $positionX, $positionY) {
  background-image: url($u);
  background-size: $size;
  background-repeat: $repeat;
  background-position: $positionX $positionY;
} 
//background관련 스타일 코드가 들어있다.
//mixin의 인수에 따라 조금씩 다른 스타일링이 가능하다.

.profile {
  @include image-style("./assets/user.jpg", cover, no-repeat, center, center);
}

.box-one {
  @include image-style(url("/images/poster1.svg"), cover, no-repeat, 40%, 50%);
}
```
<br />

### Content
`@content`를 사용하면 원하는 부분에 스타일을 추가하여 전달할 수 있다.
<br />

```scss
@mixin sample {
	display: flex;
	justify-content: center;
	align-items: center;
  @content
};

// 사용
@include sample {
  color: white;
};
```
