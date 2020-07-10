$( document ).ready(function() {
  
  $('.pa-header_nav-profile_img-btn').on('click', function() {
  	$(this).parent('.pa-header_nav-profile_img').toggleClass('active');
  });

  $('.warning-menu_btn').on('click', function() {
  	$(this).parent('.warning-menu').toggleClass('active');
  });

  $('.ais-opinions_top-sort_switch a').on('click', function(e) {
  	e.preventDefault();
  	$(this).parent('.ais-opinions_top-sort_switch').toggleClass('active');
  });


  $(document).on('click', '#table-btn_options', function(e) {
  	
  		if($(this).siblings('ul.table-btn_cont').hasClass('active')) {
  			$('td ul.table-btn_cont').removeClass('active');
  			$(this).siblings('ul.table-btn_cont').removeClass('active');
  		} else {
  			$('td ul.table-btn_cont').removeClass('active');
  			$(this).siblings('ul.table-btn_cont').addClass('active');
  		}

  	// ---------------------------------------------------------------
  	// $(this).siblings('ul.table-btn_cont').toggleClass('active');

  });


  // copy link in div start
	function selectText(elementId) {
	
		var doc = document,
		text = doc.getElementById(elementId), range, selection;
		
		if(doc.body.createTextRange) {
		
			range = document.body.createTextRange();
			range.moveToElementText(text);
			range.select();
			
		} else if(window.getSelection) {
			
			selection = window.getSelection();
			range = document.createRange();
			range.selectNodeContents(text);
			selection.removeAllRanges();
			selection.addRange(range);

		}
		
	}
	
	$("#work-link_btn").click(function(e) {
		e.preventDefault();
		var workLink = $(this).parent().siblings('#work-link').attr('id');
		selectText(workLink);
		document.execCommand("copy");
		$(this).siblings('#work-link_btn-alert').addClass('active');
	});

	$("#work-link").click(function() {
		selectText(this.id);
		document.execCommand("copy");
		$(this).siblings('.ais-rightbar_working-link_btn').children('#work-link_btn-alert').addClass('active');
	});
	
  // copy link in div end

  // all-req_leftbar-accordion start
  $('#all-req_leftbar-accordion').dcAccordion({
  	speed: 300,
  	// classArrow : 'all-req_leftbar-accordion_arrow'
  });
  // all-req_leftbar-accordion end

});

