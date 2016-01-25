
(function($)
{	
    /**********************************************************************/

    var Prestige=function(prestige,page)
    {
        /******************************************************************/

        var $this=this;

        this.prestige=$(prestige);

        this.prestigeWindow=$('#prestige-window');
        this.prestigeWindowContent=$('#prestige-window-content');

        this.prestigeMenu=$('#prestige-menu');
        this.prestigeMenuElement=$this.prestigeMenu.find('li');

        this.prestigeNavigationNext=$('#prestige-navigation-next');
        this.prestigeNavigationPrev=$('#prestige-navigation-prev');

        this.page=page;

        this.currentHash='';
        this.previousHash='';

        this.currentPage=-1;
        this.previousPage=-1;

        this.scrollbar='';

        this.enable=true;

        this.maxWidth=parseInt(this.prestige.css('width'));
        this.minWidth=parseInt(this.prestigeWindow.css('width'));

        /******************************************************************/
        /******************************************************************/

        this.load=function()
        {
            $this.handleHash();
        };

        /******************************************************************/
        /******************************************************************/

        this.handleHash=function()
        {
            if(window.location.hash=='') 
                window.location.href='#!/'+$this.getDefaultPage();
	
			$this.currentHash=window.location.hash;					
			if($this.currentHash!=$this.previousHash) $this.doHash();

			$(window).bind('hashchange',function(event) 
			{
				event.preventDefault();

				if($this.isEnable()==false) return; 

				$this.currentHash=window.location.hash;
				$this.doHash();
				$this.previousHash=$this.currentHash;
			});  
        };

        /******************************************************************/
                        
        this.doHash=function()
        {
            if(!$this.isEnable()) return(false);
            $this.enable=false;   

            var isOpen=$this.isOpen();
            var currentPage=$this.checkHash();

            if(currentPage==false) 
            {
                $this.enable=true;
                return(false);
            };

            $this.currentPage=currentPage;
            if($this.previousPage==-1) 
                $this.previousPage=$this.currentPage;

            if(isOpen) $this.close({onComplete:function() { $this.open(); }});
            else $this.open();

            return(true);
        };

        /******************************************************************/

        this.checkHash=function()
        {
            for(var id in $this.page)
            {
                if('#!/'+id==$this.currentHash) return(id);
            };

            return(false);
        };

        /******************************************************************/

        this.expand=function(event)
        {
            $this.prestigeWindow.animate({width:this.maxWidth},1000,'easeOutQuint',function() 
            {
                $this.doEvent(event);
            });              
        };

        /******************************************************************/

        this.collapse=function(event)
        {
            $this.prestigeWindow.animate({width:this.minWidth},300,'easeOutQuint',function() 
            {
                $this.doEvent(event);
            });              
        };

        /******************************************************************/
        /******************************************************************/

        this.open=function()
        {
            $this.selectMenuElement();
            $this.selectWindowClass();

            $.get('page/'+$this.getPageData($this.currentPage,'html'),{},function(page) 
            {	
                $this.fillPage(page);    

                $this.expand({'onComplete':function() 
                {
                    $this.createScrollbar();
                    $this.createNavigation();

                    jQuery.getScript('page/script/base.js',function() 
                    {
                        if($this.getPageData($this.currentPage,'js')!='')
                            jQuery.getScript('page/script/'+$this.getPageData($this.currentPage,'js'));
                    });

                    $this.enable=true;
                    $this.previousPage=$this.currentPage;
                }});
            });
        };

        /******************************************************************/

        this.close=function(event)
        {
            $(':input,a').qtip('destroy');

            $this.fillPage('');
            $this.destroyScrollbar();

            $this.collapse({'onComplete':function() 
            {
                $this.doEvent(event);
            }});
        };

        /******************************************************************/
        /******************************************************************/

        this.getPageData=function(key,property)
        {
            return($this.page[key][property]);
        };

        /******************************************************************/

        this.getDefaultPage=function()
        {
            for(var key in $this.page)
                if($this.page[key]['defaultPage']==1) return(key);

            return($this.getFirstPage());
        };

        /******************************************************************/

        this.fillPage=function(content)
        {
            $this.prestigeWindowContent.html(content);
        }

        /******************************************************************/

        this.getFirstPage=function()
        {
            for(var key in $this.page) 
            {
                if($this.page[key]['main']==1) return(key);
            };

            return('');
        };

        /******************************************************************/

        this.getPrevPage=function()
        {
            var prev='';
            for(var key in $this.page)
            {
                if(key==$this.currentPage && prev!='') return(prev);
                else if($this.page[key]['main']==1) prev=key;
            };

            return(prev);
        };

        /******************************************************************/

        this.getNextPage=function()
        {
            var n=false;
            var next=$this.getFirstPage();

            for(var key in $this.page)
            {
                if(n) 
                {
                    if($this.page[key]['main']==1) return(key);
                };
                if(key==$this.currentPage) n=key;
            };

            return(next);
        };

        /******************************************************************/
        /******************************************************************/

        this.isOpen=function()
        {
            return($this.currentPage==-1 ? false : true);
        };

        /******************************************************************/

        this.isEnable=function()
        {
            if(!$this.enable)
            {
                if($this.previousHash!='')
                    window.location.href=$this.previousHash;
                else window.location.href=$this.currentHash;

                return(false);
            };  

            return(true);
        };

        /******************************************************************/
        /******************************************************************/

        this.createScrollbar=function()
        {
            $this.scrollbar=$('#prestige-window-scroll').jScrollPane({maintainPosition:false,autoReinitialise:true,mouseWheelSpeed:20}).data('jsp');
        };

        /******************************************************************/

        this.destroyScrollbar=function()
        {
            if($this.scrollbar!='') 
            {
                $this.scrollbar.destroy();
                $this.scrollbar='';
            };              
        };

        /******************************************************************/
        /******************************************************************/

        this.selectMenuElement=function()
        {
            $this.prestigeMenuElement.removeClass('selected');
            $('#prestige-menu-element-'+$this.getPageData($this.currentPage,'className')).addClass('selected');
        };

        /******************************************************************/

        this.selectWindowClass=function()
        {
            $this.prestigeWindow.attr('class','prestige-window-'+this.getPageData($this.currentPage,'className'));
        };

        /******************************************************************/

        this.createNavigation=function()
        {
            var prev=$this.getPrevPage();				
            var next=$this.getNextPage();	

            $this.prestigeNavigationPrev.attr('href','#!/'+prev);
            $this.prestigeNavigationNext.attr('href','#!/'+next);
        };

        /******************************************************************/
        /******************************************************************/

        this.doEvent=function(event)
        {
            if(typeof(event)!='undefined')
            {
                if(typeof(event.onComplete)!='undefined') event.onComplete.apply();
            };                  
        };

        /******************************************************************/
    };

    /**************************************************************/

    $.fn.prestige=function(page)
    {
        /***********************************************************/

        var prestige=new Prestige(this,page);
        prestige.load();

        /***********************************************************/
    };

    /**************************************************************/

})(jQuery);