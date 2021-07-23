# Vue.js - CSS
## 코딩 룰

* HTML, style은 케밥 표기법(kebab-casing)을 사용한다. (대소문자 구분이 안되기 때문)
* 그 외, Vue.js에서 데이터 형, 메소드 명 등은 모두 카멜 표기법(camelCasing)으로 작성한다.

## 스타일 적용하기
### 인라인 스타일
인라인 스타일은 권장하지 않는다. Vue.js에서 인라인 스타일은 `v-bind:style` 로 작성한다. View Model의 `data`영역에 스타일 속성을 정의하고 바인딩하면 된다. data영역에 스타일 속성을 정의할 때 주의할 점은, 이는 javascript이므로 카멜표기법을 사용해야 한다는 것이다.
```xml
<div id="example">
  <button id="a" v-bind:style="style1" @mouseover.stop="overEvent"
          @mouseout.stop="outEvent">테스트</button>
</div>
```
```javascript
  var vm = new Vue({
    el: "#example",
    data: {
      style1: {
        backgroundColor: "aqua",
        border: 'solid 1px gray',
        with: '100px',
        textAlign: 'center'
      }
    },
    methods: {
      overEvent: function (e) {
        this.style1.backgroundColor = "purple";
        this.style1.color = "yellow";
      },
      outEvent: function (e) {
        this.style1.backgroundColor = "aqua";
        this.style1.color = "black";
      }
    }
  })
```

### CSS 클래스 바인딩
`v-bind:class` 로 CSS 클래스와 data를 바인딩 한다. 바인딩 될 data는 boolean값으로서 true일 때 해당 CSS클래스가 적용된다. 바인딩 시, 주의사항으로는 역시나 CSS 클래스를 카멜표기법으로 표기해야 한다는 점이다. 바인딩 시에 CSS클래스에 표기한대로 케밥표기법을 사용하면 바인딩이 되지않고 blank page가 나타난다. 오류도 안뜬다(....)
```css
    .backgroundColorAqua { background-color: aqua; color:purple; }
    .changeWidth { text-align:center; width:120px; }
    .dashedBorder { border:sandybrown dashed 1px; }
```
```xml
<div id="example">
<!-- v-bind:class 로 CSS 클래스와 Vue data를 바인딩 -->
  <button id="btn1" v-bind:class="{ backgroundColorAqua:cb1, changeWidth:cb2, dashedBorder:cb3 }">버튼1</button>
  <p>
    <input type="checkbox" v-model="cb1" value="true" />백그라운드 색상 적용<br/>
    <input type="checkbox" v-model="cb2" value="true" />너비 길이 변경 적용<br/>
    <input type="checkbox" v-model="cb3" value="true" />아웃라인 점선 디자인 적용<br/>
  </p>
</div>
```
```javascript
  var vm = new Vue({
    el : "#example",
    data : { cb1 : false, cb2 : false, cb3 : false }
  })
```
다만 위의 방법처럼 적용하면 유지보수도 어렵고 가독성도 떨어진다. 되도록이면 아래와 같이 작성하도록 하자 :-) 데이터 명과 클래스명을 동일하게 네이밍하여 플래그 값을 적용하는 방식이다.
```css
    .backgroundColorAqua { background-color: aqua; color:purple; }
    .changeWidth { text-align:center; width:120px; }
    .dashedBorder { border:sandybrown dashed 1px; }
```
```xml
<div id="example">
  <button id="btn1" v-bind:class="buttonStyle">버튼1</button>
  <p>
    <input type="checkbox" v-model="buttonStyle.backgroundColorAqua" value="true"/>백그라운드 색상 적용<br/>
    <input type="checkbox" v-model="buttonStyle.changeWidth" value="true"/>너비 길이 변경 적용<br/>
    <input type="checkbox" v-model="buttonStyle.dashedBorder" value="true"/>아웃라인 점선 디자인 적용<br/>
  </p>
</div>
```
```javascript
  var vm = new Vue({
    el: "#example",
    data: {
      buttonStyle : {
        backgroundColorAqua: false,
        changeWidth: false,
        dashedBorder: false
      }
    }
  })
```

### Computed, Method를 이용하여 스타일 적용하기
동적으로 변경되는 CSS인 경우에는 Computed와 Method를 사용하여 스타일을 적용할 수 있다. 대부분의 경우 Computed를 사용하는 것이 불필요한 연산이 캐싱되므로 더 나을 것으로 보인다. 꼭 필요한 경우에만 Method를 사용하자.
```css
    .normal { border:solid 1px black; }
    .warning { background-color: orange; color:purple; }
    .warnimage { width:18px; height:18px; top:5px; position:relative;   }
```
```xml
<div id="example">
  <div>
    <p>이메일 형식만 입력가능합니다.</p>
    <div>
      이메일 : <input type="text" class="normal" v-model="inputData" v-bind:class="info" />
      <img src="images/error.png" class="warnimage" v-show="info.warning" />
    </div>
  </div>
</div>
```
```javascript
var vm = new Vue({
    el : "#example",
    data : {
      score : 0
    },
    computed : {
      info : function() {
        var emailRegExp = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/;

        if (this.inputData.match(emailRegExp))
          return { warning:false };
        else
          return { warning:true };
      }
    }
  })
```

### Component에 스타일 바인딩 적용하기
사실 위의 방식과 크게 다를 것 없다. component에 `v-bind:class`를 적용해주면 위와 같은 동작을 하여 스타일이 바인딩 된다.
```xml
<div id="example">
  <center-box v-bind:class="바인딩하고자하는데이터명"></center-box>
</div>
```