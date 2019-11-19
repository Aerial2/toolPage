(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth>=750){
                docEl.style.fontSize = '100px';
            }else{   docEl.style.fontSize = Math.ceil(100 * (clientWidth / 750)) + 'px';
            }
        };
        if (!doc.addEventListener) return;
        	 win.addEventListener(resizeEvt, recalc, false);
        	 doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
$(document).ready(function(){
	$('.tab-title a').click(function(){
			var index = $(this).index();
			$(this).parents('.tab-title').find('.on').removeClass('on')
			$(this).addClass('on');
			$(this).siblings('i').css({
				'left':index*($(this).eq(0).width())+'px'
			})
			$(this).parent().siblings('.tab-cont.on-show').removeClass('on-show');
			$(this).parent().siblings('.tab-cont').eq(index).addClass('on-show');
			
	})
	$(window).scroll(function(){
		if($(document).scrollTop()>($('.footer').offset().top-$(window).height()))
		{
			$('.fixed-menu').css({
				'position':'absolute',
				'top':'0px',
				'left':'0px',
				'bottom':'auto'
			});
			$('.footer').css({
				'padding-top':'1rem',
				'box-sizing':'content-box'
			});
			$('.footer img').css({
				'top':'1.15rem'
			})
		}else{
			$('.fixed-menu').css({
				'position':'fixed',
				'bottom':'0px',
				'left':'0px',
				'top':'auto'
			});
			$('.footer').css({
				'padding-top':'0rem',
				'box-sizing':'border-box'
			});
			$('.footer img').css({
				'top':'.53rem'
			});
		}
	})
})
