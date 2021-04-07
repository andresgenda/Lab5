//LAB5


$('.agregar').on('click', function(ev){
    ev.preventDefault();
    
    var objeto = $('#newText').val();

    var agregaObj = $('<div class="lis"><p class="itemShop">' + objeto + 
    '</p><button class="checar">check</button><button class="del">delete</button></div>');
    
    $('.Lista').append(agregaObj);
});

$('.Lista').on('click', '.checar', function(ev){
    ev.preventDefault();

    $(this).siblings('.itemShop').toggleClass('chec');
});

$('.Lista').on('click', '.del', function(ev){
    ev.preventDefault();

    $(this).parent().remove();
});


