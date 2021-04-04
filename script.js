$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 900){
            $('.nav').addClass("sticky");
            $('.f').addClass("sticky");
            $('.logo').addClass("sticky");
            $('.active').addClass("sticky");
        }else{
            $('.nav').removeClass("sticky");
            $('.f').removeClass("sticky");
            $('.logo').removeClass("sticky");
            $('.active').removeClass("sticky");
        }
        if(this.scrollY <= 900){
            $('.active').addClass("page");
        }else{
            $('.active').removeClass("page");
        }
        if(this.scrollY >= 900){
            if(this.scrollY <= 1300){
                $('#about').addClass("page");
            }else{
                $('#about').removeClass("page");
            }
        }else{
            $('#about').removeClass("page");
        }
        if(this.scrollY >= 1300){
            if(this.scrollY <= 2780){
                $('#skills').addClass("page");
            }else{
                $('#skills').removeClass("page");
            }
        }else{
            $('#skills').removeClass("page");
        }
        if(this.scrollY >= 2780){
            if(this.scrollY <= 3900){
                $('#projekte').addClass("page");
            }else{
                $('#projekte').removeClass("page");
            }
        }else{
            $('#projekte').removeClass("page");
        }
    });
    

    var typed = new Typed(".typing", {
        strings: ["Programmierer", "Künstler", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});