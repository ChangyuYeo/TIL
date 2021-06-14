# git 기본 정리
## Git의 작업영역 (work-area)
Git은 내부적으로 3가지 종류의 작업 영역이 있다. <br />
1. working directory
1. staging area
1. repository

### working directory (작업 디렉토리)
`working directory`는 실제 작업을 하는 프로젝트 디렉토리를 의미한다.<br />
즉, 실제 코드를 수정하고 추가하는 변경이 이루어지는 영역이다.
<br />

### staging area (스테이징 영역)
`staging area`는 `commit`이 되기전 `git add`를 한 파일들이 존재하는 영역을 의미한다. <br />
`commit`을 하게되면 `staging area`에 있는 파일들만 `commit`에 반영되게 된다.
<br />

### repository (리포지토리)
`repository`는 `working directory`의 변경 이력들이 저장되어 있는 영역을 의미한다. <br />
즉, `commit`이 반영된 파일들이 저장되는 공간이며, `staging area`에 있는 파일을 하나의 버전으로 `repository`에 저장하게 된다.
<br />

> working directory는 working tree라고 하기도 하고, <br />
> staging area는 index라고 할 때도 있다.

<br/>
명령어 정리

```
git add 'staging area에 올릴 파일'
git commit -m '커밋 메시지(commit message)'
git push origin 'branch명'
```
<br />

---
<br />

## git add 정리
`git add`란 `working directory`(작업 디렉토리)상의 변경 내용을 `staging area`(스테이징 영역)에 추가하기 위해서 사용하는 Git 명령어 이다.
<br />

`git add` 명령어는 다음 `commit`을 기록할 때까지 변경분을 모아놓기 위해서 사용이된다. <br />
즉, `git commit` 명령어를 사용하기전에는 아무리 `git add` 명령어를 많이 실행해도 변경 이력에는 어떤 영향도 주지 않는다.
<br />

### git status
`git add` 명령어를 사용할 때, 함께 사용할 수 있는 명령어 `git status`는 `working directory`(작업 디렉토리)와 `staging area`(스테이징 영역)의 상태를 확인하기 위해서 사용되는 명령어 이다.
<br />

```
git add .
git status
```
<br />

### git add 사용법
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
<br />

> 파일의 내용을 수정하고 `git add .` 을 실행해서 `staging area`에 올렸지만, <br />
> 수정을 잘못하여 `staging area`에서 다시 내리고 싶을때는 `git reset` 커맨드를 사용하면 된다.

<br />

---
<br />

## git의 status 정리
git에는 크게 2가지의 상태있으며 `Tracked 상태` 에서도 3자기 상태로 나누어 볼 수 있다.
1. Untracked 상태
1. Tracked 상태 
   1. Staged 상태
   1. Unmodified 상태
   1. Modified 상태

### 1. Untracked 상태
`Untracked 상태`는 '추적되지 않고 있는'이라는 뜻이다. <br />
즉, `Untracked`는 파일이 Git에 의해서 그 변동사항이 전혀 추적되고 있지 않는 상태를 말하는데, <br />
예를 들어, 파일을 새로 생성하고 그 파일을 한 번도 `git add` 해주지 않았다면 이 상태를 뜻한다. 
<br />

### 2. Tracked 상태
`Tracked 상태`는 파일이 Git에 의해 그 변동사항이 추적되고 있는 상태이다. <br />
`Tracked 상태`는 다시 그 특성에 따라 3가지 상태로 나누어 진다.
<br />

#### Staged 상태
`Staged 상태`는 파일의 내용이 수정되고나서, `staging area`에 올라와있는 상태를 말한다. <br />
예를 들어, 새로 생성한 파일에 내용을 쓰고 `git add`를 해주거나 <br /> 
한 번이라도 commit에 포함됐었던 파일이라도 내용을 수정하고 `git add`를 해준 상태
<br />

#### Unmodified 상태
`Unmodified 상태`는 현재 파일의 내용이 최신 commit의 모습과 비교했을 때 전혀 바뀐 게 없는 상태이다. <br />
commit을 하고 난 직후에는 `working directory` 안의 모든 파일들이 이 상태가 된다고 생각하면 된다.
<br />

#### Modified 상태
`Modified 상태`는 최신 commit의 모습과 비교했을 때 조금이라도 바뀐 내용이 있는 상태면 그 파일은 `Modified 상태` 이다.