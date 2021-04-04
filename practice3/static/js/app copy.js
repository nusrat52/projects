$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 10,
    loop: true,
    // autoWidth:true,
    // autoplay:true,
    autoHeight: false,
    rewind: false,
    nav: true,

    items: 1,
  });
  if ($(window).width() < 990) {
    $("#daxil").text("daxil ol");
  } else if ($(window).width() > 990) {
    $("#daxil").text("Internet bankciliq");
  }

  check_open = false;

  $(".navbar-toggler.border-0").on("click", function () {
    if (check_open == false) {
      check_open = true;
     
    } else if (check_open == true) {
      check_open = false;
     
    }
  });

  $(window).on("resize mouseout", function () {
    if ($(window).width() < 990) {
      $("#daxil").text("daxil ol");
    } else if ($(window).width() > 990) {
      $("#daxil").text("Internet bankciliq");
      if (check_open == true) {
        
      }
    }
    
  });

  $("#navbarToggleExternalContent>div").css("height", $(window).height());

  $(window).on("resize", function () {
    $("#navbarToggleExternalContent>div").css("height", $(window).height());
  });

  $(".select_nu").on("change", function () {
    if ($(".select_nu").val() == 1) {
      $("#nagd").addClass("d-none");
      $("#nagdsiz").addClass("d-none");
      $("#kalk").addClass("d-none");
      $("#nagd").removeClass("d-none");
    } else if ($(".select_nu").val() == 2) {
      $("#nagd").addClass("d-none");
      $("#nagdsiz").addClass("d-none");
      $("#kalk").addClass("d-none");
      $("#nagdsiz").removeClass("d-none");
    } else if ($(".select_nu").val() == 3) {
      $("#nagd").addClass("d-none");
      $("#nagdsiz").addClass("d-none");
      $("#kalk").addClass("d-none");
      $("#kalk").removeClass("d-none");
    }
  });

  $("#navvv").on("click", function () {
    if ($(window).width() > 990) {
     
      $(".rowlar").each(function () {
        $(this).toggleClass("d-none");
      });
      $(".knlar2").each(function () {
        $(this).toggleClass("d-none");
      });
    }
    $(".knlar").each(function () {
      $(this).toggleClass("d-none");
    });
  });

  function birinci(event) {
    stopt = $("#stopt").val();
    scopt = $("#scopt").val();
    if (stopt == "AZN") {
      ilkdeyer = $("#birinput").val();

      if (scopt == "USD") {
        usd2 = $(".reqemler:nth-child(3)").html().split(" ");
        cvb = ilkdeyer / parseFloat(usd2[0]);
        $("#ikiinput").val(cvb.toFixed(4));
      } else if (scopt == "RUB") {
        rub2 = $(".reqemler2:nth-child(3)").html().split(" ");
        cvb = ilkdeyer / parseFloat(rub2[0]);
        $("#ikiinput").val(cvb.toFixed(4));
      } else if (scopt == "GBP") {
        gbp2 = $(".reqemler3:nth-child(3)").html().split(" ");
        cvb = ilkdeyer / parseFloat(gbp2[0]);
        $("#ikiinput").val(cvb.toFixed(4));
      } else if (scopt == "EUR") {
        eur2 = $(".reqemler1:nth-child(3)").html().split(" ");
        cvb = ilkdeyer / parseFloat(eur2[0]);
        $("#ikiinput").val(cvb.toFixed(4));
      }
    } else if (stopt == "EUR") {
      ilkdeyer = $("#birinput").val();

      if (scopt == "USD") {
        usd2 = $(".reqemler:nth-child(3)").html().split(" ");
        eur1 = $(".reqemler1:nth-child(2)").html().split(" ");
        cvb = (ilkdeyer * parseFloat(eur1[0])) / parseFloat(usd2[0]);
        $("#ikiinput").val(cvb.toFixed(4));
      } else if (scopt == "RUB") {
        rub2 = $(".reqemler2:nth-child(3)").html().split(" ");
        eur1 = $(".reqemler1:nth-child(2)").html().split(" ");
        cvb = (ilkdeyer * parseFloat(eur1[0])) / parseFloat(rub2[0]);
        $("#ikiinput").val(cvb.toFixed(4));
      } else if (scopt == "GBP") {
        gbp2 = $(".reqemler3:nth-child(3)").html().split(" ");
        eur1 = $(".reqemler1:nth-child(2)").html().split(" ");
        cvb = (ilkdeyer * parseFloat(eur1[0])) / parseFloat(gbp2[0]);
        $("#ikiinput").val(cvb.toFixed(4));
      } else if (scopt == "AZN") {
        eur1 = $(".reqemler1:nth-child(2)").html().split(" ");
        cvb = ilkdeyer * parseFloat(eur1[0]);
        $("#ikiinput").val(cvb.toFixed(4));
      }
    } else if (stopt == "USD") {
      ilkdeyer = $("#birinput").val();

      if (scopt == "EUR") {
        eur2 = $(".reqemler1:nth-child(3)").html().split(" ");
        usd1 = $(".reqemler:nth-child(2)").html().split(" ");
        cvb = (ilkdeyer * parseFloat(usd1[0])) / parseFloat(eur2[0]);
        $("#ikiinput").val(cvb.toFixed(4));
      } else if (scopt == "RUB") {
        rub2 = $(".reqemler2:nth-child(3)").html().split(" ");
        usd1 = $(".reqemler:nth-child(2)").html().split(" ");
        cvb = (ilkdeyer * parseFloat(usd1[0])) / parseFloat(rub2[0]);
        $("#ikiinput").val(cvb.toFixed(4));
      } else if (scopt == "GBP") {
        gbp2 = $(".reqemler3:nth-child(3)").html().split(" ");
        usd1 = $(".reqemler:nth-child(2)").html().split(" ");
        cvb = (ilkdeyer * parseFloat(usd1[0])) / parseFloat(gbp2[0]);
        $("#ikiinput").val(cvb.toFixed(4));
      } else if (scopt == "AZN") {
        usd1 = $(".reqemler:nth-child(2)").html().split(" ");
        cvb = ilkdeyer * parseFloat(usd1[0]);
        $("#ikiinput").val(cvb.toFixed(4));
      }
    } else if (stopt == "GBP") {
      ilkdeyer = $("#birinput").val();

      if (scopt == "EUR") {
        eur2 = $(".reqemler1:nth-child(3)").html().split(" ");
        gbp1 = $(".reqemler3:nth-child(2)").html().split(" ");
        cvb = (ilkdeyer * parseFloat(gbp1[0])) / parseFloat(eur2[0]);
        $("#ikiinput").val(cvb.toFixed(4));
      } else if (scopt == "RUB") {
        rub2 = $(".reqemler2:nth-child(3)").html().split(" ");
        gbp1 = $(".reqemler3:nth-child(2)").html().split(" ");
        cvb = (ilkdeyer * parseFloat(gbp1[0])) / parseFloat(rub2[0]);
        $("#ikiinput").val(cvb.toFixed(4));
      } else if (scopt == "USD") {
        usd2 = $(".reqemler:nth-child(3)").html().split(" ");
        gbp1 = $(".reqemler3:nth-child(2)").html().split(" ");
        cvb = (ilkdeyer * parseFloat(gbp1[0])) / parseFloat(usd2[0]);
        $("#ikiinput").val(cvb.toFixed(4));
      } else if (scopt == "AZN") {
        gbp1 = $(".reqemler3:nth-child(2)").html().split(" ");
        cvb = ilkdeyer * parseFloat(gbp1[0]);
        $("#ikiinput").val(cvb.toFixed(4));
      }
    } else if (stopt == "RUB") {
      ilkdeyer = $("#birinput").val();

      if (scopt == "EUR") {
        eur2 = $(".reqemler1:nth-child(3)").html().split(" ");
        rub1 = $(".reqemler2:nth-child(2)").html().split(" ");
        cvb = (ilkdeyer * parseFloat(rub1[0])) / parseFloat(eur2[0]);
        $("#ikiinput").val(cvb.toFixed(4));
      } else if (scopt == "GBP") {
        gbp2 = $(".reqemler3:nth-child(3)").html().split(" ");
        rub1 = $(".reqemler2:nth-child(2)").html().split(" ");
        cvb = (ilkdeyer * parseFloat(rub1[0])) / parseFloat(gbp2[0]);
        $("#ikiinput").val(cvb.toFixed(4));
      } else if (scopt == "USD") {
        usd2 = $(".reqemler:nth-child(3)").html().split(" ");
        rub1 = $(".reqemler2:nth-child(2)").html().split(" ");
        cvb = (ilkdeyer * parseFloat(rub1[0])) / parseFloat(usd2[0]);
        $("#ikiinput").val(cvb.toFixed(4));
      } else if (scopt == "AZN") {
        rub1 = $(".reqemler2:nth-child(2)").html().split(" ");
        cvb = ilkdeyer * parseFloat(rub1[0]);
        $("#ikiinput").val(cvb.toFixed(4));
      }
    }
  }

  function ikinci(event) {
    stopt = $("#stopt").val();
    scopt = $("#scopt").val();
    if (scopt == "AZN") {
      ilkdeyer = $("#ikiinput").val();

      if (stopt == "USD") {
        usd1 = $(".reqemler:nth-child(2)").html().split(" ");
        cvb = ilkdeyer / parseFloat(usd1[0]);
        $("#birinput").val(cvb.toFixed(4));
      } else if (stopt == "RUB") {
        rub1 = $(".reqemler2:nth-child(2)").html().split(" ");
        cvb = ilkdeyer / parseFloat(rub1[0]);
        $("#birinput").val(cvb.toFixed(4));
      } else if (stopt == "GBP") {
        gbp1 = $(".reqemler3:nth-child(2)").html().split(" ");
        cvb = ilkdeyer / parseFloat(gbp1[0]);
        $("#birinput").val(cvb.toFixed(4));
      } else if (stopt == "EUR") {
        eur1 = $(".reqemler1:nth-child(2)").html().split(" ");
        cvb = ilkdeyer / parseFloat(eur1[0]);
        $("#birinput").val(cvb.toFixed(4));
      }
    } else if (scopt == "EUR") {
      ilkdeyer = $("#ikiinput").val();

      if (stopt == "USD") {
        usd1 = $(".reqemler:nth-child(2)").html().split(" ");
        eur2 = $(".reqemler1:nth-child(3)").html().split(" ");
        cvb = (ilkdeyer * parseFloat(eur2[0])) / parseFloat(usd1[0]);
        $("#birinput").val(cvb.toFixed(4));
      } else if (stopt == "RUB") {
        rub1 = $(".reqemler2:nth-child(2)").html().split(" ");
        eur2 = $(".reqemler1:nth-child(3)").html().split(" ");
        cvb = (ilkdeyer * parseFloat(eur2[0])) / parseFloat(rub1[0]);
        $("#birinput").val(cvb.toFixed(4));
      } else if (stopt == "GBP") {
        gbp1 = $(".reqemler3:nth-child(2)").html().split(" ");
        eur2 = $(".reqemler1:nth-child(3)").html().split(" ");
        cvb = (ilkdeyer * parseFloat(eur2[0])) / parseFloat(gbp1[0]);
        $("#birinput").val(cvb.toFixed(4));
      } else if (stopt == "AZN") {
        eur2 = $(".reqemler1:nth-child(3)").html().split(" ");
        cvb = ilkdeyer * parseFloat(eur2[0]);
        $("#birinput").val(cvb.toFixed(4));
      }
    } else if (scopt == "USD") {
      ilkdeyer = $("#ikiinput").val();

      if (stopt == "EUR") {
        eur1 = $(".reqemler1:nth-child(2)").html().split(" ");
        usd2 = $(".reqemler:nth-child(3)").html().split(" ");
        cvb = (ilkdeyer * parseFloat(usd2[0])) / parseFloat(eur1[0]);
        $("#birinput").val(cvb.toFixed(4));
      } else if (stopt == "RUB") {
        rub1 = $(".reqemler2:nth-child(2)").html().split(" ");
        usd2 = $(".reqemler:nth-child(3)").html().split(" ");
        cvb = (ilkdeyer * parseFloat(usd2[0])) / parseFloat(rub1[0]);
        $("#birinput").val(cvb.toFixed(4));
      } else if (stopt == "GBP") {
        gbp1 = $(".reqemler3:nth-child(2)").html().split(" ");
        usd2 = $(".reqemler:nth-child(3)").html().split(" ");
        cvb = (ilkdeyer * parseFloat(usd2[0])) / parseFloat(gbp1[0]);
        $("#birinput").val(cvb.toFixed(4));
      } else if (stopt == "AZN") {
        usd2 = $(".reqemler:nth-child(3)").html().split(" ");
        cvb = ilkdeyer * parseFloat(usd2[0]);
        $("#birinput").val(cvb.toFixed(4));
      }
    } else if (scopt == "GBP") {
      ilkdeyer = $("#ikiinput").val();

      if (stopt == "EUR") {
        eur1 = $(".reqemler1:nth-child(2)").html().split(" ");
        gbp2 = $(".reqemler3:nth-child(3)").html().split(" ");
        cvb = (ilkdeyer * parseFloat(gbp2[0])) / parseFloat(eur1[0]);
        $("#birinput").val(cvb.toFixed(4));
      } else if (stopt == "RUB") {
        rub1 = $(".reqemler2:nth-child(2)").html().split(" ");
        gbp2 = $(".reqemler3:nth-child(3)").html().split(" ");
        cvb = (ilkdeyer * parseFloat(gbp2[0])) / parseFloat(rub1[0]);
        $("#birinput").val(cvb.toFixed(4));
      } else if (stopt == "USD") {
        usd1 = $(".reqemler:nth-child(2)").html().split(" ");
        gbp2 = $(".reqemler3:nth-child(3)").html().split(" ");
        cvb = (ilkdeyer * parseFloat(gbp2[0])) / parseFloat(usd1[0]);
        $("#birinput").val(cvb.toFixed(4));
      } else if (stopt == "AZN") {
        gbp2 = $(".reqemler3:nth-child(3)").html().split(" ");
        cvb = ilkdeyer * parseFloat(gbp2[0]);
        $("#birinput").val(cvb.toFixed(4));
      }
    } else if (scopt == "RUB") {
      ilkdeyer = $("#ikiinput").val();

      if (stopt == "EUR") {
        eur1 = $(".reqemler1:nth-child(2)").html().split(" ");
        rub2 = $(".reqemler2:nth-child(3)").html().split(" ");
        cvb = (ilkdeyer * parseFloat(rub2[0])) / parseFloat(eur1[0]);
        $("#birinput").val(cvb.toFixed(4));
      } else if (stopt == "GBP") {
        gbp1 = $(".reqemler3:nth-child(2)").html().split(" ");
        rub2 = $(".reqemler2:nth-child(3)").html().split(" ");
        cvb = (ilkdeyer * parseFloat(rub2[0])) / parseFloat(gbp1[0]);
        $("#birinput").val(cvb.toFixed(4));
      } else if (stopt == "USD") {
        usd1 = $(".reqemler:nth-child(2)").html().split(" ");
        rub2 = $(".reqemler2:nth-child(3)").html().split(" ");
        cvb = (ilkdeyer * parseFloat(rub2[0])) / parseFloat(usd1[0]);
        $("#birinput").val(cvb.toFixed(4));
      } else if (stopt == "AZN") {
        rub2 = $(".reqemler2:nth-child(3)").html().split(" ");
        cvb = ilkdeyer * parseFloat(rub2[0]);
        $("#birinput").val(cvb.toFixed(4));
      }
    }
  }

  $("#birinput").on("keyup change", birinci);

  $("#stopt").on("change", function () {
    while ($("#stopt").val() == $("#scopt").val()) {
      ran = Math.round(Math.random() * 5);
      $(`.gbp:nth-child(` + ran + `)`)
        .prop("selected", "selected")
        .change();
    }
    birinci();
  });
  $("#ikiinput").on("keyup change", ikinci);

  $("#scopt").on("change", function () {
    while ($("#stopt").val() == $("#scopt").val()) {
      ran = Math.round(Math.random() * 5);
      $(`.gbp2:nth-child(` + ran + `)`)
        .prop("selected", "selected")
        .change();
    }
    birinci();

    // birinci()
  }); // , birinci
});


