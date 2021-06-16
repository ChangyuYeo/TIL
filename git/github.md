# github를 활용할 수 있는 커멘드 정리
## git push
`local repository`의 내용을 GitHub의 `remote repository`에 보내고 싶을때, <br />
`git push` 커멘드를 사용하면 된다.

```
git push origin 'branch명'
```
<br />

`git push` 커멘드는
1. 자신의 `remote repository`에서 자신만 사용하거나,
2. 해당 `remote repository` 에서 `collaborator`로 지정된 다른사용자가 사용할 수 있다.
<br />

## git pull
`git pull` 커멘드는 만약 `remote repository`의 내용이 GitHub에서 직접 내용을 수정되거나, <br />
다른 사람이 `remote repository`를 자신의 컴퓨터로 가져가서 수정한 다음 다시 `remote repository`에 git push한 경우, <br />
`remote repository`의 내용이 수정이 될 수 있는데 이런 경우에는 본인의 `local repository`를 **업데이트**를 해야할 때 사용하는 커멘드 이다.

```
git pull
```
<br />

## git clone
`git clone` 커멘드는 github의 프로젝트를 가져오기 위해 사용하는 커멘드이다.

```
git clone 'repository주소'
```
<br />

명령어 | 설명
--- | ---
git push | `local repository`를 `remote repository`으로 보내기
git pull | `remote repository`에서 `local repository`으로 가져오기
git clone | gitHub에 있는 프로젝트를 내 컴퓨터로 가져오기