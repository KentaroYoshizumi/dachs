const answers = [ 
    'サモエド', 
    'ポメラニアン', 
    'ビーグル', 
    'シェルティ'
    ];
    
const correct = 'ビーグル';

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

  const setupQuiz = () => {
    let buttonIndex = 0;
　  while(buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();

const clickHandler = (e) => {
    if(correct === e.target.textContent){
        window.alert('正解!');
    } else {
        window.alert('不正解!');
    }
};

//正誤判定
let handlerIndex = 0;
while(handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}
