$(document).ready(function(){

    const colors = ['red','#f9ca24','#00ff00'];
    

    function myFunction_set(color) {
        var r = document.querySelector(':root');
        if(color == null)
        {
            color = colors[(new Date().getDate() % 3)];
        }
      r.style.setProperty('--color', color);
    }

    $('.circle').on('click', function(){
        myFunction_set($(this).attr("color"));
    });
    
    $("#dots").on('click', function(){
        $(this).hide();
        $('#more-languages').show();

    });

    $("#exp-box").on('click', function(){
       
        $('#content').addClass("blur");
        $('#experience-popup').addClass("active");
    });

    $("#exp-close-btn").on('click', function(){
       
       $('#content').removeClass("blur");
       $('#experience-popup').removeClass("active");
   });

    $("#awards-box").on('click', function()
    {
        $('#content').addClass("blur");
        $('#awards-popup').addClass("active");
    });

    $("#awards-crs-btn").on('click', function()
    {
        $('#content').removeClass("blur");
        $('#awards-popup').removeClass("active");
    });
    $("#certifications-box").on('click', function()
    {
        $('#content').addClass("blur");
        $('#certifications-popup').addClass("active");
    });

    $("#certifications-crs-btn").on('click', function()
    {
        $('#content').removeClass("blur");
        $('#certifications-popup').removeClass("active");
    });

    
  
   
    
    var r = document.querySelector(':root');
    function myFunction_get() {
      var rs = getComputedStyle(r);
         alert("The value of --yellow is: " + rs.getPropertyValue('--yellow'));
    }
    
   

    var deg = 0;
    var flag = true;
    $("#profileCircle").on('click', function(){
        deg = deg + 180;
        $(this).css("transform", "rotateY("+(deg)+"deg)");
        deg = deg + 180;
        changeTheme();  
        if(!flag)
        {
            $("#profileCircle").attr("src", "./images/profile/profile.jpg");
            flag = true;
        }  
        else{
            $("#profileCircle").attr("src", "./images/profile/shadow.jpg");
            flag = false;
        }       
        $(this).css("transform", "rotateY("+(deg)+"deg)");
    });
    $("#profileCircle").trigger('click');
    function changeTheme(circlular)
    {
        setTimeout(function(){
            loadUnloadCSS();
        }, 500);
    }
    function loadUnloadCSS()
    {
        var tmp = $('head').find('link');

        for(var i in tmp){
           
            if($(tmp[i]).attr('href') == "./css/rectangle-view.css")
            {
                $(tmp[i]).attr("href", "./css/rounded-view.css");
                break;
            }
            else if($(tmp[i]).attr('href') == "./css/rounded-view.css")
            {
                $(tmp[i]).attr("href", "./css/rectangle-view.css");
                break;
            }
        }
    }
    
    function loadGoogleTranslate()
    {
        new google.translate.TranslateElement("translate");
    }
    
    const swiper = new Swiper('.swiper1', {
        autoplay :{
            delay: 3000,
            disableOnInteraction : false,
        },

        loop: true,

        
        pagination: {
            el: '.swiper-pagination',
            clickable : true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });

    const swiper2 = new Swiper('.swiper2', {
        
        autoplay :{
            delay: 300000,
            disableOnInteraction : false,
        },
        loop: true,

    });

    $('.close').click(function() {
        $(".pop-up").fadeOut(300);
    });

    $(".pop-up").on('blur',function(){
        $(this).fadeOut(300);
    });
    myFunction_set();

    function sendEmail()
    {
    
    }
    

});