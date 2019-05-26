function getuser (){
    getschedule()

        $.get("http://localhost:8080/getuser/" + localStorage.getItem('id_login'),function( data ){
            localStorage.setItem('id_login', data.id);
            localStorage.setItem('name_login', data.name);
            localStorage.setItem('phoneNumber_login', data.phoneNumber);
            localStorage.setItem('email_login', data.email);
            localStorage.setItem('isScheduled',data.isScheduled);
            localStorage.setItem('scheduleID', data.scheduleID);                
        }, "json" );

        


}

function getschedule(){


        $.get("http://localhost:8080/schedule/" + localStorage.getItem('scheduleID'), function( data ){
            localStorage.setItem('sport', data.sport);
            localStorage.setItem('location', data.location);
            localStorage.setItem('date', data.date);
            if(localStorage.getItem('user1name')!=null){
            localStorage.setItem('user1name', data.user1.name);
            }
            if(localStorage.getItem('user2name')!=null){
            localStorage.setItem('user2name', data.user2.name);
            }
            
        }, "json" );
}