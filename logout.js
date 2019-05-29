



function logout() {
	localStorage.clear();
	window.location.replace("index.html")
}

	function main() {

		$.ajax({
			type: 'GET',
			url: 'http://localhost:8080/getuser/'+localStorage.getItem("id_login"),
			success: (data, status, jqXHR) => {
				console.log(data.id)
				alert("success")
				localStorage.setItem('id_login', data.id);
				localStorage.setItem('name_login', data.name);
				localStorage.setItem('phoneNumber_login', data.phoneNumber);
				localStorage.setItem('email_login', data.email);
				localStorage.setItem('isScheduled',data.isScheduled);
				localStorage.setItem('scheduleID',data.scheduleID);


				window.location.replace("Main.html");
			},
			error: (jqXHR, status, errorThrown) => {
				console.log(jqXHR)
				alert("failed")
			},
			dataType: 'json',
			timeout: 10000
		})
		
	}
	function history() {
			window.location.replace("feedback_history.html")
}