ESLint
====
Vue.js 프로젝트에 ESLint 적용하기

# 스크랩자료
* [Vue.js 공식 ESLint 플러그인 적용하기](http://vuejs.kr/vue/eslint/2017/12/03/eslint-plugin-vue/)
* [Vue.js 공식 스타일 가이드](https://kr.vuejs.org/v2/style-guide/)
* [Vue.js 공식 ESLint 데모 웹 사이트](https://mysticatea.github.io/vue-eslint-demo)

# Vue.js 공식 ESLint
Airbnb와는 조금 정책이 다르지만 아무래도 Vue.js 공식 ESLint가 더 낫지 않을까하는 마음 :-)

```bash
$ npm install 
$ npm install --save-dev eslint eslint-plugin-vue@next
```

```js
// https://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: [
    "standard",
    "plugin:vue/recommended"
  ],
  plugins: [
    // "html",  // HTML Plugin이 들어가있으면 vue파일을 html으로 인식하여 Lint가 제대로 동작하지 않는다!!!
    "standard",
    "vue"
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // require comma-dangle - 내가 넣고싶어서 넣은 comma-dangle 설정
    "comma-dangle": ["error", {
      "arrays": "never",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "ignore"
    }]
  }
}
```


# Airbnb ESLint
