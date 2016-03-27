var ref = new Firebase("https://keypin.firebaseio.com");
var data;

function fblogin() {
    ref.authWithOAuthPopup("facebook", function (error, authData) {
        if (error) {
            console.log("Login Failed!", error);

        } else {
            console.log("Authenticated successfully with payload:", authData);
            data = authData.facebook.id;
            var npath = "profiles/";
            npath += authData.facebook.id;
            var pref = ref.child(npath);
            var m = []
            pref.set({
                "name": authData.facebook.displayName

            })
            window.location.href = '/owner/' + authData.facebook.id;
        }
    });
}

function fbloginNoRedirect() {
    ref.authWithOAuthPopup("facebook", function (error, authData) {
        if (error) {
            console.log("Login Failed!", error);

        } else {
            console.log("Authenticated successfully with payload:", authData);
            data = authData.facebook.id;
            var npath = "profiles/";
            npath += authData.facebook.id;
            var pref = ref.child(npath);
            var m = []
            pref.set({
                "name": authData.facebook.displayName
            })
        }
    });
}

function fblogout() {
    ref.unauth();
    window.location.href = 'index.html'
}


//function checkItem() {
//    //var id = document.getElementById("id_entry").value;
//
//    ref.once("value", function (snapshot) {
//        alert('exists');
//    });
//}


//slow scroll
$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});