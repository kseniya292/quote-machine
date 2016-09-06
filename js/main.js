$(document).ready(function(){

var getQuote = function() {
   $.ajax({
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies', 
    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
    data: {}, // Additional parameters here
    dataType: 'json',
    success: function(data) { 
      //console.log(data);
       $(".message").html('"' + data.quote + '"');
       $(".author").html("- " + data.author); 
      $(".twitter-share-button").attr("href", 'https://twitter.com/intent/tweet?text=' + '"' + data.quote + '" ' + data.author);
    },
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "mluM1zStezmshiZz6q3fpbe31CJtp17Zwkdjsn3je357Y7YMYQ"); // Enter here your             Mashape key
    }
}); //ajax call

} //getQuote
getQuote();
  
$("#getMessage").click(getQuote); 


}); //ready method end