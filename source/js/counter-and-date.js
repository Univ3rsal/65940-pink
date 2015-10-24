$(document).ready(function() {

// Блок с расчетом даты возващения

    var timeCurrent = $('#date-out-field');
    var timeBack = $('#date-back-field');
    var counter = $('.field-input--counter-day');

    function time(){
        timeCurrent.val(moment().locale('ru').format("D MMMM YYYY"));
        timeBack.val(moment().locale('ru').add(parseInt(counter.val()), 'd').format("D MMMM YYYY"));
    };

    time();

// Блок со счетчиком дней

    $('.field-input--counter-minus').click(function () {
        var $input = $(this).parent().find('.field-input--counter-day');
        var count = parseInt($input.val()) - 1 + " " + "дней";
        if (count == "1 дней") {
            count = count.replace("дней", "день");
        } else if (count == "2 дней"){
            count = count.replace("дней", "дня"); 
        } else if (count == "3 дней"){
            count = count.replace("дней", "дня");
        } else if (count == "4 дней"){
            count = count.replace("дней", "дня");
        }
        count = count == "0 дней" ? input.val() == 1 : count;
        $input.val(count);
        time();
        $input.change();
        return false;
    });

    $('.field-input--counter-plus').click(function () {
        var $input = $(this).parent().find('.field-input--counter-day');
        var count = (parseInt($input.val()) + 1 + " " + "дней");
        if (count == "1 дней") {
            count = count.replace("дней", "день");
        } else if (count == "2 дней"){
            count = count.replace("дней", "дня"); 
        } else if (count == "3 дней"){
            count = count.replace("дней", "дня");
        } else if (count == "4 дней"){
            count = count.replace("дней", "дня");
        }
        $input.val(count);
        time();
        $input.change();
        return false;
    });

// Блок со счетчиком попутчиков    

     $('.field-input--counter-minus').click(function () {
        var $input = $(this).parent().find('.field-input--counter-human');
        var count = parseInt($input.val()) - 1 + " " + "чел";
        count = parseInt(count);
        count = count < 0 ? 0 : count;
        count = count + " " + "чел";
        $input.val(count);
        $input.change();
        return false;
    });

    $('.field-input--counter-plus').click(function () {
        var $input = $(this).parent().find('.field-input--counter-human');
        $input.val(parseInt($input.val()) + 1 + " " + "чел");
        $input.change();
        return false;
    });
});