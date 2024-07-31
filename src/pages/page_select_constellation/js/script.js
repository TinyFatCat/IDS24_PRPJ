document.addEventListener('DOMContentLoaded', function () {
  let wrappers = document.querySelectorAll('.wrapper');
  wrappers.forEach((wrapper) => {
    let cards = wrapper.querySelectorAll('.card__small');
    cards.forEach((card) => {
      card.addEventListener('click', function () {
        let selectedCard = wrapper.querySelector('.card__small.selected');

        // 클릭된 카드를 토글 선택
        card.classList.toggle('selected');
        // 이미 선택된 카드가 있는지 확인하고 선택을 해제
        if (selectedCard && selectedCard !== card) {
          selectedCard.classList.remove('selected');
        }
        let btnDisableOff = document.getElementById('btnDisable');
        let btnEnableOn = document.getElementById('btnEnable');
        if (wrapper.querySelector('.card__small.selected')) {
          btnEnableOn.style.display = 'block';
          btnDisableOff.style.display = 'none';
        } else {
          btnEnableOn.style.display = 'none';
          btnDisableOff.style.display = 'block';
        }
      });
    });
  });
});
