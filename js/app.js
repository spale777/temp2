$(document).ready(function(){
    var mySwiper = new Swiper('.swiper-container',{
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        centeredSlides: true,
        spaceBetween: 0,
        loop: true,
        initialSlide: 1,
        slidesPerView: 'auto',
        loopAdditionalSlides : 4
    });
    var docWidth = $(document).width();
    if (docWidth >= 768){
        var form = $('#searchForm'),
            toggle = $('#formToggle'),
            formInput = $('input[type="search"]', form),
            submit = $('#submit');
        function hideForm(){
            form.toggleClass('active')
            formInput.toggleClass('active');
        }
        function showForm(){
            form.toggleClass('active');
            formInput.focus();
            formInput.toggleClass('active');
        }
        toggle.click(function(){
            if(!form.hasClass('active')){
                showForm();
            } else {
                hideForm();
            }
        });
    }
    $('#toggleDropdown button').click(function(event){
        $('#mobileDropdown').toggleClass('active');
        $(this).toggleClass('active');
    });
});