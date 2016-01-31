
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
        
    });