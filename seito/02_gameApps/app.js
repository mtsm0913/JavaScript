const quiz = [
  {
    question: 'ゲーム市場、最も売れたゲーム機は次の内どれ？',
    answers: [
      'スーパーファミコン',
      'プレイステーション2',
      'ニンテンドースイッチ',
      'ニンテンドーDS'
    ],
    correct: 'ニンテンドーDS'
  },
  {
    question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
    answers: [
      'MOTHERS2',
      'スーパーマリオブラザース3',
      'スーパードンキーコング',
      '星のカービィ'
    ],
    correct: 'MOTHERS2'
  },
  {
    question: 'ファイナルファンタージーⅣの主人公の名前は？',
    answers: [
      'フリオニール',
      'クラウド',
      'ティーダ',
      'セシル',
    ],
    correct: 'セシル'
  }
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義
const setQuestion = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setQuestion();

const clickHandler = (e) => {
  if (e.target.textContent === quiz[quizIndex].correct) {
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }
  quizIndex++;
  if (quizIndex < quizLength) {
    setQuestion();
  } else {
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
  }
};
// ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
