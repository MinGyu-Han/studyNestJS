# 필기
> nestJS 설치&세팅  
> 1. nodeJS 설치  
>    - 공식 홈페이지에서 (LTS 권장)  
>
> 2. nestJS 설치
>    ```bash
>    npm i -g @nestjs/cli
>    ```   
> 3. 새 프로젝트 생성
>    ```bash
>    nest new project-name
>    ```
> 4. 구동
>    ```
>    npm run start
>    ```   

> nestJS 프로젝트 기본 구조
> 1. eslintrc(eslint.config.mjs 파일을 말하는 듯?)
>    - 코드를 깔끔하게 짤 수 있도록 도와주는 라이브러리   
>    - 타입스크립트(ts) 쓰는 가이드 라인 제시   
>    - 문법에 오류가 나면 알려주는 역할 등등
>
> 2. pretierrc
>    - 코드 형식을 맞추는데 사용(예 작은 따옴표 사용? 큰 따옴표 사용 등)
>    - 오류 찾는 것이 아닌 코드 포멧터 역할
> 3. nest-cli.json
>    - nest 프로젝트를 위해 특정한 설정을 할 수 있는 json 파일일
> 4. package.json
>    - bulid : 운영환경을 위한 빌드
>    - format : 린트에러가 났을지 수정(?)
>    - start : 앱 시작
>    - 라이브러리 등등
> 5. src 폴더
>    - main.ts -> app.module 실행
>    - 기타 등등

> nestJS 모듈
> 1. nestJS 모듈이랑?
>    - @Module() 데코레이터로 주석이 달린 클래스
>    - 각 응용 프로그램에는 하나 이상의 모듈 필요
>    - root 모듈(appmodule)은 nestJS 시작점
>    - 모듈은 기본적으로 싱글톤 패턴
> 2. 모듈 생성하기
>    - 모듈 생성 명령어 : nest g module module-name

> nestJS 컨트롤러
> 1. Controller 란? 
>    - 들어오는 요청을 처리하고 클라이언트에 응답을 반환 
>    - @Controller 데코레이터 주석이 달린 클래스
> 2. Handler 란?
>    - @Get, @Post, @Delete 등과 같은 데코레이터로 장식 된 건트롤러 클래스 내에 단순 메서드
> 3. Controller 생성하기
>    - Controller 생성하기 명령어 : nest g controller controller-name --no-spec


> nestJS Providers, Service
> 1. Providers 란?
>    - 종속성으로 주입할 수 있음
>    - 객체는 서로 다양한 관계를 만들 수 있으며 객체의 인스턴스를 "연결"하는 기능은 대부분 Nest 런타임 시스템에 위임될 수 있음
>    - Nest의 클래스는 서비스, 리포지토리, 팩토리, 헬퍼 등 프로바이더로 취급될 수 있음
>
> 2. Service 란?
>    - 소프트웨어 개발내의 공통 개념
>    - **@Injectable** 데코레이터로 감싸져서 모듈에 제공, 이 서비스의 인스턴스는 애플리케이션 전체에서 사용 될 수 있음
> 
> 3. Service 생성하기
>    - Service 생성하기 명령어 : nest g service service-name --no-spec
>    - --no-spec : 테스트를 위한 소스 코드 생성 X

> uuid 모듈
> 1. 설치
>    - 설치 : npm install uuid --save
>

> DTO (Data Transfer Object)
> 1. DTO(Data Transfer Object) 란?
>    - 계층간 데이터 교환을 위한 객체
>    - DB에서 데이터를 얻어 Service나 Controller 등으로 보낼 때 사용하는 객체
>    - 데이터가 네트워크를 통해 전송되는 방법을 정의하는 객체
>    - interface나 class를 이용해서 정의 할 수 있음(NestJS는 class 추천)
>
> 2. DTO 사용 이유?
>    - 데이터 유효성을 체크하는데 효율적


> Pipe
> 1. Pipe 란?
>     - @Injectable() 데코레이터로 주석이 달린 클래스
>     - 파이프는 data transformation과 data validation을 위해서 사용
>     - 파이프는 컨트롤러 경로 처리기에 의해 처리되는 인수에 대해 작동
>     - Nest는 메소드가 호출되기 직전에 파이프를 삽입하고 파이프는 메소드로 향하는 인수를 수신하고 이에 대해 작동
>     - 파이프가 없으면 핸들러로 데이터가 바로 전달, 있으면 그 전에 검증, 가공 등 수행하는 듯.
> 2. Data Transformation?
>     - 입력 데이터를 원하는 형식으로 변환(String > Int 등)
> 3. Data validation?
>     - 유효성 체크
> 4. Pipe 사용하는 법(Binding Pipes)
>> 1. Handler-level Pipes
>>    - @UsePipes() 데코레이터 이용해서 사용
>> 2. Parameter-levl Pipes
>>    - 특정 파라미터에만 적용
>> 3. Global-level Pipes
>>    - 클라이언트에서 들어오는 모든 요청에 적용
>>    - main.ts에 넣어줌
> 5. Built-in Pipes
>> 1. ValidationPipe
>> 2. ParseIntPipe
>> 3. ParseBoolPipe
>> 4. ParseArrayPipe
>> 5. ParseUUIDPipe
>> 6. DefaultValuePipe
> 6. Documentation 페이지
>     - https://github.com/typestack/class-validator#manual-validation

