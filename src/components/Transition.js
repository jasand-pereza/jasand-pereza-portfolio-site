
const Transition  = (inout = 'out') => {
    if(inout == 'out') {
        $('body').prepend('<div class="overlay-transition trans-active"></div>');
        setTimeout(() => {
            setTimeout(() => {
                $('.overlay-transition').removeClass('trans-active');

                setTimeout(() => {
                    $('.overlay-transition').remove();
                }, 2000);
            }, 500);
        }, 10); 
    }

    if(inout == 'in') {
        $('body').prepend('<div class="overlay-transition"></div>');
        setTimeout(() => {
            $('.overlay-transition').addClass('trans-active');
        }, 500); 
    }
   
};

export default Transition;