(function ($) {
    "use strict";
    /*=================================
      JS Index Here
    ==================================*/
    /*
    01. On Load Function
    02. Preloader
    06. Set Background Image 
    */



  /*---------- 06. Set Background Image ----------*/
  if ($("[data-bg-src]").length > 0) {
    $("[data-bg-src]").each(function () {
        var src = $(this).attr("data-bg-src");
        $(this).css("background-image", "url(" + src + ")");
        $(this).removeAttr("data-bg-src").addClass("background-image");
    });
}









    
})(jQuery);



