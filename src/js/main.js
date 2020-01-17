$(document).ready(function(){
    $('.your-class').slick(
      {
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000	
      }
	);
	
 

	$('form').on('submit', (function (e) {
		e.preventDefault();
		var form = $(this);
		var error = false;
		
		form.find('textaria, input').each(function () {
		  if ($(this).val() == '') {
			error = true;
		  }
		});
	
		if (!error) {
		  var data = form.serialize();
		  $.ajax({
			type: 'POST',
			url: './email.php',
			dataType: 'json',
			data: data,
			beforeSend: function beforeSend(data) {
			  form.find('.contact__button').attr('disabled', 'disabled');
			},
			success: function(response) {
			  //alert('thank you');
			  window.location.href = "./success/index.html"
			  //window.open("http://http://1652079.smokerst.web.hosting-test.net/index2.html");
			},
			complete: function complete(data) {
			  form.find('.contact__button').prop('disabled', false);
			}
		  });
		}
	
		return false;
	  }));
});
