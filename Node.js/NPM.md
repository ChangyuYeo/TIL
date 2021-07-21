# NPM(Node Package Manager)
> Node Packaged Manager의 약자
- Node.js에서 사용할 수 있는 pakage(module)들을 관리해주는 저장소 역할을 하고, 설치와 관리를 수행할 수 있는 CLI를 제공한다
<br />

## 패키지 설치
패키지 설치에는 local install과 global install이 있다 
<br />

### local install
npm 명령어로 손쉽게 패키지를 설치할 수 있다
```
npm install <패키지이름>
```
`npm i <패키지이름>` 으로 줄여서도 사용이 가능하다 
<br />

### global install
global package는 모든 프로젝트에서 공통으로 사용할 수 있다
```
npm install -g <패키지이름>
```
> global packge install path는 아래와 같다 <br />
> c:\Users\%USERNAME%\AppData\Roaming\npm\node_modules
<br />

## 의존성 관리
npm에서는 `package.json` 파일로 프로젝트의 정보와 패키지들의 의존성을 관리한다.
<br />

### package.json 란?
프로젝트의 정보를 정의하고, 의존하는 패키지 버전 정보를 명시하는 파일이다
<br />

다음 명령어로 package.json을 생성할 수 있다 ~~(-y 사용하면 편함)~~
```
npm init -y
```
<br />

package.json은 크게 2개로 나눌수 있다
#### name, version 영역 (프로젝트의 정보)
package.json 파일은 반드시 name과 version 항목을 포함해야 한다 <br />
- name: 소문자 한 단어로 이루어져야하며 하이픈과 언더스코어가 포함될 수 있다
- versoin: x.x.x 형식을 따라야 하며, 작성 규칙을 `시맨틱 버저닝`이라고 한다
<br />

#### dependencies, devDependencies 영역 (패키지 버전 정보들)
패키지 정보는 dependencies 또는 devDependencies에 작성된다 <br />
- dependencies: `프로덕션 환경`에서 응용 프로그램에 필요한 패키지를 명시
- devDependencies: `개발 및 테스트 단계`에만 사용하는 패키지를 명시