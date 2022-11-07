$(document).ready(function () {
    $('.text').on('click',function() {
        $('label').css('margin-top','31px');
    })
    $('.delete').on('click',function() {
        $('.text').val('');
    })
});