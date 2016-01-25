
    $(document).ready(function() 
    {
        var page=
        {
            'profile'       :   {html:'page-1.html',js:'page-1.js',className:'page-1',defaultPage:1,main:1},
            'resume'        :   {html:'page-2.html',js:'page-2.js',className:'page-2',defaultPage:0,main:1},
            'folio'         :   {html:'page-3.html',js:'page-3.js',className:'page-3',defaultPage:0,main:1},  
            'references'    :   {html:'page-4.html',js:'page-4.js',className:'page-4',defaultPage:0,main:1},
            'contact'       :   {html:'page-5.html',js:'page-5.js',className:'page-5',defaultPage:0,main:1}
        };
               
        $('#prestige').prestige(page);
        
        $.getJSON('plugin/twitter-user-timeline/twitter-user-timeline.html',function(data)
        {
            if(data.length)
            {
                var list=$('<ul>');
                $(data).each(function(index,value)
                {
                    list.append($('<li>').append($('<p>').html(linkify(value.text))));
                });

                $('#latest-tweets').append(list);
                $('#latest-tweets a').attr('target','_blank');

                list.bxSlider(
                {
                    auto:true,
                    pause:5000,
					pager:false,
                    nextText:'',
                    prevText:'',
                    mode:'vertical',
                    displaySlideQty:1
                });  
            }
        });
    });