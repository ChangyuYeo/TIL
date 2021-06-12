# git의 status 정리
git에는 크게 2가지의 상태있으며 `Tracked 상태` 에서도 3자기 상태로 나누어 볼 수 있다.
1. Untracked 상태
1. Tracked 상태 
   1. Staged 상태
   1. Unmodified 상태
   1. Modified 상태

## 1. Untracked 상태
`Untracked 상태`는 '추적되지 않고 있는'이라는 뜻이다. <br />
즉, `Untracked`는 파일이 Git에 의해서 그 변동사항이 전혀 추적되고 있지 않는 상태를 말하는데, <br />
예를 들어, 파일을 새로 생성하고 그 파일을 한 번도 `git add` 해주지 않았다면 이 상태를 뜻한다. 
<br />

## 2. Tracked 상태
`Tracked 상태`는 파일이 Git에 의해 그 변동사항이 추적되고 있는 상태이다. <br />
`Tracked 상태`는 다시 그 특성에 따라 3가지 상태로 나누어 진다.
<br />

### Staged 상태
`Staged 상태`는 파일의 내용이 수정되고나서, `staging area`에 올라와있는 상태를 말한다. <br />
예를 들어, 새로 생성한 파일에 내용을 쓰고 `git add`를 해주거나 <br /> 
한 번이라도 commit에 포함됐었던 파일이라도 내용을 수정하고 `git add`를 해준 상태
<br />

### Unmodified 상태
`Unmodified 상태`는 현재 파일의 내용이 최신 commit의 모습과 비교했을 때 전혀 바뀐 게 없는 상태이다. <br />
commit을 하고 난 직후에는 `working directory` 안의 모든 파일들이 이 상태가 된다고 생각하면 된다.
<br />

### Modified 상태
`Modified 상태`는 최신 commit의 모습과 비교했을 때 조금이라도 바뀐 내용이 있는 상태면 그 파일은 `Modified 상태` 이다.