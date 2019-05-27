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
            localStorage.setItem('user1name', data.user1.name);
            localStorage.setItem('user2name', data.user2.name);
            localStorage.setItem('user2id', data.user2.id);
            localStorage.setItem('enemyID', data.user1.enemyID);
            localStorage.setItem('phoneNumber', data.user2.phoneNumber);
            
            
        }, "json" );
}