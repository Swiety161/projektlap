/*jslint white: true, indent: 2, onevar: false, browser: true, undef: true, nomen: false, eqeqeq: true, plusplus: false, bitwise: true, regexp: true, strict: false, newcap: true, immed: true */
/*global window, console, jQuery, setTimeout */

/*
  [INSERT_PLUGIN_NAME]
  [INSERT_VERSION_NUMBER]  
  Author and Contributors
  ========================================
  [INSERT_AUTHOR_LIST]
  
  File: jquery.iframe-auto-height.plugin.js  
  Remarks: original code from http://sonspring.com/journal/jquery-iframe-sizing      
  [INSERT_DESCRIPTION]
*/
(function ($) {
  $.fn.iframeAutoHeight = function (spec) {
    
    // set default option values
    var options = $.extend({
        heightOffset: 0, 
        minHeight: 0, 
        callback: function (newHeight) {},
        debug: false,
        diagnostics: false // used for development only
      }, spec);
    
    // logging
    function debug(message) {
      if (options.debug && options.debug === true && window.console) {
        console.log(message);
      }
    }    

    // not used by production code
    function showDiagnostics(iframe, calledFrom) {
      debug("Diagnostics from '" + calledFrom + "'");      
      try {
        debug("  " + $(iframe, window.top.document).contents().find('body')[0].scrollHeight + " for ...find('body')[0].scrollHeight");                  
        debug("  " + $(iframe.contentWindow.document).height() + " for ...contentWindow.document).height()");
        debug("  " + $(iframe.contentWindow.document.body).height() + " for ...contentWindow.document.body).height()");        
      } catch (ex) {
        // ie fails when called during for each, ok later on
        // probably not an issue if called in a document ready block         
        debug("  unable to check in this state");
      }
      debug("End diagnostics -> results vary by browser and when diagnostics are requested");
    }
    
    // show all option values
    debug(options);    

    // ******************************************************
    // iterate over the matched elements passed to the plugin ; return will make it chainable
    return this.each(function () {
     
      // for use by webkit only
      var loadCounter = 0;
            
      // resizeHeight
      function resizeHeight(iframe) {
        if (options.diagnostics) {
          showDiagnostics(iframe, "resizeHeight");
        }     
     
        // get the iframe body height and set inline style to that plus a little
        var $body = $(iframe, window.top.document).contents().find('body');
        var newHeight = $body[0].scrollHeight + options.heightOffset;
        
        if (newHeight < options.minHeight) {          
          debug("new height is less than minHeight");
          newHeight = options.minHeight + options.heightOffset;
        }

        debug("New Height: " + newHeight);
        iframe.style.height = newHeight + 'px';
        
        options.callback.apply($(iframe), [{newFrameHeight: newHeight}]);
      }
      
      // debug me
      debug(this);    
      if (options.diagnostics) {
        showDiagnostics(this, "each iframe");
      }      
      
      // Check if browser is Opera or Safari (Webkit really, so includes Chrome)
      if ($.browser.safari || $.browser.opera) {
        debug("browser is webkit or opera");
        
        // Start timer when loaded.
        $(this).load(function () {
          var delay = 0;
          var iframe = this;  
          // Reset iframe height to 0 to force new frame size to fit window properly          
          iframe.style.height = '0px';                     
          var delayedResize = function () {
            resizeHeight(iframe);
          };
          
          if (loadCounter === 0) {
            delay = 500; // delay the first one
          }
          
          debug("load delay: " + delay);
          setTimeout(delayedResize, delay);
          loadCounter++;          
        });

        // Safari and Opera need a kick-start.
        var source = $(this).attr('src');
        $(this).attr('src', '');
        $(this).attr('src', source);
      } else {
        // For other browsers.
        $(this).load(function () {
          resizeHeight(this);
        });
      } // if browser
             
    }); // $(this).each(function () {    
  }; // $.fn.iframeAutoHeight = function (options) {
}(jQuery)); // (function ($) {