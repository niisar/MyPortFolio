/******************************************************************************/

$('.fancybox-image').fancybox({
	cyclic:true,
	titleShow:true,
	titlePosition:'over',
	showNavArrows:true
});

/******************************************************************************/

$('.fancybox-video-youtube').bind('click',function() 
{
    $.fancybox(
    {
        'padding'		: 0,
        'autoScale'		: false,
        'transitionIn'	: 'none',
        'transitionOut'	: 'none',
        'width'			: 970,
        'height'		: 500,
        'href'			: this.href,
        'type'			: 'iframe'
    });

    return false;

    return false;
});

/******************************************************************************/

$('.fancybox-video-vimeo').bind('click',function() 
{
	$.fancybox(
	{
		'padding'		: 0,
		'autoScale'		: false,
		'transitionIn'	: 'none',
		'transitionOut'	: 'none',
		'width'			: 970,
		'height'		: 500,
		'href'			: this.href,
		'type'			: 'iframe'
	});
	
	return false;
	
	return false;
});

/******************************************************************************/

$('#contact-form').submit(function() 
{
	submitContactForm();
	return(false);
});

$('label.infield').inFieldLabels();

/******************************************************************************/
/******************************************************************************/