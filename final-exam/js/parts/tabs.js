let tabs = document.getElementsByClassName('glazing_slider')[0],//список табов
        tab = document.querySelectorAll('.tab'),//сами табы
        tabContent = document.getElementsByClassName('tab_content');//содержание табов

        //скрываем табы
        function hideTabContent (a) {
            for (let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
                tab[i].classList.remove('active');

            }
        }

		//оставляем активным первый таб
        hideTabContent(1);

        //показываем таб
        function ShowTabContent (b) {
            if (tabContent[b].classList.contains('hide')) {
                hideTabContent(0);
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
                tab[b].classList.add('active');

            }
        }


        //событие
        tabs.addEventListener('click', function(event) {
            let target = event.target;
            if(target.matches('.tab')) {
                for (let i = 0; i < tab.length; i++) {
                    if (target == tab[i]) {
                        ShowTabContent(i);
                        break;
                    }
                }
            }

        });


// табы для отделки

let tabsRem = document.getElementsByClassName('decoration_slider')[0],//список табов
    tabOne = document.querySelectorAll('.tabOne'), //сами табы
    tabContentTwo = document.getElementsByClassName('tabContentTwo'); //содержание табов

     function hideTabContentTwo (a) {
            for (let i = a; i < tabContentTwo.length; i++) {
                tabContentTwo[i].classList.remove('show');
                tabContentTwo[i].classList.add('hide');
                tabOne[i].classList.remove('active');

            }
        }

        //оставляем активным первый таб
        hideTabContentTwo(1);

        //показываем таб
        function ShowTabContentTwo (b) {
            if (tabContentTwo[b].classList.contains('hide')) {
                hideTabContentTwo(0);
                tabContentTwo[b].classList.remove('hide');
                tabContentTwo[b].classList.add('show');
                tabOne[b].classList.add('active');

            }
        }

        //событие
        tabsRem.addEventListener('click', function(event) {
            let target = event.target;
            if(target.matches('.tabOne')) {
                for (let i = 0; i < tabOne.length; i++) {
                    if (target == tabOne[i]) {
                        ShowTabContentTwo(i);
                        break;
                    }
                }
            }

        });