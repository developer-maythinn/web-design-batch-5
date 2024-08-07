// $(document).ready(function () {
//   $("button").click(function () {
//     $("p").hide();
//   });
// });

// $(document).ready(function () {
//   $("#btn").mouseenter(function () {
//     // $("p").css("background", "red");
//     $("p").css({
//       backgroundColor: "green",
//       color: "white",
//     });
//   });
// });

$(document).ready(function () {
  $("button").on({
    click: function () {
      $("p").text("Hello");
      $(this).css({ backgroundColor: "red" });
    },
    mouseenter: function () {
      $(this).css({ backgroundColor: "yellow" });
    },
    mouseleave: function () {
      $(this).css({ backgroundColor: "blue" });
    },
  });
});
