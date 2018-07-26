function loadRecursive(context) {
  //search matching elements that have 'place-holder' class
  $('[data-include]', context).each(function() {
    var self = $(this);
    $.get(self.attr('data-include'), function(data, textStatus) {
      self.html(data); // Load the data into the placeholder
      loadRecursive(self); // Fix sub placeholders
      self.replaceWith(self.get(0).childNodes); // Unwrap the content
    }, 'html');
  });
}


$(function(){
  loadRecursive(document.body);

  window.data = {};
});

