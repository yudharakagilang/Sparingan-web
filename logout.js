function logout() {
localStorage.removeItem('id_login')
localStorage.removeItem('email_login')
localStorage.removeItem('phoneNumber_login')
localStorage.removeItem('name_login')
localStorage.removeItem('isScheduled')
localStorage.removeItem('-alreadyMakeSchedule')


window.location.replace("index.html")

}