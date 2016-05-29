$(document).ready(function(){
        var aChildren = $("#topNav .nav .page-scroll"); // find the a children of the list items
        var aArray = []; // create the empty aArray
        for (var i=0; i < aChildren.length; i++) {    
            var aChild = aChildren[i];
            var ahref = $(aChild).attr('data-href');
            aArray.push(ahref);
        } // this for loop fills the aArray with attribute href values

        $(window).scroll(function(){
          if(!$('body').hasClass('scroll-active')){
            var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
            var windowHeight = $(window).height(); // get the height of the window
            var docHeight = $(document).height();

            for (var i=0; i < aArray.length; i++) {
                var theID = aArray[i];
                var divPos = $(theID).offset().top; // get the offset of the div from the top of page
                var divHeight = $(theID).height(); // get the height of the div in question
                if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                	if(!$("a[data-href='" + theID + "']").parent('li').hasClass("logo-li")){
                	$("a[data-href='" + theID + "']").parent('li').addClass("nav-active");	
                	}
                	else{
                		$("#topNav .nav li").removeClass("nav-active");
                	}
                    
                } else {
                    $("a[data-href='" + theID + "']").parent('li').removeClass("nav-active");
                }
            }
          }       
        });
     });
      
      $('.js--jumper').click(function(e){ 
        e.preventDefault();       
      
        $('body').addClass('scroll-active');
        $("body, html").animate({
              scrollTop: $($(this).data('href')).offset().top-40
        }, 600, 'easeInOutExpo');
        $("#topNav .nav li").removeClass("nav-active");
        $("a[data-href='#hero-wrpr']").parent('li').addClass("nav-active");
        setTimeout(function(){$('body').removeClass('scroll-active');}, 800);
      });
      $('#topNav .nav li a').click(function(e){
        e.preventDefault(); 
      	var self=$(this)
        $('body').addClass('scroll-active');
        $("body, html").animate({
              scrollTop: $($(this).data('href')).offset().top-40
        }, 600, 'easeInOutExpo',function(){ 
        	if(!self.parent('li').hasClass('logo-li')){
        		$("#topNav .nav li").removeClass("nav-active");
	            self.parent('li').addClass('nav-active'); 
	            $('.page-scroll').removeClass('.active-menu-item');

        	}
        	else{
        		$("#topNav .nav li").removeClass("nav-active");
        	}	            
        });
         setTimeout(function(){$('body').removeClass('scroll-active');}, 800);
        	

    })
$(document).ready(function(){
	$('.filter-btn').click(function(e){
		e.preventDefault();
		e.stopPropagation();
		$('body').addClass('loading');
		var playerId = $("input[name='players']:checked").val();
		if(playerId){
			playerFilterData(playerId);
		}else{
			alert("Please checked atleast one value!");
			return false;
		}
		
	});	

	$('#mobileFilter').change(function(e){
		e.preventDefault();
		e.stopPropagation();
		$('body').addClass('loading');
		var playerId = $(this).val();
		if(playerId){
			playerFilterData(playerId);
		}else{
			alert("Please checked atleast one value!");
			return false;
		}
		
	});	

	$('body').on('click','.light-box-overlay', function(e){
		e.preventDefault();
		var imageId = $(this).attr('data-id');
		$('.item').removeClass('active');
		$('#modalImg_'+imageId).addClass('active');
		$('#myModal').modal('show');
	});
});

function playerFilterData(playerID){
	if(playerID){
		$.ajax({
	  		  url: baseUrl+"index.php/home/player_filter_data",
	          type: 'POST',            
	          data: { 'playerId': playerID },
	          dataType: "json",
	          success: function(data) {
	          	var filterHtml = '';
	          	var modalInnerHtml = '';
	          	if($.trim(data) != "") { 
	          		if(data.filter_data.length != 0) {
		          		$.each( data, function( index, filterValue ) { 
		          			for(var i=0; i<filterValue.length; i++){
		          				filterHtml += '<div class="col-xs-4 col-xs-20 light-box-wrpr"><div class="row">';
		          				if(filterValue[i].type == 'image'){
		          					filterHtml += '<a><img src="'+baseUrl+'uploads/'+filterValue[i].media_value+'" class="full-width-img"><div class="light-box-overlay image-overlay" data-id="'+filterValue[i].id+'"></div></a>';
		          					modalInnerHtml += '<div class="item" id="modalImg_'+filterValue[i].id+'"><img src="'+baseUrl+'uploads/'+filterValue[i].media_value+'"></div>';
		          				}else if(filterValue[i].type == 'video'){
		          					filterHtml += '<a href="#"><img src="'+baseUrl+'uploads/'+filterValue[i].video_thumbnail+'" class="full-width-img"><div class="light-box-overlay video-overlay" data-id="'+filterValue[i].id+'"></div></a>';
		          					modalInnerHtml += '<div class="item" id="modalImg_'+filterValue[i].id+'"><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="'+filterValue[i].media_value+'" frameborder="0" allowfullscreen></iframe></div></div>';
		          				}
                 				filterHtml += '</div></div>';
		          			}
		          		}); 
					}else{
						filterHtml += '<h3 style="text-align:center">No videos/images found for this athlete!!!</h3>';
					}
					$('.replace-filter-data').html(filterHtml);
					$('.carousel-inner').html(modalInnerHtml);
					$('body').removeClass('loading');
				}
	          }
	        });
	}
}