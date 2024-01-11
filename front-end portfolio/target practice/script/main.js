
$(function(){

    let score = 0
    
    function update_score(score){
        $(".score").text("Score: " + score )
    }

    function reset_score(){
        let zero = 0
        update_score(zero)
    
    }


    $("[class^=circle]").click(function(evt){
        let number = parseInt($(this).attr("data-label"))

        score += number * 10
        update_score(score)

    })

    $(".target").click(function(evt){

        let spot_html = $("<div class='spot'></div>")
        let x = evt.pageX - $(this).offset().left
        let y = evt.pageY - $(this).offset().top

        $(".target .spots").append(spot_html)

        spot_html
            .css("left", x + "px")
            .css("top", y + "px")
        
        setTimeout(function(){
            spot_html.addClass("fadeout")
        }, 2000)

    })

    setTimeout(function(){
        $(".spot").addClass("fadeout")
    }, 3000)



    $(window).keydown(function(evt){
        
        // press r to restart
        // press k to change mode

        if (evt.key == "r"){
            reset_score()
            $(".spot").remove()
            $(".target").removeClass("moving")
        }
        else if (evt.key == "k"){
            $(".target").toggleClass("moving")
        }
    
    })

    $(window).mousemove(function(evt){
        let x = evt.pageX
        let y = evt.pageY

        $(".axis").text("("+ x + ", " + y + ")")

        $(".mouseSymbol")
            .css("left", x-10)
            .css("top", y-10)

    })



})


