$(document).ready(function () {
  $(".image-1").click(function () {
    $(".image-1").hide(1000);
    $(".work-1").toggle(1000);
    $(".work-1").show(1000);
  });
  $(".work-1").click(function () {
    $(".work-1").hide(1000);
    $(".image-1").toggle(1000);
    $(".image-1").show(1000);
  });

  $(".image-2").click(function () {
    $(".image-2").hide(1000);
    $(".work-2").toggle(1000);
    $(".work-2").show(1000);
  });
  $(".work-2").click(function () {
    $(".work-2").hide(1000);
    $(".image-2").toggle(1000);
    $(".image-2").show(1000);
  });

  $(".image-3").click(function () {
    $(".image-3").hide(1000);
    $(".work-3").toggle(1000);
    $(".work-3").show(1000);
  });
  $(".work-3").click(function () {
    $(".work-3").hide(1000);
    $(".image-3").toggle(1000);
    $(".image-3").show(1000);
  });

  // METHOD 1
  // $("#port").hover(
  //   function () {
  //     $(".text").css("display", "none").slideDown(1000);
  //   },
  //   function () {
  //     $(".text").css("display", "block").slideUp(1000);
  //   }
  // );


  // METHOD 2
  $(".pr-1").mouseenter(
    function () {
      $(".text").css("display", "none").slideDown(1000);
    },
    function () {
      $(".text").css("display", "block").slideUp(1000);
    }
  );

  $(".pr-2").hover(
    function () {
      $(".text").css("display", "none").slideDown(1000);
    },
    function () {
      $(".text").css("display", "block").slideUp(1000);
    }
  );

  $(".pr-3").hover(
    function () {
      $(".text").css("display", "none").slideDown(1000);
    },
    function () {
      $(".text").css("display", "block").slideUp(1000);
    }
  );

  $(".pr-4").hover(
    function () {
      $(".text").css("display", "none").slideDown(1000);
    },
    function () {
      $(".text").css("display", "block").slideUp(1000);
    }
  );

  $(".pr-5").hover(
    function () {
      $(".text").css("display", "none").slideDown(1000);
    },
    function () {
      $(".text").css("display", "block").slideUp(1000);
    }
  );

  $(".pr-6").hover(
    function () {
      $(".text").css("display", "none").slideDown(1000);
    },
    function () {
      $(".text").css("display", "block").slideUp(1000);
    }
  );

  $(".pr-7").hover(
    function () {
      $(".text").css("display", "none").slideDown(1000);
    },
    function () {
      $(".text").css("display", "block").slideUp(1000);
    }
  );

  $(".pr-8").hover(
    function () {
      $(".text").css("display", "none").slideDown(1000);
    },
    function () {
      $(".text").css("display", "block").slideUp(1000);
    }
  );

  $("form#form-submit").on("submit", function (event) {
    event.preventDefault();
    let name = $("input:first").val();
    let email = $("input#email").val();
    let message = $("textarea#message").val();

    if ($("input:first").val() && $("input#email").val()) {
      alert(
        "Hey " +
          name +
          ", Thank you for your message. Our team will get back to you soon"
      );
    } else {
      alert("Please provide your correct name and email!");
    }
    event.preventDefault();
  });
});
