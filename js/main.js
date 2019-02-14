
var map;
function initMap() {
  map = new google.maps.Map(document.querySelector('.map'), {
    center: {lat: 47.6062 , lng: 122.3321},
    zoom: 14
  });
}

window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});


$('#navbar a .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});


// function validate() {
//   var name = document.getElementById('name');
//   var email = document.getElementById('email');
//   var phone  = document.getElementById('phone');
//   var message = document.getElementById('message');

//   if(name.value == '' || email.value == '' || phone.value == '' || message.value == ''){
//     alert('No blank spaces allowed');
//     return false;
//   }else{
//     return true;
//   }
// }