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