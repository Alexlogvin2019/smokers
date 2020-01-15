$(document).ready(function(){
    $('.your-class').slick(
      {
        dots: true,
      }
    );

  $('#form').submit(function(){
		var form = $(this);
		var error = false;
		form.find('textaria, input').each( function(){
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
				beforeSend: function(data) {
					form.find('.contact__button').attr('disabled', 'disabled');
				},
				success: function(data){
            $('.contact__button').fadeOut('slow');
            $('.fadein').fadeIn('slow');
					
				},
				complete: function(data) {
					form.find('.contact__button').prop('disabled', false);
        }
      });
		}
    return false;
  });
});
