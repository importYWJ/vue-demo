// 内联方式，少用
// import 'css-loader!../css/style.css'
import '../css/style.css';
import '../css/title.less';
import "../css/image.css";
import zznh from '../img/zznh.png'
import '../font/iconfont.css'


const divEl = document.createElement('div');
divEl.className = 'title';
divEl.innerHTML = 'you are the best';
document.body.appendChild(divEl);

// 设置背景图片（1）
const bgdivEl = document.createElement('div');
bgdivEl.className = 'image-bg';
document.body.appendChild(bgdivEl)

// 设置背景图片（2）
const imgEl = document.createElement('img');
// imgEl.src = '../img/zznh.png';
imgEl.src = zznh;
document.body.appendChild(imgEl);

// i元素
 const iEl = document.createElement('i');
 iEl.className = 'iconfont icon-ashbin';

 document.body.appendChild(iEl);
