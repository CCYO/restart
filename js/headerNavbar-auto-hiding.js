$(function() {
    var vertical_scroll = $(document).scrollTop();
    $(window).scroll(function() {
    var rolling_action = $(document).scrollTop();
        if (rolling_action > 200) {
            $('.fixed-top').addClass('is-hidden')
        }
        if (rolling_action > vertical_scroll) {
            $('.fixed-top').removeClass('is-show')
        } else {
            $('.fixed-top').removeClass('is-hidden').addClass('is-show')
        }
        if (rolling_action < 200) {
            $('.fixed-top').removeClass('is-show')
        }
    vertical_scroll = $(document).scrollTop();
    })
});
