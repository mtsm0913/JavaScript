// 変数
let unko = 'Hello World!';
// unko = 'Hello World2!!';



// 定数
const bigUnko = 'He..Hell...Hello World!';



// 配列
let inoki = ['いーち', 'にーい', 'さーん', 'ダーー！！'];



// ループ文
// let index = 0;
// while (index < inoki.length) {
//   console.log(inoki[index]);
//   index++;
// }

// console.log(inoki[3]);

// if / else
// if (inoki.length > 5) {
//   console.log('ボンバイエ！');
// } else {
//   console.log('ボンバ...！');
// }



// 関数
const test = (arg) => {
  if (inoki.length > arg) {
    console.log('ボンバイエ！');
  } else {
    console.log('ボンバ...！');
  }
};

// test(4);



// オブジェクト
const unko2 = {
  color: 'pink',
  size: 'large',
  purfume: 'mint',
  goToilet: () => {
    console.log('Hello world!');
  }
};

// console.log(unko2);
// console.log(unko2.color);
// console.log(unko2.goToilet());
// console.log(unko2);



// 特殊なオブジェクト
// console.log(window.innerHeight);

// window.alert('Hello');

// console.log(document);

// console.log(document.getElementsByTagName('button')[0]);



// イベント
document.getElementsByTagName('button')[0].addEventListener('click', () => {
  window.alert('Hello world!');
});
