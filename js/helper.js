
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<h2>%data%</h2>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="gray-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<ul class="flex-item contactInfo"><span class="gray-text">Mobile:</span></br><span class="white-text">%data%</span></ul>';
var HTMLmobile2 = '<li class="flex-item"><span class="red-text">Mobile:</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<ul class="flex-item contactInfo"><span class="gray-text">Email:</span></br><span class="white-text">%data%</span></ul>';
var HTMLemail2 = '<li class="flex-item"><span class="red-text">Email:</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="red-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="red-text">github</span><span class="white-text">%data%</span></li>';
var HTMLslack = '<li class="flex-item"><span class="red-text">#slack</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="red-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="red-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message"><br><br><br><hr>%data%<hr></span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skill Set :</h3>';
var HTMLskills = '<ul id="eachSkill"><span class="lite-blue-text">%data%</span></ul>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br><br><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<div class="project-img"><img class="img-responsive" src="%data%"></div>';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var HTMLaboutmeStart = '<div class="bio-entry"></div>';
var HTMLfamily = '<ul><span class="red-text">%relation%</span><span class="white-text">%data%</span></ul>';


var internationalizeButton = '<button id="Internationalize">Internationalize</button>';
var googleMap = '<div id="map"></div>';


/*
The International Name will need this helper code to run. Don't delete!
*/
$(document).ready(function() {
  $('#Internationalize').click(function() {
    var iName = inName() || function(){};
    $('#name').html(iName);  
  });
});

/*
Collecting Click Locations
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks (x,y);
});



var map;    

/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  function locationFinder() {

    // initializes an empty array
    var locations = [];

    locations.push(bio.contactInfo.location);

    education.schools.forEach(function(school){
      locations.push(school.location);
    });

    work.jobs.forEach(function(job){
      locations.push(job.location);
    });

    return locations;
  }

  function createMapMarker(placeData) {

    var lat = placeData.geometry.location.lat(); 
    var lon = placeData.geometry.location.lng(); 
    var name = placeData.formatted_address;  
    var bounds = window.mapBounds;  

    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
    });

    bounds.extend(new google.maps.LatLng(lat, lon));
    map.fitBounds(bounds);
    map.setCenter(bounds.getCenter());
  }

  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  function pinPoster(locations) {

     var service = new google.maps.places.PlacesService(map);

      locations.forEach(function(place){

      var request = {
        query: place
      };

       service.textSearch(request, callback);
    });
  }

  window.mapBounds = new google.maps.LatLngBounds();

  locations = locationFinder();

  pinPoster(locations);

}

window.addEventListener('load', initializeMap);

window.addEventListener('resize', function(e) {
  map.fitBounds(mapBounds);
});

 //  This is to hide or show buttons
$(document).ready(function(){
    $("#hide1").click(function(){
        $(".bio-entry").hide();
        $("#alliance-flag").show();
        $("#hide1").hide();
        $("#show1").show();
        $("#hide2").hide();
        $("#show2").show();
        $("#hide3").hide();
        $("#show3").show();
        $("#hide4").hide();
        $("#show4").show();
    });
    $("#show1").click(function(){
        $(".bio-entry").show();
        $(".work-entry").hide();
        $(".project-entry").hide();
        $(".education-entry").hide();
        $("#alliance-flag").hide();
        $("#show1").hide();
        $("#hide1").show();
        $("#hide2").hide();
        $("#show2").show();
        $("#hide3").hide();
        $("#show3").show();
        $("#hide4").hide();
        $("#show4").show();
    });
});

$(document).ready(function(){
    $("#hide2").click(function(){
        $(".work-entry").hide();
        $("#alliance-flag").show();
        $("#show1").show();
        $("#hide1").hide();
        $("#hide2").hide();
        $("#show2").show();
        $("#hide3").hide();
        $("#show3").show();
        $("#hide4").hide();
        $("#show4").show();
    });
    $("#show2").click(function(){
        $(".bio-entry").hide();
        $(".work-entry").show();
        $(".project-entry").hide();
        $(".education-entry").hide();
        $("#alliance-flag").hide();
        $("#show1").show();
        $("#hide1").hide();
        $("#hide2").show();
        $("#show2").hide();
        $("#hide3").hide();
        $("#show3").show();
        $("#hide4").hide();
        $("#show4").show();
    });
});

$(document).ready(function(){
    $("#hide3").click(function(){
        $(".project-entry").hide();
        $("#alliance-flag").show();
        $("#show1").show();
        $("#hide1").hide();
        $("#hide2").hide();
        $("#show2").show();
        $("#hide3").hide();
        $("#show3").show();
        $("#hide4").hide();
        $("#show4").show();
    });
    $("#show3").click(function(){
        $(".bio-entry").hide();
        $(".work-entry").hide();
        $(".project-entry").show();
        $(".education-entry").hide();
        $("#alliance-flag").hide();
        $("#show1").show();
        $("#hide1").hide();
        $("#hide2").hide();
        $("#show2").show();
        $("#hide3").show();
        $("#show3").hide();
        $("#hide4").hide();
        $("#show4").show();
    });
});
$(document).ready(function(){
    $("#hide4").click(function(){
        $(".education-entry").hide();
        $("#alliance-flag").show();
        $("#show1").show();
        $("#hide1").hide();
        $("#hide2").hide();
        $("#show2").show();
        $("#hide3").hide();
        $("#show3").show();
        $("#hide4").hide();
        $("#show4").show();
    });
    $("#show4").click(function(){
        $(".bio-entry").hide();
        $(".work-entry").hide();
        $(".project-entry").hide();
        $(".education-entry").show();
        $("#alliance-flag").hide();
        $("#show1").show();
        $("#hide1").hide();
        $("#hide2").hide();
        $("#show2").show();
        $("#hide3").hide();
        $("#show3").show();
        $("#hide4").show();
        $("#show4").hide();
    });
    // other button to press...trying
    $("#contact-box-close1").click(function(){
        $("#contact-box-close1").hide();
        $("#contact-box-open1").show();
    });
    $("#contact-box-open1").click(function(){
        $("#contact-box-open1").hide();
        $("#contact-box-close1").show();
    });
    $("#contact-box-close2").click(function(){
        $("#contact-box-close2").hide();
        $("#contact-box-open2").show();
        $("#skilled1").empty(HTMLskillsStart);
        $("#skilled1").append(contactOpening);
        $("#skills").hide();
        $("#skill-level").hide();
    });
    $("#contact-box-open2").click(function(){
        $("#contact-box-open2").hide();
        $("#contact-box-close2").show();
        $("#skilled1").empty(contactOpening);
        $("#skilled1").append(HTMLskillsStart);
        $("#skills").show();
        $("#skill-level").show();
    });
});