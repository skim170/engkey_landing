# Engkey Landing

5~7세 유치원·어린이집을 위한 Engkey 랜딩페이지입니다. 별도 빌드 과정 없이 GitHub Pages에서 정적 파일로 배포할 수 있습니다.

## 로컬 확인

```powershell
python -m http.server 8000
```

브라우저에서 `http://127.0.0.1:8000/`을 열어 확인합니다.

## GitHub Pages 배포

1. GitHub에 새 저장소를 만들고 이 폴더의 파일을 푸시합니다.
2. 저장소의 `Settings > Pages`로 이동합니다.
3. `Build and deployment`에서 `Deploy from a branch`를 선택합니다.
4. Branch는 `main`, folder는 `/root`를 선택하고 저장합니다.
5. 배포가 끝나면 `https://계정명.github.io/저장소명/`에서 확인합니다.

## 수정 포인트

- 문의 수신 이메일: `form-config.js`의 `contactEmail`
- 카카오채널 링크: `components/CTAForm.jsx`와 `components/Footer.jsx`의 `kakaoChannelUrl`
- 무료 데모 신청 폼: 기본값은 `form-config.js`의 `formProvider: "formspree"`입니다. Formspree에서 발급받은 `https://formspree.io/f/YOUR_FORM_ID` 형식의 엔드포인트를 `formEndpoint`에 넣으면 됩니다. Getform은 `https://getform.io/f/YOUR_FORM_ID` 형식을 사용할 수 있고, FormSubmit으로 되돌리려면 `formProvider: "formsubmit"`으로 바꾸면 됩니다.
- 푸터 링크: `components/Footer.jsx`
- 투명 배경 로고: `assets/logos`
- 원본 로고: `assets/raw`
- 색상/간격: `style.css`의 `:root` 디자인 토큰
