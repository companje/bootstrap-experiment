function loadRecursive(context) {
    //search matching elements that have 'place-holder' class
    $('[data-include]', context).each(function() {
        var self = $(this);
        $.get(self.attr('data-include'), function(data, textStatus) {
            
            // var settings=self.attr('data-settings');

            // $(data).attr('settings',self.attr('data-settings')); //RICK

            self.html(data); // Load the data into the placeholder

            // self.attr('data-settings',settings);

            // console.log(self.attr('data-settings'));


            loadRecursive(self); // Fix sub placeholders
            self.replaceWith(self.get(0).childNodes); // Unwrap the content
        }, 'html');
    });
}


$(function(){
  loadRecursive(document.body);

  // // <div data-include="printer.html"></div>

  // $.get("printer.html",function(data, textStatus) {

  //   $("#printers").append(data);


  // },"html");

  


});

