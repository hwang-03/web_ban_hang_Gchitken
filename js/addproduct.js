$(document).on("click", ".btn-buy", function(e)
{   
    e.preventDefault();
    var parent = $(this).parents(".product-item") // chỉ đến cart của sản phẩm
    var src=parent.find("img").attr("src") // đưa ra đường dẫn ảnh
    var cart=$(document).find("#cart-shop") // chỉ đến giỏ hàng
    var partop=parent.offset().top; // hàm offset() để lấy vị trí của ảnh
    var parleft=parent.offset().left;
    // tạo thẻ img
    $('<img />',{ 
        class: "img-fly",
        src: src
        
    })
  .appendTo($("body")).css({
    "top": partop, 
    "left": parseInt(parleft)+ parseInt(parent.width())-50
  });
  setTimeout(function(){
    $(document).find(".img-fly").css({
        "top": cart.offset().top ,
        "left": cart.offset().left
    })
    setTimeout(function(){
        $(document).find(".img-fly").remove();
        
    },1000)
  },500)
}
)