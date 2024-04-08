document.getElementById("registrationform").addEventListener("submit", function (event) {
    event.preventDefault();

    var formData = {
        FirstName: document.querySelector(".firstname").value.trim(),
        middleName: document.querySelector(".middlename").value.trim(),
        lastName: document.querySelector(".lastname").value.trim(),
        gender: document.querySelector('input[name="MaleFemale"]:checked').value,
        age: document.querySelector(".age").value.trim(),
        email: document.getElementById("email").value.trim(),
        username: document.getElementById("username").value.trim(),
    };

    console.log(formData);
});