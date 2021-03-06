
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<h2>%data%</h2>';

var HTMLcontactInfo = '<li class="flex-item"><span class="red-text">%title%</span><span class="white-text"><a href="%link%">%data%</a></span></li>';
var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message"><hr>%data%<hr></span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skill Set :</h3>';
var HTMLskills = '<ul id="eachSkill"><span class="lite-blue-text">%data%</span></ul>';
var HTMLskillRow = '<div class="flex-box skill-level"></div>';
var HTMLskillLevel = '<div class="skill-box"></div>';
var HTMLskillLevel0 = '<div class="unskill-box"></div>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#" class="shadow">%data%</a>';
var HTMLworkTitle = '<a>%data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p>%data%</p>';
var HTMLprojectImage = '<div class="project-img"><img class="img-responsive" src="%data%"></div>';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%</a>';
var HTMLschoolDegree = '<a>%data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<p>Major: %data%</p>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%</a>';
var HTMLonlineSchool = '<a>%data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<a href="#">%data%</a></br>';

var HTMLaboutmeStart = '<div class="bio-entry"></div>';
var aboutMeheader = '<h2>%data%</h2>';
var HTMLaboutMedetails = '<ul><span class="lite-blue-text">%title%</span><span class="white-text">%data%</span></ul>';
var referenceName = '<ul><a class="shadow">%data%</a></ul>';
var referenceTitle = '<ul><a>%data%</a></ul>';
var referenceRelation = '<ul><p>%data%</p></ul>';

var internationalizeButton = '<button id="Internationalize" class="button"></button>';
var googleMap = '<div id="map"></div>';


$(document).ready(function() {
  $('#Internationalize').click(function() {
    var iName = inName() || function(){};
    $('#name').html(iName);  
  });
});

var map;    

function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  function locationFinder() {

    // initializes an empty array
    var locations = [];

    locations.push(bio.contactMethod.details);

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

window.addEventListener('resize', function(e) {
  map.fitBounds(mapBounds);
})
};

 //  This is to hide or show buttons
$(document).ready(function(){
    $("#hide1").click(function(){
        $(".bio-entry").hide();
        $("#alliance-flag, #show1").show();
        $("#hide1").hide();
    });
    $("#show1").click(function(){
        $(".bio-entry").show();
        $(".work-entry, .project-entry, .education-entry, #alliance-flag, #mapDiv, #map").hide();
        $("#hide1, #show2, #show3, #show4, #show5").show();
        $("#show1, #hide2, #hide3, #hide4, #hide5").hide();
    });
    $("#hide2").click(function(){
        $(".work-entry").hide();
        $("#alliance-flag, #show2").show();
        $("#hide2").hide();
    });
    $("#show2").click(function(){
        $(".work-entry").show();
        $(".bio-entry, .project-entry, .education-entry, #alliance-flag, #mapDiv, #map").hide();
        $("#show1, #hide2, #show3, #show4, #show5").show();
        $("#hide1, #show2, #hide3, #hide4, #hide5").hide();
    });
    $("#hide3").click(function(){
        $(".project-entry").hide();
        $("#alliance-flag, #show3").show();
        $("#hide3").hide();
    });
    $("#show3").click(function(){
        $(".project-entry").show();
        $(".bio-entry, .work-entry, .education-entry, #alliance-flag, #mapDiv, #map").hide();
        $("#show1, #show2, #hide3, #show4, #show5").show();
        $("#hide1, #hide2, #show3, #hide4, #hide5").hide();
    });
   $("#hide4").click(function(){
        $(".education-entry").hide();
        $("#alliance-flag, #show4").show();
        $("#hide4").hide();
    });
    $("#show4").click(function(){
        $(".education-entry").show();
        $(".bio-entry, .work-entry, .project-entry, #alliance-flag, #mapDiv, #map").hide();
        $("#show1, #show2, #show3, #hide4, #show5").show();
        $("#hide1, #hide2, #hide3, #show4, #hide5").hide();
    });
    $("#hide5").click(function(){
        $("#mapDiv, #map, #hide5").hide();
        $("#alliance-flag, #show5").show();
    });
    $("#show5").click(function(){
        $("#mapDiv, #map").show();
        $(".bio-entry, .work-entry, .project-entry, .education-entry, #alliance-flag").hide();
        initializeMap();
        $("#show1, #show2, #show3, #show4, #hide5").show();
        $("#hide1, #hide2, #hide3, #hide4, #show5").hide();
    });
    $("#not-yet").click(function(){
        $("#not-yet").hide();
        $("#not-yet1").show();
    });
    $("#not-yet1").click(function(){
        $("#not-yet").show();
        $("#not-yet1").hide();
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
    var contactOpening = HTMLskillsStart.replace("Skill Set :", 
    "Contact Information:");
    $("#phone-close").click(function(){
        $("#contact-box-close2").hide();
        $("#contact-box-open2").show();
        $("#skilled1").empty(HTMLskillsStart);
        $("#skilled1").append(contactOpening);
        $("#skills").hide();
        $("#skill-level").hide();
    });
    $("#phone-open").click(function(){
        $("#contact-box-open2").hide();
        $("#contact-box-close2").show();
        $("#skilled1").empty(contactOpening);
        $("#skilled1").append(HTMLskillsStart);
        $("#skills").show();
        $("#skill-level").show();

    });
});