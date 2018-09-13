"use strict";

function img() {
  var imageWorks = document.querySelector('.works'),
      //блок портфолио
  link_image = imageWorks.getElementsByTagName('a'),
      //ссылки в блоке портфолио
  image = imageWorks.getElementsByTagName('img'),
      //все картинки
  divImage = document.createElement('div'); //создаем новый блок

  divImage.classList.add('div-image'); //вешаем класс в див

  document.body.appendChild(divImage); //выводим див
  //убираем лишний элемент - лупу

  for (var i = 0; i < image.length; i++) {
    if (image[i].classList.contains('lupa') == true) {
      image[i].classList.add('image-gallery');
      image[i].remove();
    } else {
      console.log('None');
    }
  }

  var _loop = function _loop(_i) {
    image[_i].addEventListener('click', function (event) {
      event.preventDefault('link_image'); //убираем дефолтное действие
      //работаем с адресом картинки

      var index = _i + 1;
      var imageNew = image[_i].src = 'img/our_works/big_img/' + index + '.png';
      image.src = 'img/our_works/' + index + '.png';
      var imgQwe = divImage.getElementsByTagName('img');
      divImage.innerHTML = '<div class="bigImg">' + '<img src="' + imageNew + '">' + '</div>'; //запрещаем прокрутку

      document.onmousewheel = document.onwheel = function () {
        return false;
      };

      document.addEventListener("MozMousePixelScroll", function () {
        return false;
      }, false);

      document.onkeydown = function (e) {
        if (e.keyCode >= 33 && e.keyCode <= 40) return false;
      };

      divImage.style.cssText = "position: fixed; \
			    overflow: hidden; \
			    width: 100%; \
			    height: 100%; \
			    background-color: rgba(0, 0, 0, .35); \
			    top: 0; \
			    text-align: center; \
			    padding-bottom: 50px; \
			  ";
      image[_i].style.display = 'none'; //картинка в новом блоке

      divImage.addEventListener('click', function () {
        image[_i].style.display = 'block';
        divImage.style.display = 'none';
        image[_i].src = 'img/our_works/' + index + '.png';

        document.onmousewheel = document.onwheel = function () {
          return true;
        };

        document.addEventListener("MozMousePixelScroll", function () {
          return true;
        }, true);

        document.onkeydown = function (e) {
          if (e.keyCode >= 33 && e.keyCode <= 40) return true;
        };
      });
      event.preventDefault('link_image');
    });
  };

  for (var _i = 0; _i < image.length; _i++) {
    _loop(_i);
  }
}

module.exports = img;
