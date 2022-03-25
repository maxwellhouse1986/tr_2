
'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelectorAll('.promo__adv img');

    img.forEach(item => {
        item.remove();
    });

    document.querySelector('.promo__genre').textContent = 'драма';

    const bg = document.querySelector('.promo__bg');
        bg.style.backgroundImage = 'url("img/bg.jpg")';

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    const movieList = document.querySelector('.promo__interactive-list'),
        inp = document.querySelector('.promo__interactive .add input[type="text"]'),
        btn = document.querySelector('form.add'),
        chk = document.querySelector('input[type="checkbox"]');
        
    function createMovieList(films, list) {
        list.innerHTML = '';
        films.sort();
        films.forEach((film, i) => {
            list.innerHTML += `<li class="promo__interactive-item">${i + 1}. ${film}
            <div class="delete"></div>
            </li>`;
        });
        document.querySelectorAll('.delete').forEach((basket, i) => {
            basket.addEventListener('click', () => {
                basket.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, list);
            });
        });
    }

    btn.addEventListener('submit', event => {
        event.preventDefault();
        let val = inp.value,
            check = chk.checked;
        if (val) {
            if (val.length > 21) {
                val = `${val.substring(0, 21)}...`;
            }
            if (check) {
                console.log('"Добавляем любимый фильм"');
            }
            movieDB.movies.push(val);
            createMovieList(movieDB.movies, movieList);
        }      
        event.target.reset();
    });

    createMovieList(movieDB.movies, movieList);
});
