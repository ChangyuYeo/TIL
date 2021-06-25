# 파일 분리와 Nesting
## scss의 파일 분리
```
├── scss
│   ├── _header.scss
│   ├── _home.scss
│   ├── _mixin.scss
│   ├── _variables.scss
│   └── style.scss
├── src
│   └── index.html
└── README.md
```
폴더 구조를 보면 각 프레임 별로 분리하고 mixin와 variable 파일을 따로 분리했다. <br />

style.scss
```scss
@import "variables";
@import "mixin";
@import "header";
@import "home";
// ...
```
`style.scss` 에서는 각자 분리한 파일들을 `import` 하고 있으며, **@import** 와 주석 외에는 다른 코드들을 작성하지 않는다.
<br />

### `_`'파일명' 을 사용하는 이유
`_ (언더스코어)`를 붙이지 않는다면 불리한 파일들이 모두가 컴파일이 되는데, `_ (언더스코어)`를 붙여서 파일명을 정한다면, <br />
Sass에게 이 파일이 main파일의 일부분임을 알려줘 해당 파일은 css 파일로 컴파일하지 않고 내부에서 `@import` 형태로 작동하게 된다. <br />
> css는 import 할 때 파일 URL을 적어줘야 하지만, Sass에서 import는 확장명을 제외하고 파일명만 사용할 수 있다.
<br />

### 주석
Sass의 주석은 css와는 다르게 한 줄 주석이 가능하며 `//`을 사용하면 된다.
```scss
// 한 줄 주석 입니다.
/* 여러줄 주석
입니다. */
```
<br />

## 중첩 (Nesting)
`Nesting`을 사용하면 css를 중첩하여 작성할 수 있고, css코드가 구조화 되어 가독성이 높아지고 유지보수가 편리해진다.
<br />

```scss
nav {
  background: royalblue;
  padding: 10px;
  height: 50px;
  ul {
    display: flex;
    list-style: none;
    justify-content: flex-end;
    li {
      color: white;
      margin-right: 10px;
    }
  }
}
```
<br />

기존 css는 부모에게 상속된 자식 요소에게 스타일을 적용하려고 할 때마다 최상위 선택자를 반복 선언해야 되는데, <br />
`Nesting`을 사용하면 최상위 선택자를 한번만 선언해서 사용할 수 있기 때문에 중첩된 내용이 줄게된다.

```scss
// info-list div 와 info-list div dt, Nesting 사용
.info-list {
  div {
    display: flex;
    font-size: 14px;
    color: #4f4f4f;
    dt {
      font-weight: 700;
      margin-right: 7px;
    }
  }
}
```
<br />

### 속성 Nesting
`Nesting`은 선택자뿐만 아니라 스타일 속성들도 가능하다.<br />
아래 예시를 보면 .add-icon이라는 클래스 선택자에게 background 스타일을 주려고 하는데,<br />
background 이름을 가진 속성들을 background안에 중첩 시켜서 스타일 코드를 작성할 수 있다. <br />
속성을 중첩 할 때는 `콜론:`을 사용한다.

```scss
/* background-image, background-position
background-repeat, background-size 중첩*/
.add-icon {
  background : {
    image: url("./assets/arrow-right-solid.svg");
    position: center center;
    repeat: no-repeat;
    size: 14px 14px;
  }
}
```
<br />

### ampersand
`&(ampersand)`는 상위에 있는 부모선택자를 가리키게 된다. <br />
주로 가상요소, 가상클래스, class, id 셀렉터 등을 참조할 때 사용한다.
```scss
.box {
	&:focus{}
	&:hover{}
  &:active{}
	&:first-child{} 
  &:nth-child(2){}
	&::after{}
	&::before{} 
}
```
<br />
또는 공통 클래스 명을 가진 선택자들도 중첩시킬 수 있다.

```scss
// .box-yellow .box-red .box-green 중접
.box {
  &-yellow {
    background: #ff6347;
  }
  &-red {
    background: #ffd700;
  }
  &-green {
    background: #9acd32;
  }
}
```
<br />

### @at-root
`@at-root` 를 사용하면 중첩에서 벗어날 수 있다. <br />
중첩에서 벗어나고 싶은 선택자 앞에 `@at-root` 키워드를 사용하면 되며,<br />
중첩된 선택자에게만 사용이 가능하다.

```scss
.article {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  .article-content {
    font-size: 14px;
    opacity: 0.7;
    @at-root i {
      opacity: 0.5;
    }
  }
}
```