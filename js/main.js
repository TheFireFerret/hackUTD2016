var ref = new Firebase("https://keypin.firebaseio.com");

function fblogin() {
    ref.authWithOAuthPopup("facebook", function (error, authData) {
        if (error) {
            console.log("Login Failed!", error);

        } else {
            console.log("Authenticated successfully with payload:", authData);
            window.location.href = 'owner.html'
        }
    });
}

function fblogout() {
    ref.unauth();
    window.location.href = 'index.html'
}