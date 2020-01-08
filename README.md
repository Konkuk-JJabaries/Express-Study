# ExpressJS-Study

ExpressJS를 공부하는 레포지토리 입니다.

11st 폴더는 11번가에서 API를 활용하여 호출하는 테스트용입니다.

실행방법은 다음과 같습니다.

```zsh
$ cd 11st
$ npm install
```

<br></br>

express 로 11번가를 호출하는 방법은 아래와 같습니다.

> express로 호출을 하는 것을 테스트 할 때에는 11st 를 실행시킬 필요가 없습니다! 윗 과정은 필요없습니다!!

```zsh
$ cd API/11st
$ npm install & npm run build   # 11번가 API 빌드
$ cd ../joongna
$ npm install & npm run build   # 중고나라 API 빌드
$ cd ../../express-for-typescript
$ npm install & npm run build & npm start  # Express 빌드 및 실행
```

이 후, 차례대로 하면 실행되는 것을 확인할 수 있습니다.

1. <localhost:3000> 에 접속합니다.
2. 기존 url localhost:3000 에 `/product` 를 추가한 뒤 접속합니다.
3. 나오는 폼에 따라 원하는 검색어를 누르고 입력을 누르세요
4. process를 끝내고 싶다면 실행했던 terminal로 이동하여 `ctrl+c`를 입력하면 종료됩니다.
