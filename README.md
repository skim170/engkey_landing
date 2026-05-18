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

- 문의 수신 이메일: `components/CTAForm.jsx`의 `contactEmail`
- 카카오채널 링크: `components/CTAForm.jsx`와 `components/Footer.jsx`의 `kakaoChannelUrl`
- 무료 데모 신청 폼: `components/CTAForm.jsx`에서 FormSubmit AJAX 엔드포인트로 전송됩니다. 최초 제출 후 `contactEmail`로 도착하는 확인 메일을 승인해야 이후 신청 메일이 정상 수신됩니다.
- 푸터 링크: `components/Footer.jsx`
- 투명 배경 로고: `assets/logos`
- 원본 로고: `assets/raw`
- 색상/간격: `style.css`의 `:root` 디자인 토큰
