
/*

    TIMELINE PLUGIN
    
    Development by Bruno Quaresma - bruno.quaresma@girodesenvolvimento.com.br
    
    Updated 10/06/2013    
    
*/
    
(function($){
    $.fn.timeline = function(settings){
        
        var config = {
            'width': '100%',
            'height' : '25px',            
            'porcentage' : '25%',
            'mode' : 'success' /* success, alert, warning */
        };
        
        if (settings){$.extend(config, settings);}

        return this.each(function(){
            
            var me = $(this),
                timelineOn = $('<div class="timeline-on timeline-on-'+config.mode+'">')             
               
                
            me.css({
                'width':config.width,
                'height':config.height,
                'border-radius':config.height            
            });
                        
            timelineOn.css({
                'width':config.porcentage,
                'height':config.height,
                'border-radius':config.height      
            }).html(config.porcentage);  
            
            me
                .addClass('timeline')
                .append(timelineOn);
            
        });
    };
})(jQuery);