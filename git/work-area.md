# Git의 작업영역
Git은 내부적으로 3가지 종류의 작업 영역이 있다. <br />
1. working directory
1. staging area
1. repository

## working directory (작업 디렉토리)
`working directory`는 실제 작업을 하는 프로젝트 디렉토리를 의미한다.<br />
즉, 실제 코드를 수정하고 추가하는 변경이 이루어지는 영역이다.
<br />

## staging area (스테이징 영역)
`staging area`는 `commit`이 되기전 `git add`를 한 파일들이 존재하는 영역을 의미한다. <br />
`commit`을 하게되면 `staging area`에 있는 파일들만 `commit`에 반영되게 된다.
<br />

## repository (리포지토리)
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