$(document).ready(function(){
  $("#sub").click(function(event) {
    event.preventDefault();
    var animal = $("#animalList").val();

    if(animal === "Lion"){
      $(".tiger").hide();
      $(".elephant").hide();
      $(".lion").show();
    }else if(animal === "Tiger"){
      $(".lion").hide();
      $(".elephant").hide();
      $(".tiger").show();
    }else{
      $(".tiger").hide();
      $(".lion").hide();
      $(".elephant").show();
    }
  });
});
