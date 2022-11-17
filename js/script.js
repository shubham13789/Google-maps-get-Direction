// "https://www.google.com/maps/dir/Cipla+3,+9X82%2BJQF,+Verna+Industrial+Estate,+Verna,+Goa+403710/15.4935956,73.8301322/@15.4305897,73.8560361,13z/data=!3m1!4b1!4m9!4m8!1m5!1m1!1s0x3bbfb0a4cbc832eb:0xaee8d2faa4643430!2m2!1d73.9519645!2d15.3665855!1m1!4e1"



var x = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
        var loc = navigator.geolocation.getCurrentPosition(showPosition, showError);
        console.log(loc);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;

    document.getElementById("test_map").src = "https://maps.google.com/maps?&saddr=" + position.coords.latitude + "," + position.coords.longitude + "&daddr=26.848306019174014, 80.94396220745888&output=embed";
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}