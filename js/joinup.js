var $popUp = $('#popup');
  var $popOverlay = $('.pop-overlay');
  var $popWindow = $('#popup-window');
  var $popClose = $('.popup-window .boxclose');
 
  $popUp.on('click', function(){
    $popOverlay.fadeIn();
    $popWindow.fadeIn();
  });
 
  $popClose.on('click', function(){
    $popOverlay.fadeOut();
    $popWindow.fadeOut();
  });
 
  $(function(){
	
    $(document).on('click', function(event) {
      if ($(event.target).closest($popUp).length) return;
      if ($(event.target).closest($popWindow).length) return;
      $popOverlay.fadeOut();
      $popWindow.fadeOut();
      event.stopPropagation();
    });
  });
  function showError(container, errorMessage) {
      container.className = 'error';
      var msgElem = document.createElement('span');
      msgElem.className = "error-message";
      msgElem.innerHTML = errorMessage;
      container.appendChild(msgElem);
    }

    function resetError(container) {
      container.className = '';
      if (container.lastChild.className == "error-message") {
        container.removeChild(container.lastChild);
      }
    }

        function showError(container, errorMessage) {
      container.className = 'error';
      var msgElem = document.createElement('span');
      msgElem.className = "error-message";
      msgElem.innerHTML = errorMessage;
      container.appendChild(msgElem);
    }

    function resetError(container) {
      container.className = '';
      if (container.lastChild.className == "error-message") {
        container.removeChild(container.lastChild);
      }
    }

    function validate(form) {
      var elems = form.elements;

      resetError(elems.phone.parentNode);
      if (!elems.phone.value) {
        showError(elems.phone.parentNode, ' *');
		
      }

      resetError(elems.email.parentNode);
      if (!elems.email.value) {
        showError(elems.email.parentNode,' *');
      }

      resetError(elems.message.parentNode);
      if (!elems.message.value) {
        showError(elems.message.parentNode, ' *');
      }

    }
  
/*
 $(document).ready(function(){
    $(".menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});*/
