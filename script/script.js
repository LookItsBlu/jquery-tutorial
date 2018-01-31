$('document').ready(function(){
    $('.error').hide()

    $('.account').on('submit', function(e){
        e.preventDefault();
        var isEmpty = false;
        for(var i=0; i<$('.account input').length; i++) {
            $('.account input').eq(i).val() == '' ? isEmpty = true : isEmpty = false;
        }

        isEmpty ? $('.error').show() : $('.error').hide();
    });
});
