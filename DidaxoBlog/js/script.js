$(document).ready(function(){
    $('#hamburger').click(function(){
        $('#mainNav ul').stop(true, true).slideToggle();
        $('#mainNav #hamburger i').toggleClass('fa-bars fa-times');
    });
});