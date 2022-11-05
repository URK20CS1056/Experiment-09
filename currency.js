function fromoutput(){
    var FROMcurrency = document.getElementById('from').value;
    var TOcurrency = document.getElementById('to').value;
    var amount = document.getElementById('amount').value;
    var result = "";


    if(FROMcurrency == "USD"){
    switch(TOcurrency){
       case "INR": result = amount * 78;
                   break;
       case "USD": result = amount;
                   break;
       case "EUR": result = amount / 1.2;
                   break;
    }
    document.getElementsByName("output")[0].value="";
    document.getElementsByName("output")[0].placeholder=result;
    }


    else if(FROMcurrency == "INR"){
    switch(TOcurrency){
       case "INR": result = amount ;
                   break;
       case "USD": result = amount / 78;
                   break;
       case "EUR": result = amount / 79;
                   break;
    }
        document.getElementsByName("output")[0].value="";
    document.getElementsByName("output")[0].placeholder=result;
    }


    else if(FROMcurrency == "EUR"){
        
    switch(TOcurrency){
       case "INR": result = amount * 79;
                   break;
       case "USD": result = amount * 1.2;
                   break;
       case "EUR": result = amount ;
                   break;
    }
    document.getElementsByName('output')[0].placeholder=result;
    }
}

function tooutput(){
    var FROMcurrency = document.getElementById('from').value;
    var TOcurrency = document.getElementById('to').value;
    var amount = document.getElementById('amount').value;
    var result = "";

     if(TOcurrency == "USD"){
        
        switch(FROMcurrency){
           case "INR": result = amount / 78;
                       break;
           case "USD": result = amount;
                       break;
           case "EUR": result = amount * 1.2;
                       break;
        }
            document.getElementsByName("output")[0].value="";
        document.getElementsByName("output")[0].placeholder=result;
    }


    else if(TOcurrency == "INR"){
    
    switch(FROMcurrency){
       case "INR": result = amount;
                   break;
       case "USD": result = amount * 78;
                   break;
       case "EUR": result = amount * 78;
                   break;
    }
        document.getElementsByName("output")[0].value="";
    document.getElementsByName("output")[0].placeholder=result;
    }


    else if(TOcurrency == "EUR"){  
    switch(FROMcurrency){
       case "INR": result = amount / 79;
                   break;
       case "USD": result = amount * 1.2;
                   break;
       case "EUR": result = amount ;
                   break;
    }
        document.getElementsByName("output")[0].value="";
    document.getElementsByName("output")[0].placeholder=result;
    }
 


}






