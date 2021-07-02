# Extend
`Extend`는 연관 있는 요소들끼리 스타일 코드가 중복된 경우에 사용된다. <br />
이미 스타일이 작성된 선택자의 클래스를 `extend`하거나 `%`를 사용해서 따로 스타일을 정의한 후 <br />
`extend`하여 원하는 선택자에게 스타일을 적용해 줄 수 있다.

- `mixin`는 (관계 없는) 선택자에서 조금 다른 스타일을 적용할 때 사용
- `extend`는 관계 있는 선택자들의 동일한 소스코드 적용시 사용

<br />

## class이름 가져오기
@extend 에 클래스 명을 적으면, 클래스에 있는 코드 전체가 extend 된다.
```scss
.profile-user {
  background-image: url("../assets/user.jpg");
  background-size: cover;
	background-position : 50% 50%;
  border-radius: 50%;
	width : 50px;
	height : 50px;
}

.comment-user {
  @extend .profile-user;
}
```
> 클래스명을 extend 하는 경우 **다중 선택자 클래스**를 사용할 수 없다.

<br />

## %placeholder
`%` 로 선택자를 만드며, `@extend`를 사용해서 `%placeholder` 스타일 블럭을 불러오면 된다.<br />

```scss
%base-button {
  width: 133px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border-radius: 10px;
}

.follow-button {
  @extend %base-button;
  background-color: #ffffff;
  color: #ff375f;
  border: 3px solid #ff375f;
}

.message-button {
  @extend %base-button;
  background-color: #ff375f;
  color: white;
}
```