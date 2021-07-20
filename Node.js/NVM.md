# NVM
> Node Version Manager
- 노드버전을 쉽게 변경할 수 있다.
<br />

## NVM의 특징
- 컴퓨터에 다양한 버전의 Node.js 를 설치할 수 있게 해줌
- use 커맨드를 이용해 사용할 Node 버전으로 간단하게 스위칭할수 있게 해줌
<br />

##  NVM 설치
```
$ curl https://raw.githubusercontent.com/creationix/nvm/v0.30.2/install.sh | bash
```

- 터미널로 nvm 설치
- 쉘 재시작 명령어
- nvm 버전 확인
<br />

## NVM 명렁어
```
$ nvm install node
$ nvm install v5.5.0
$ nvm use <version>
$ nvm ls
$ nvm ls-remote
$ nvm uninstall <version>
$ nvm alias default node
```
- 최신 버전 설치하기
- 특정 버전 설치하기
- 특정 버전 사용하기
- 설치된 노드 버전 목록 확인하기
- 설치할 수 있는 버전 리스트 가져오기 ~~(개많음..)~~
- 필요없는 노드 버전 삭제하기
- 설치되어 있는 가장 최신버전의 node를 디폴트로 사용하기 (디폴트 설정을 안하게될 경우 매번 노드 버전을 nvm use 명령어를 사용해야한다.)
