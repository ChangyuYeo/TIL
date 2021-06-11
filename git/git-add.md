# git add 정리
`git add`란 `working directory`(작업 디렉토리)상의 변경 내용을 `staging area`(스테이징 영역)에 추가하기 위해서 사용하는 Git 명령어 이다.
<br />

`git add` 명령어는 다음 `commit`을 기록할 때까지 변경분을 모아놓기 위해서 사용이된다. <br />
즉, `git commit` 명령어를 사용하기전에는 아무리 `git add` 명령어를 많이 실행해도 변경 이력에는 어떤 영향도 주지 않는다.
<br />

## git status
`git add` 명령어를 사용할 때, 함께 사용할 수 있는 명령어 `git status`는 `working directory`(작업 디렉토리)와 `staging area`(스테이징 영역)의 상태를 확인하기 위해서 사용되는 명령어 이다.
<br />

```
git add .
git status
```
<br />

## git add 사용법
1. `working directory`의 변경 내용의 일부만 `staging area`에 넘기고 싶을 때는 수정한 `파일이나 디렉토리의 경로`를 옵션으로 사용한다.

```
git add '파일/디렉토리의 경로'
```

2. 현재 디렉토리의 모든 변경 내용을 `staging area`으로 넘기고 싶을 때는`.` 옵션을 사용한다. (보통 많이사용하는 방법)

```
git add .
```

3. 작업 디렉토리 내의 모든 변경 내용을 전부 `staging area`으로 넘기고 싶을 때는, `-A` 옵션을 사용한다

```
git add -A
```

4. 각 변경 사항을 터미널에서 확인하면서 `staging area` 으로 넘기거나 제외할 수 있는 방법이 있는데, `-p` 옵션을 사용한다.

```
git add -p
```

<br />

명령어 | 차이점
:--- | :---
git add . | 명령어를 실행한 디렉토리 이하에서 발생한 변경내용만 포함
git add -A | 모든 디렉토리 상에 모든 변경 내용을 포함