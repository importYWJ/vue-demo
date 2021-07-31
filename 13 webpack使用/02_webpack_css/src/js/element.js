// 内联方式，少用
// import 'css-loader!../css/style.css'
import '../css/style.css';
import '../css/title.less';

const divEl = document.createElement('div');
divEl.className = 'title';
divEl.innerHTML = 'you are the best';
document.body.appendChild(divEl);


