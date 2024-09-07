
function showWelcomeMessage() {
    alert("Hello, welcome to my page!");
}
document.addEventListener("DOMContentLoaded", function() {

    const profilePicture = document.getElementById('profile-picture');

    profilePicture.addEventListener('mouseover', function() {
        document.body.style.backgroundColor = '#a19d9d'; 
    });

    profilePicture.addEventListener('mouseout', function() {
        document.body.style.backgroundColor = '#f4f4f4';  
    });
});