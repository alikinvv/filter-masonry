jQuery(document).ready(function($) {
	 $mas = $('.knowWrap .js-kw').masonry({
            // options
            itemSelector: '.know',
            columnWidth: 1
            //percentPosition: true
        });


        for(var i = 1; i <= $('.knowWrap .know').length; i++) {
            $('.knowWrap .know:nth-child('+ i +')').attr('data-index', i);
        }
        
	$('.category__nav-class a').click(function(e) {
            e.preventDefault();

            if($(this).hasClass('checked') && $('.category__nav-class a.checked').length == 1) {
                $(this).removeClass('checked');
                $('.know').removeClass('show').show();
                $mas.masonry();
            } else if(!$(this).hasClass('checked') && $('.category__nav-class a').hasClass('checked')) {
                $(this).addClass('checked');
                $('.know:not(.show).' + $(this).attr('data-target') + '').addClass('show').show();
                $mas.masonry();
            } else if($(this).hasClass('checked') && $('.category__nav-class a.checked').length >= 2) {
                $(this).removeClass('checked');
                $('.know.' + $(this).attr('data-target') + '').removeClass('show').hide();
                $mas.masonry();
            }  else {
                $('.know').hide();
                $('.know.' + $(this).attr('data-target') + '').addClass('show').show();
                $mas.masonry();
                $('.know:not(.' + $(this).attr('data-target') + ')').css('top',0).css('left',0).css('transform','');
                $('.category__nav-class a').removeClass('checked');
                $(this).addClass('checked');
            }

        });
});