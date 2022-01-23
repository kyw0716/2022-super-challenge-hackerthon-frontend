# INHA univ. Super Challenge Hackathon Front-end Repository
## 하텍이미래당 팀

인하대학교 2022 슈퍼챌린지 소프트웨어 해커톤 (2022.01.14 ~ 2022.01.21)
코로나19 관련 종합정보 서비스 프론트엔드 개발 Repository

<br/>

## Topic
- 코로나19 방역으로 고생하시는 교육 종사자분들을 위한 코로나19 관련 정보 종합 서비스
- Comprehensive service for information related to COVID-19 for education workers suffering from COVID-19 quarantine

<br/>

## 개발 배경
> 코로나 확산에 따른 교육청, 질병관리청, 학교의 지침이 서로 달라 이를 공지해야 하는 보건 교사의 불편함이 커지게 되었고, 부분 대면을 위해 필수적인 자가진단을 실시하지 않은 학생들에게 자동으로 알림을 보내는 시스템이 없어 이를 일일히 수동으로 공지해야 하는 수고스러움을 겪게 되었다. 이를 해결하고자 여러 단체의 지침을 한데 모으고, 학생들에게 자동으로 알림을 보내는 서비스를 개발하게 되었다.

<br/>

---

<br/>

## Features

- 학생/선생님 구분 회원가입, 로그인 기능 (쿠키 기반)
- 자가진단 서비스 및 자가진단 미참여자 자동, 수동(선생님이 학생에게 전송) 알림 서비스
- 자가진단 미참여자 자동, 수동 (선생님이 학생에게 전송) 카카오톡 알림 서비스 (Open Api 기반)
- 코로나19 현황 제공 기능 (Open Api 기반)
- 질병관리청, 각 학급별의 코로나19 관련 지침 제공 기능
>- Student/teacher separate sign up, login function (based on Cookie)
>- Self-diagnosis service
>- Automatic/manual KaKao Talk notification service for non-participants in self-diagnosis (based on Open Api)
>- Corona 19 status provision function (based on Open Api)
>- Korea Centers for Disease Control and Prevention, function to provide guidance related to COVID-19 for each class

<br/>

---


<br/>

## Tech

프론트엔드 개발에 사용된 언어 및 툴

- [`javascipt` `React`] - 반응형 웹 페이지 구성을 위해 이용
- [`JSX`] - React 엘리먼트를 생성하면서 자바스크립트의 모든 기능을 쓸 수 있도록 보조해주기 위해 이용
- [`axios`] - Back-end 와의 통신을 위해 이용
- [`html` `css`] - 웹 서비스의 기본 레이아웃 구성 및 디자인

<br/>

---

<br/>

## Installation

정상적인 프로그램 실행을 위해 node.js LTS 16.13.2 버전 및 axios 모듈, react router 모듈 필요.

### node.js LTS 16.13.2 Installation
- [node.js install](https://nodejs.org/ko/download/)

### axios module Installation
```node.js
npm install axios
```

### react router module Installation
```node.js
npm i react-router-dom@5.3.0
```

<br/>

---

<br/>

## 프론트엔드 코드 실행 방법
```node.js
npm start
```
>디렉토리를 hackerthon-practice로 옮긴 후 위의 코드를 실행시킨다.<br/>그러면 `localhost:3000`으로 서버가 열려 작업한 코드 내용을 웹 브라우저를 통해 볼 수 있게 된다.

<br/>

---

<br/>

## 백엔드 코드 실행 방법
>[backend](https://github.com/chominho96/INHA-super-challenge-hackathon-Back-end.git) <br/> 위 링크를 통해 백엔드 코드를 클론해온 후 방식에 맞춰 실행 시키면 전체적인 기능 또한 사용해볼 수 있다.