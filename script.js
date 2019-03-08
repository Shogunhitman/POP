$(".cats").click(function(){
    
    var think = $(".steps").val();
   // console.log(think);
    
    var create = $(".year").val();
    //console.log(create);

    var cats = $(".catto").val();
    //console.log(cats);

    
    var fortune  = "If you took  " + think + " steps you will find " + (think*2) + " dollars on the floor. "; 
    
        fortune += " You will also find  " + create + " dollars in your bank account ";
        
        fortune += " and you  will have a " + cats + " future ";

    $(".answer").text(fortune); 
    
    
    
});


