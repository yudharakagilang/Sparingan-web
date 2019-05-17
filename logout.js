function logout() {
	localStorage.removeItem('id_login')
	localStorage.removeItem('email_login')
	localStorage.removeItem('phoneNumber_login')
	localStorage.removeItem('name_login')
	localStorage.removeItem('isScheduled')
	localStorage.removeItem('scheduleID')
	localStorage.removeItem('sport')
	localStorage.removeItem('location')
	localStorage.removeItem('date')
	localStorage.removeItem('user1name')
	localStorage.removeItem('user2name')
	window.location.replace("index.html")
}