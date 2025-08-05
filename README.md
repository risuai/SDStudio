# 소개
Stable Diffusion 계열 API와 모델을 사용하기 편하게 해주는 프론트앤드 프로그램입니다. 모든 씬을 여러번 생성 예약을 해놓고 딴거하다가 와서 이미지를 이미지 월드컵으로 선택하고 리터칭하는 작업 흐름에 맞춰져 있습니다.

![](images/img1.png)

![](images/img2.png)

## 맥에서 빌드하기

홈브루(Homebrew) 설치하기

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Nodejs와 Yarn 설치하기

```
brew install node yarn
```

Xcode command line tools 설치하기

```
xcode-select --install
```

Python distutils 설치하기

```
pip3 install setuptools --break-system-packages
```

추가 패키지 설치하기

```
yarn add mobx @anuradev/capacitor-background-mode
```

소스파일 다운받기

```
git clone https://github.com/Yurly123/SDStudio.git
```

폴더로 이동

```
cd SDStudio
```

Dependency 설치하기

```
yarn install
```

앱 빌드하기

```
yarn package
```

.dmg 파일은 SDStudio/release/build 폴더에 있습니다.

## 주요 기능

### 씬 별 이미지 생성
![](images/img3.png)

### 이미지 월드컵 기능

![](images/img8.png)
	
### 이미지 인페인팅 기능

![](images/img4.png)

### 자동 배경 제거 기능

![](images/img6.png)

### 포토샵 연동 기능

![](images/img5.png)

### 이미지 변형 기능

![](images/img9.png)

### 태그 자동 완성

![](images/img10.png)

###  프롬프트 조각 및 구문 하이라이팅 기능

![](images/img111.png)

### 프롬프트 조합 기능

![](images/img7.png)

## 크래딧

이미지 씬 기능은 https://dendenai.xyz 의 프리셋 기능에서 파생되었습니다.
