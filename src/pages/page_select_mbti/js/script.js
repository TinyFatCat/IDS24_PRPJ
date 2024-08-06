//I,E카드 정보 불러오기
let exp_i = document.querySelectorAll('#mbti_i');
let exp_i_small = document.getElementById('cards-i');
let exp_e = document.querySelectorAll('#mbti_e');
let exp_e_small = document.getElementById('cards-e');

//I 카드를 누를 때 카드 펼침
exp_i.forEach((each) => {
  each.onclick = () => {
    if (exp_i_small.style.display == 'none') {
      exp_i_small.style.display = 'grid';
      exp_e_small.style.display = 'none';
    }
  };
});

//E 카드를 누를 때 카드 펼침
exp_e.forEach((each) => {
  each.onclick = () => {
    if (exp_e_small.style.display == 'none') {
      exp_e_small.style.display = 'grid';
      exp_i_small.style.display = 'none';
    }
  };
});

//내부 mbti들을 선택할 때 진행버튼 제어
document.addEventListener('DOMContentLoaded', function () {
  let wrappers = document.querySelectorAll('.wrapper');

  wrappers.forEach((wrapper) => {
    let cards = wrapper.querySelectorAll('.card__small');
    cards.forEach((card) => {
      card.addEventListener('click', function () {
        let selectedCard = wrapper.querySelector('.card__small.selected');

        //클릭된 카드를 토글 선택
        card.classList.toggle('selected');
        //이미 선택된 카드가 있는지 확인하고 선택을 해제
        if (selectedCard && selectedCard !== card) {
          selectedCard.classList.remove('selected');
          //클릭한 카드 내부 글자;정보를 가져오기
          window.localStorage.setItem('mbti', '1');
        }
        //결정하기 버튼 제어
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
