/*!
* Fit Font v1.1.0
*
* Copyright 2016, Dinesh Selvaraj
*/

(function( $ ){
  $.fn.fitFont = function() {
    return this.each(function(){
		var $this = $(this);
		var el, elements, _i, _len, _results;
		elements = $this
		if (elements.length < 0) {
		    return;
		}
		_results = [];
		for (_i = 0, _len = elements.length; _i < _len; _i++) {
		    el = elements[_i];
		    _results.push((function(el) {
		        var resizeText, _results2;
		        resizeText = function() {
		            var elNewFontSize;
		            elNewFontSize = (parseInt($(el).css('font-size').slice(0, -2)) - 1) + 'px';
		            return $(el).css('font-size', elNewFontSize);
		        };
		        _results2 = [];
		        while (el.scrollHeight > el.clientHeight) {
		            _results2.push(resizeText());
		        }
		        return _results2;
		    })(el));
		}
		return _results;
    });
  };
})( jQuery );