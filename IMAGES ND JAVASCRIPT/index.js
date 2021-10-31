function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $("#name").text(profile.getName());
    
    $(".data").css("display", "block");
    $(".g-signin2").css("display", "none");
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        alert("You have been signed out successfully. Thankyou your using our website . Now you are browsing on this website as guest");
        $(".data").css("display", "none");
        $(".g-signin2").css("display", "block");
    });
}