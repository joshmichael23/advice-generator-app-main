$(document).ready(function(){
    function Load(){
        $.ajax({
            'url': 'https://api.adviceslip.com/advice',
            'type': 'GET',
            'dataType': 'json',
            'success': function (data) {
                $("h1>span").html(data.slip.id);
                $("p").html(data.slip.advice);
            },
            'complete': function(){
                $("h1").css('opacity', 1);
                $("p").css('opacity', 1);
            }
        });

        
    }
  
  
    Load();
 
    

    $("button").on("click", function(){
        $("h1").css('opacity', 0);
        $("p").css('opacity', 0);
        Load();
    });

   
});
