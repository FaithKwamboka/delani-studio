$(document).ready(function(){
    $(".image-1").click(function(){
      $(".image-1").hide(1000);
      $(".work-1").toggle(1000);
      $(".work-1").show(1000);
    })
    $(".work-1").click(function(){
      $(".work-1").hide(1000);
      $(".image-1").toggle(1000);
      $(".image-1").show(1000);
    });

    $(".image-2").click(function(){
        $(".image-2").hide(1000);
        $(".work-2").toggle(1000);
        $(".work-2").show(1000);
      })
      $(".work-2").click(function(){
        $(".work-2").hide(1000);
        $(".image-2").toggle(1000);
        $(".image-2").show(1000);
      });

      $(".image-3").click(function(){
        $(".image-3").hide(1000);
        $(".work-3").toggle(1000);
        $(".work-3").show(1000);
      })
      $(".work-3").click(function(){
        $(".work-3").hide(1000);
        $(".image-3").toggle(1000);
        $(".image-3").show(1000);
      });

  });