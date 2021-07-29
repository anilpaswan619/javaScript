window.onload = function() {
    for(var i = 1; i < 21; i++) {

      (function() {
        var button = document.createElement("button");
        var text = document.createTextNode(i);
        button.appendChild(text);
        button.addEventListener("click", function() {
           alert(text.nodeValue); 
        });
        document.body.appendChild(button);
      })();
    }    
}