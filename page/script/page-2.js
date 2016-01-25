
$('.skill-list li div').each(function() 
{
    var width=parseInt($(this).css('width'));
    $(this).css('width','0px');
	$(this).css('display','block');
    $(this).animate({width:width},getRandom(1000,1500),'easeOutQuint',function() {});
});


