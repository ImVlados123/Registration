function checking() {
    var username = document.getElementById('username').value;
    var userpass1 = document.getElementById('pass1').value;
    var userpass2 = document.getElementById('pass2').value;

    if (username === '' || userpass1 === '' || userpass2 === '') {
        alert("Complete all inputs!");
    } else if (userpass1 !== userpass2) {
        alert("Passwords doesn't match!");
    } else {
        window.open("filler.html");
    }
}