const answers = [ 
    'サモエド', 
    'ポメラニアン', 
    'ビーグル', 
    'シェルティ'
    ];
    
const correct = 'ビーグル';

const $button = document.getElementsByTagName('button');

  const setupQuiz = () => {
    let buttonIndex = 0;
    let buttonLength = $button.length;
　  while(buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();

//正誤判定
$button[0].addEventListener('click', (e) => {
    if(correct === e.target.textContent){
        window.alert('正解!');
    } else {
        window.alert('不正解!');
    }
});
$button[1].addEventListener('click', (e) => {
    if(correct === e.target.textContent){
        window.alert('正解!');
    } else {
        window.alert('不正解!');
    }
});
$button[2].addEventListener('click', (e) => {
    if(correct === e.target.textContent){
        window.alert('正解!');
    } else {
        window.alert('不正解!');
    }
});
$button[3].addEventListener('click', (e) => {
    if(correct === e.target.textContent){
        window.alert('正解!');
    } else {
        window.alert('不正解!');
    }
});
