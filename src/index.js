import './styles/main.scss';
import imgWebpack from './images/img-webpack.png';

const arrow = () => {
  const img = document.createElement('img');
  img.src = imgWebpack;
  document.querySelector('body').appendChild(img);
};

arrow();
