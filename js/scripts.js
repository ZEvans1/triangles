var add = function(num1, num2) {
  return num1 + num2;
};


$(document).ready(function() {
  $("form#dimensions").submit(function() {
    event.preventDefault();
    var sidea = parseInt($("#a").val());
    var sideb = parseInt($("#b").val());
    var sidec = parseInt($("#c").val());
    if ((sidea === sideb) && (sidea === sidec)) {
      var name = "an equilateral";
      $(".result").show();
      $("#final").text(name);
    } else if ((add(sidea,sideb) <= sidec) || (add(sidea,sidec) <= sideb) || (add(sideb,sidec) <= sidea)) {
      var name ="NOT a";
      $(".result").show();
      $("#final").text(name);
    } else if ((sidea === sideb) || (sidea === sidec) || (sideb === sidec)) {
      var name = "an isosceles";
      $(".result").show();
      $("#final").text(name);
    } else if ((sidea !== sideb) && (sidea !== sidec) && (sideb !== sidec)) {
      var name = "a scalene"
      $(".result").show();
      $("#final").text(name);
    }
  });
});
