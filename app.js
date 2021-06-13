var pics_src = new Array(
    "img/beegle.jpg",
    "img/shiba.jpg",
    "img/spitz.jpg",
    "img/bichonfrize.jpg",
    "img/borderkoli.jpg",
    "img/reon.jpg",
    "img/borzoi.jpg"
    );
            var num = 0;
 
            function slideshow(){
                if (num == 6) {
                    num = 0;
                }
                else {
                    num ++;
                }
                document.getElementById("mypic").src=pics_src[num];
            }

const quiz = [
    {
    answers: [
        'サモエド', 
        'ポメラニアン', 
        'ビーグル', 
        'シェルティ'
        ],
    correct: 'ビーグル'
    },
    {
    answers: [
        '柴犬',
        'チワワ',
        'アラスカンマラミュート',
        'グレートデーン',
        ],
    correct: '柴犬'
    }, {
    answers: [
        'ワイマラナー',
        'ブルテリア',
        'ジャーマンピンシャー',
        'スピッツ',
        ],
    correct: 'スピッツ'
    },{
    answers: [
        'ビションフリーゼ',
        'マルチーズ',
        'トイプードル',
        'チワワ',
        ],
    correct: 'ビションフリーゼ'
    },{
    answers: [
        'セントバーナード',
        'ボーダーコリー',
        'バーニーズマウンテンドッグ',
        'ダルメシアン',
        ],
    correct: 'ボーダーコリー'
    },{
    answers: [
        'グレートハウンド',
        'ドーベルマン',
        'ジャーマンシェパード',
        'レオンベルガー',
        ],
    correct: 'レオンベルガー'
    },{
    answers: [
        'サルーキ',
        'グレートピレネーズ',
        'ボルゾイ',
        'ウェルシュコーギー',
        ],
    correct: 'ボルゾイ'
    }
    ];
    
const quizLength = quiz.length;
let quizIndex = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

  const setupQuiz = () => {
    let buttonIndex = 0;
　  while(buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解!');
    } else {
        window.alert('不正解!');
    }
      quizIndex++;
      if(quizIndex < quizLength){
        setupQuiz();
    } else {
        window.alert('終了!');
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
