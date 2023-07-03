var first_name_input1 = document.getElementById('first_name_input');
var second_name_input2 = document.getElementById('second_name_input');
var last_name_input3 = document.getElementById('last_name_input');
var email_input4 = document.getElementById('email_input');
var phone_input5 = document.getElementById('phone_input');
var city_input6 = document.getElementById('city_input');
         
var button1 = document.getElementById('submit');
var test_data = 0       
         
button1.onclick = inputCustomer_information;
        
    function inputCustomer_information() {

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email_input4.value))
        {
    
        }else{
            alert("You have entered an invalid email address!")
            return (false)
        }
        if (first_name_input1.value ==null || first_name_input1.value ==""){  
            alert("First Name can't be blank");  
            return false;  
            
        }else if(first_name_input1.value.length < 3){
            alert("First Name Should be at least 3 characters !");  
            return false;  
        }
        if (second_name_input2.value ==null || second_name_input2.value ==""){  
            alert("Second Name can't be blank");  
            return false;  
        }else if(second_name_input2.value.length < 3){
            alert("Second Name Should be at least 3 characters !");  
            return false;  
        }
        if (last_name_input3.value ==null || last_name_input3.value ==""){  
            alert("Last Name can't be blank");  
            return false;  
        }else if(last_name_input3.value.length < 3){
            alert("Last Name Should be at least 3 characters !");  
            return false;  
        }
        var phoneno = /^\d{9}$/;
        if(phone_input5.value.match(phoneno)){

        }else{
            alert("You have entered an invalid phone number ! (10 numbers)");  
            return false;   
        }
        
        if (city_input6.value ==null || city_input6.value ==""){  
            alert("City cannot be blank");  
            return false;  
        }else if(city_input6.value.length < 3){
            alert("City name Should be at least 3 characters !");  
            return false;  
        }
             if((first_name_input1.value.length != 0) && (second_name_input2.value.length != 0) && (last_name_input3.value.length != 0)&&(email_input4.value.length != 0)&&(phone_input5.value.length != 0)&&(city_input6.value.length != 0)) {
                alert("Your Information is accepted");
                return test_data = 1
             } else {
                 alert("Please complete filling in the information ! ");
                 return test_data = 0 
             }
         }    




var copy1_d = document.getElementById('copy1');
var copy2_d = document.getElementById('copy2');
var copy3_d = document.getElementById('copy3');
var copy4_d = document.getElementById('copy4');
var CH1_d = document.getElementById('CH1');
var CH2_d = document.getElementById('CH2');
var CH12_d = document.getElementById('CH12');



var button = document.getElementById('download');

button.onclick = downloadFile;

function downloadFile() {
   

    if(CH1_d.checked && copy1_d.selected  && test_data == 1 ) {
       
        window.open("C:/Users/HP/Desktop/web engineering/python-bookChapter(one).pdf");
      

        alert("chapter one has been download , Thank you for shopping from our store :)");
       
        
    }else if( CH2_d.checked && copy1_d.selected &&  test_data == 1) {
    
        window.open("C:/Users/HP/Desktop/web engineering/python-bookChapter(two).pdf");
        alert(" chapter two has been download , Thank you for shopping from our store :)");
    
    }else if(CH12_d.checked && copy1_d.selected &&  test_data == 1) {

        window.open("C:/Users/HP/Desktop/web engineering/python-bookChapter(one&two).pdf");
        alert("chapter one and two , Thank you for shopping from our store :)");
    }else if((CH1_d.checked || CH2_d.checked || CH12_d.checked ) && (copy2_d.selected || copy3_d.selected || copy4_d.selected ) && test_data == 1) {

       alert("Multiple downloads need to upgrade your account !");

    } else {
        alert("Please choose option or complete Your information first !");

    }
    
    
}



var giftyes1 = document.getElementById('giftyes');
var giftno2 = document.getElementById('giftno');
var demo = document.getElementById('demo');
var demo2 = document.getElementById('demo2');
var first_name = document.getElementById('first_name');
var second_name = document.getElementById('second_name');
var last_name = document.getElementById('last_name');
var email = document.getElementById('email');
var phone = document.getElementById('phone');    
var city = document.getElementById('city');   

giftyes1.onclick = giftOption;
giftno2.onclick = giftOption;

    function giftOption() {
            
         
        if(giftyes1.checked ) {
               
             document.getElementById("demo").innerHTML = "Your Gift Books";
             document.getElementById("demo2").innerHTML = "Gift Recipient Informtion";
             document.getElementById("first_name").innerHTML = "First name of recipient :";
             document.getElementById("second_name").innerHTML = "second name of recipient :";
             document.getElementById("last_name").innerHTML = "last name of recipient :";
             document.getElementById("email").innerHTML = "email of recipient :";
             document.getElementById("phone").innerHTML = "phone of recipient :";
             document.getElementById("city").innerHTML = "city of recipient :";

         
                
        }else if( giftno2.checked ) {
         
                document.getElementById("demo").innerHTML = "Your Books";
                document.getElementById("demo2").innerHTML = "Customer Informtion";
                document.getElementById("first_name").innerHTML = "First name : ";
                document.getElementById("second_name").innerHTML = "second name :";
                document.getElementById("last_name").innerHTML = "last name :";
                document.getElementById("email").innerHTML = "email :";
                document.getElementById("phone").innerHTML = "phone :";
                document.getElementById("city").innerHTML = "city : ";
                
        } else {
                alert("Please check one of the options first.");
            }
         }





var button2 = document.getElementById('b1');


button2.onclick = gotocart;
    function gotocart() {
   
       window.open(href="cart.html");
      
}        


var button3 = document.getElementById('b2');
button3.onclick = book_not_available;
         function book_not_available() {
         
             alert("Sorry, this book is not available right now .");
         
         }
         