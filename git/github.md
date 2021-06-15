# github 사용 기본 정리
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