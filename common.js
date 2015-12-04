$(document).ready( function() {
   $('body').on('shown.bs.modal', function() {
       $('form:not(.filter) :input:visible:enabled:first').focus();
   })

   var rx = /INPUT|SELECT|TEXTAREA/i;
   var rxClass = /dialogAlert|dialogConfirm|btnOk|confirmYes|confirmNo/i;

   $(document).bind("keydown keypress", function(e){
       if( e.which == 8 ){
           if(!rx.test(e.target.tagName) || rxClass.test(e.target.id) || e.target.disabled || e.target.readOnly ){
               e.preventDefault();
           }
       }
   });



});

function getCookie(name)
{
   var re = new RegExp(name + "=([^;]+)");
   var value = re.exec(document.cookie);
   return (value != null) ? unescape(value[1]) : null;
}

(function (exports) {
   function valOrFunction(val, ctx, args) {
       if (typeof val == "function") {
           return val.apply(ctx, args);
       } else {
           return val;
       }
   }

   function InvalidInputHelper(input, options) {
       input.setCustomValidity(valOrFunction(options.defaultText, window, [input]));

       function changeOrInput() {
           if (input.value == "") {
               input.setCustomValidity(valOrFunction(options.emptyText, window, [input]));
           } else {
               input.setCustomValidity("");
           }
       }

       function invalid() {
           if (input.value == "") {
               input.setCustomValidity(valOrFunction(options.emptyText, window, [input]));
           } else {
              input.setCustomValidity(valOrFunction(options.invalidText, window, [input]));
          }
      }

      input.addEventListener("change", changeOrInput);
      input.addEventListener("input", changeOrInput);
      input.addEventListener("invalid", invalid);
  }
  exports.InvalidInputHelper = InvalidInputHelper;
})(window);
