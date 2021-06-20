# branch(브렌치)
`branch(브렌치)`란 git에서 하나의 프로젝트를 여러 버전으로 관리할 수 있는 개념을 말한다.<br />
`branch(브렌치)`가 있기 때문에 하나의 프로젝트를 여러 갈래로 나누어서 관리할 수 있다.
<br />

## checkout
기본적으로 브렌치는 master 브렌치로 설정이 되어있는데 원하는 브렌치로 이동하기위해서는 <br />
`checkout` 커멘드를 사용하면 된다.
```
git checkout 'branch명'
```
<br />

브렌치의 옵션중에 `-b`라는 옵션을 사용하면 생성과 동시에 이동을 할 수 있게해준다. <br />
브렌치의 삭제는 `-d` 옵션을 주면 된다.
```
git checkout -b 'branch명'  // 생성과 동시에 브렌치이동
git checkout -d 'branch명'  // 해당 브렌치 삭제
```
<br />

## merge
`merge(합병)`은 하나의 브랜치와 다른 브랜치의 변경 이력 전체를 합치는 방법이다. <br />
```
git checkout master
git merge 'branch명'
```
다른 브랜치를 `merge`할 때는 **현재 내가 위치한 브랜치**와 **merge를 당하는 브랜치**를 잘 구분하는 게 중요하다. <br />

### conflict
`merge`를 진행하다가 두 브랜치 사이에 충돌이 생기는 경우가 있는데 그것을 `conflict`라고 한다. <br />
`conflict`가 발생하면,
1. `conflict`가 발생한 부분을 직접 수정해서 해결하고 커밋을 해서 `merge`를 마무리하는 방법과
1. `merge`을 취소하고 원래 상태로 돌아오는 방법이 있다.

이 때 `merge`를 취소하려면 `abort` 커멘드를 사용하면 된다.
```
 git merge --abort
```