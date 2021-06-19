# commit (커밋)
`commit (커밋)`은 `staging area`의 현재상태를 하나의 버전으로 남기는 작업이다. <br />
커밋을 크게 3가지의 정보로 나눌 수 있는데,
1. 커밋을 한 사용자의 아이디
1. 커밋을 한 날짜와 시간
1. 커밋 메시지

커밋을 한 사용자와 날짜 / 시간은 git에서 자동으로 기록해주지만, <br />
커밋 메시지는 커밋을 한 사용자가 직접 작성을 해주어야 한다.
<br />

## git log
`git log` 커멘드는 지금까지의 커밋 히스토리를 볼 수 있는 커멘드 이다.

```
git log
```

`git log` 커멘드를 사용할 때 추가옵션으로 `--pretty=oneline` 이라는 옵션을 붙여 사용하면 <br />
커밋 하나당 한 줄씩 요약해서 볼 수 있다.

```
git log --pretty=oneline
```
<br />

## alias (별칭)
`git log --pretty=oneline` 처럼 git의 커멘드중 길이가 긴 커멘드를 별명을 붙여서 간단하게 사용할 수 있는 기능이 있는데 <br /> 그것을 `alias` 이라고하며 alias 작업을 하는 것을 `aliasing`라고 한다.
<br />

`aliasing`을 하기위해선 `git config`라는 커멘드를 같이 사용해주어야 되는데

```
git config alias.history 'log --pretty=oneline'
```

이런식으로 명령을 실행하면 **git histroy**라고만 써도 자동으로 `git log --pretty=oneline`을 실행하게 된다.
<br />

## git reset 
`git reset` 커멘드는 시간을 돌려 과거의 특정 커밋으로 되돌리는 커멘드이다. 

옵션 | working directory | staging area | repository | 주용도
:---: | :---: | :---: | :---: | :---:
--soft | 안 바뀜 | 안 바뀜 | HEAD와 같이 움직임 | branch 이동
--mixed | 안 바뀜 | 지정한 commit과 동일 내용 | HEAD와 같이 움직임 | Staging Area에서 빼기
--hard | 지정한 commit과 동일 내용 | 지정한 commit과 동일 내용 | HEAD와 같이 움직임 | commit 되돌리기

```
git reset '옵션' '커밋 아이디'
```

여기서 커밋 아이디 대신에 커밋 히스토리를 이용해 좀 더 간단하게 사용할 수 있다.
```
git reset --hard HEAD~2
```
위 명령을 실행하면 HEAD가 이제 3번 커밋을 가리키게 된다.
<br />

## git tag
커밋을 넘길 때 커밋메시지와 같이 남기게 되는데 그 커밋 중에서 다른 커밋보다 좀더 중요한 의미가 있는 커밋들도 있게될 수 있다. <br />
이럴 때 `git tag` 커멘드를 이용해서 추가적인 tag를 작성할 수 있다.

```
git tag '태그 이름' '커밋 아이디'
```
위 명령으로 해당 커밋에 tag를 작성해 표시할 수 있다. <br />

만약 각 태그와 연결된 커밋이 보고 싶으면,

```
git show '태그 이름'
```
명령으로 실행해서 간편하게 커밋들의 상황을 파악할 수 있다.
<br />

## commit 관련 커멘드 정리

```javascript
git log  // 커밋 히스토리를 출력
git log --pretty=oneline  // --pretty 옵션을 사용하면 커밋 히스토리를 다양한 방식으로 출력할 수 있다.
git show '커밋 아이디'  // 특정 커밋에서 어떤 변경사항이 있었는지 확인
git commit --amend  // 최신 커밋을 다시 수정해서 새로운 커밋으로 만듦
git config alias.'별명' '커맨드'  // 길이가 긴 커맨드에 별명을 붙여서 이후로 별명으로 해당 커맨드를 실행할 수 있도록 설정
git diff '커밋 A의 아이디' '커밋 B의 아이디'  // 두 커밋 간의 차이 비교
git reset '옵션' '커밋 아이디'  // 옵션에 따라 하는 작업이 달라짐(옵션을 생략하면 --mixed 옵션이 적용됨)
git tag '태그 이름' '커밋 아이디'  // 특정 커밋에 태그를 붙임
```