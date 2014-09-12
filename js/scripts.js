var $donateDivInactive = $('.donateBtn.inactive'),
	$donateBtnInactive= $('.donateBtn.inactive .btn'),
	$donateBtn = $('.donateBtn .btn'),
	$donateMenu = $('.donateMenu'),
	$donateOptions = $('.donateOptions'),
	$donateCloseBtn = $('.donateBtn .close'),
    $donateInput = $('#amount');

$donateInput.keyup(function(event){
    if(event.keyCode == 13){
        $('#amount_form').submit();
    }
});


$donateDivInactive.hover(
  function () {
    $donateMenu.transition({ y: '224px' });
  },
  function () {
    $donateMenu.transition({ y: '-224px' });
  }
);

$donateBtnInactive.click(
  function () {
    $donateMenu.transition({ y: '-224px' });
    $donateOptions.transition({ y: '224px' });
    $donateCloseBtn.css('display','block').transition({opacity:100});
    $('.donateBtn').removeClass('inactive').addClass('active');
  }
);

$donateCloseBtn.click(
  function() { 
    $donateOptions.transition({y:'-224px'});
    $donateCloseBtn.css('display','none').transition({opacity:0});
    $('.donateBtn').removeClass('active').addClass('inactive');
  }
);