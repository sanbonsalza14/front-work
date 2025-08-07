// 폼 제출 시 호출되는 함수 (이벤트 매개변수 받음)
function check_sign(event) {
  // 브라우저의 기본 제출 이벤트(새로고침 등)를 막아줌
  event.preventDefault();

  // 입력받은 이름과 연락처 값을 공백을 제거하여 저장
  const name = document.getElementById('name').value.trim(); // 이름 입력칸에서 값 가져오기
  const phone = document.getElementById('phone').value.trim(); // 연락처 입력칸에서 값 가져오기

  // 이름 또는 연락처 중 하나라도 입력이 안됐을 경우
  if (name === '' || phone === '') {
    alert('이름과 연락처를 입력해주세요.'); // 사용자에게 알림 메시지 출력
    return; // 함수 종료
  }

  // ✅ 지원 분야 라디오 버튼 처리
  let field = document.getElementsByName('field'); // 이름이 'field'인 모든 라디오 버튼 요소 가져오기
  let selectedField = ''; // 사용자가 선택한 분야를 저장할 변수 초기화

  // 반복문으로 각 라디오 버튼 중 선택된 값 찾기
  field.forEach((x) => {
    if (x.checked) { // 현재 요소가 체크된 상태라면
      if (x.value === 'publishing') {
        selectedField = '웹 퍼블리싱';
      } else if (x.value === 'webapp') {
        selectedField = '웹 애플리케이션 개발';
      } else if (x.value === 'env') {
        selectedField = '개발 환경 개선';
      }
    }
  });

  // 선택된 분야가 없으면
  if (selectedField === '') {
    alert('지원 분야를 선택해주세요.'); // 사용자에게 알림 메시지 출력
    return; // 함수 종료
  }

  // ✅ 지원동기 입력값 가져오기
  const memo = document.getElementById('memo').value.trim(); // 지원동기 입력칸에서 값 가져오기

  // ✅ 콘솔에 입력된 정보 출력 (개발자가 확인하기 위한 용도)
  console.log(`이름: ${name}`);
  console.log(`연락처: ${phone}`);
  console.log(`지원 분야: ${selectedField}`);
  console.log(`지원동기: ${memo}`);

  // ✅ 사용자에게 최종적으로 입력한 내용을 보여주는 알림 메시지 출력
  alert(`지원이 완료되었습니다!\n\n이름: ${name}\n연락처: ${phone}\n지원 분야: ${selectedField}\n지원동기: ${memo}`);
}
