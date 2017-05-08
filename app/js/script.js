$(document).on('click', '.plus', function () {
    event.preventDefault();
    var count = $('.counter, .counter').find('.number'),
        val = parseInt($('.counter').find('.number').val());
    if (val == 999) {
        return false;
    } else {
        count.val(val + 1);
        $('.js-single-addtocart').attr('data-quantity', count.val());
        $('.js-single-favorites').attr('data-quantity', count.val());
    }
    return false;
});

$(document).on('click', '.minus', function () {
    event.preventDefault();
    var count = $('.counter').find('.number');
    var counter = parseInt(count.val()) - 1;
    counter = counter < 1 ? 1 : counter;
    count.val(counter);
    count.change();
    $('.js-single-addtocart').attr('data-quantity', counter);
    $('.js-single-favorites').attr('data-quantity', counter);
    return false;
});
$(document).on('click', '.plus', function () {
    event.preventDefault();
    var count = $('.counter1, .counter1').find('.number'),
        val = parseInt($('.counter1').find('.number').val());
    if (val == 999) {
        return false;
    } else {
        count.val(val + 1);
        $('.js-single-addtocart').attr('data-quantity', count.val());
        $('.js-single-favorites').attr('data-quantity', count.val());
    }
    return false;
});

$(document).on('click', '.minus', function () {
    event.preventDefault();
    var count = $('.counter1').find('.number');
    var counter = parseInt(count.val()) - 1;
    counter = counter < 1 ? 1 : counter;
    count.val(counter);
    count.change();
    $('.js-single-addtocart').attr('data-quantity', counter);
    $('.js-single-favorites').attr('data-quantity', counter);
    return false;
});

$(document).ready(function () {

    /*header mobile menu*/
    var pull = $('.menu-link'),//блок с кнопкой мобильного меню
        menu = $('.header__menu'),//главное меню
        button = pull.find('span');//кнопка показать/скрыть
    menuHeight = menu.height();

    $(pull).on('click', function (e) {//при клике на мобильное меню
        e.preventDefault();//убираем свойство ссылки по умолчанию
        if (button.hasClass('show')) {//при наличии у кнопки активного класса
            button.removeClass('show');//убираем данный класс
            menu.slideUp('fast');//скрываем меню
        } else {//при отсутсвии активного класса
            button.addClass('show');//добовляем его кнопке
            menu.slideDown('fast');//показываем меню
        }
    });
    /*close header mobile menu*/
    //search

});
$(document).ready(function () {
    var link =$('.menu-link');
    var link_active = $('.menu-link_active');

    link.click(function () {
        link.toggleClass('menu-link_active');
    })
});
