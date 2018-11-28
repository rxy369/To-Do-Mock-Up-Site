
// check off specific to dos by clicking
$("ul").on("click","li",(function(){
    $(this).toggleClass("completed");
}));

// click on 'X' to delete that to do
$("ul").on("click","span",(function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  // prevent parent objects from being called as well
  event.stopPropagation();
}));

$("input[type = 'text']").keypress(function(event){
  // check if enter key is pressed
  if(event.which === 13){
    //grab new todo text from input
    var todoText = $(this).val();
    // create new li and add to ul
    $("ul").append("<li> <span><i class='fa fa-trash'></i></span> " + todoText+ "</li>");
    $(this).val("");
  }
});

$(".fa-plus").click(function(){
  $("input[type = 'text']").fadeToggle();
});
