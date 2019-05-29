function getuser (){
   // getschedule()

        $.get("http://localhost:8080/getuser/" + localStorage.getItem('id_login'),function( data ){
            localStorage.setItem('id_login', data.id);
            localStorage.setItem('name_login', data.name);
            localStorage.setItem('phoneNumber_login', data.phoneNumber);
            localStorage.setItem('email_login', data.email);
            localStorage.setItem('isScheduled',data.isScheduled);
            localStorage.setItem('scheduleID', data.scheduleID); 
            getschedule();
        }, "json" );

    
    

        
}

function getschedule(){


    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/schedule/'+localStorage.getItem("scheduleID"),
        success: (data, status, jqXHR) => {
            localStorage.setItem('sport', data.sport);
            localStorage.setItem('location', data.location);
            localStorage.setItem('date', data.date);
          
           
        },
        error: (jqXHR, status, errorThrown) => {
            console.log(jqXHR)
        },
        dataType: 'json',
        timeout: 10000
    })



    getuser2id()
}



    

function getuser2data(){
    $.ajax({
           type: 'GET',
           url: 'http://localhost:8080/getuser/'+localStorage.getItem("user2id"),
           success: (data, status, jqXHR) => {
               //alert("success")
               localStorage.setItem("user2name",data.name);
               localStorage.setItem("user2_phoneNumber",data.phoneNumber);
               window.location.replace("Main.html");
               
              
           },
           error: (jqXHR, status, errorThrown) => {
               console.log(jqXHR)
               
           },
           dataType: 'json',
           timeout: 10000
       })}


       function getuser2id(){
        $.ajax({
               type: 'GET',
               url: 'http://localhost:8080/getuser/'+localStorage.getItem("id_login"),
               success: (data, status, jqXHR) => {
                   alert("success")
                   localStorage.setItem("user2id",data.enemyID);
                   if(localStorage.getItem("user2id")=="0"){
                       window.location.replace("Main.html")
                   }
                   else{
                   getuser2data()
                   }
                  
               },
               error: (jqXHR, status, errorThrown) => {
                   console.log(jqXHR)
                   
               },
               dataType: 'json',
               timeout: 10000
           })
        
        
         
        }