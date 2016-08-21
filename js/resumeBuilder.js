 $(".container").prepend(internationalizeButton);
 var bio = {
	"name" : "Scott J. Davis",
	"role" : "Web Developer",
	"contacts" : {
		"generic" : true,
		"opening" : "Contact Information:",
		"mobile" : "508-809-0303",
		"email" : "Sdavis1985@Gmail.com",
		"twitter" : "@Scoiatael85",
		"github" : "Scoiatael85",
		"slack" : "#front-end_web-head",
		"location" : "201 Knight Ave Attleboro, MA"
	},
	"biopic" : "images/Me.png",
	"welcomeMessage" : "Ready for Action! I'm hear to tear up the world of Web Design!!",
	"skills_start" : true,
	"skillLevel" : [4, 4, 3, 3, 6, 5]
};

bio.display = function() {
	var formattedRole = HTMLheaderRole.replace("%data%", 
		bio.role);
	$("#header").prepend(formattedRole);
	var formattedName = HTMLheaderName.replace("%data%", 
		bio.name);
	$("#header").prepend(formattedName);
	var contactGeneric = HTMLcontactGeneric.replace("%data%", 
		bio.contacts.generic);
	var contactMobile = HTMLmobile.replace("%data%", 
		bio.contacts.mobile);
//	$("#header").append(contactMobile);
	var contactMobile2 = HTMLmobile2.replace("%data%", 
		bio.contacts.mobile);
	$("#contact-box-open1").append(contactMobile2);
	$("#contact-box-open2").append(contactMobile2);
	var contactEmail = HTMLemail.replace("%data%", 
		bio.contacts.email);
//	$("#header").append(contactEmail);
	var contactEmail2 = HTMLemail2.replace("%data%", 
		bio.contacts.email);
	$("#contact-box-open1").append(contactEmail2);
	$("#contact-box-open2").append(contactEmail2);
	var contactTwitter = HTMLtwitter.replace("%data%", 
		bio.contacts.twitter);
	$("#contact-box-open1").append(contactTwitter);
	$("#contact-box-open2").append(contactTwitter);
	var contactGithub = HTMLgithub.replace("%data%", 
		bio.contacts.github);
	$("#contact-box-open1").append(contactGithub);
	$("#contact-box-open2").append(contactGithub);
	var contactSlack = HTMLslack.replace("%data%", 
		bio.contacts.slack);
	$("#contact-box-open1").append(contactSlack);
	$("#contact-box-open2").append(contactSlack);
	var contactLocation = HTMLlocation.replace("%data%", 
		bio.contacts.location);
	$("#contact-box-open1").append(contactLocation);
	$("#contact-box-open2").append(contactLocation);
	var formattedbioPic = HTMLbioPic.replace("%data%", 
		bio.biopic);
	$("#picture").prepend(formattedbioPic);
	var formattedMsg = HTMLwelcomeMsg.replace("%data%", 
		bio.welcomeMessage);
	var skillsStart = HTMLskillsStart.replace("%data%", 
		bio.skills_start);
    var contactOpening = HTMLskillsStart.replace("Skill Set :", 
        bio.contacts.opening);

if(bio.skillLevel.length > 0) {
	bio.skills = ["HTML", "CSS", "Javascript", "SQL", "Team Leadership", "Independant Work"];
	$("#skilled1").append(skillsStart);

	for(skilled in bio.skills) {
		var formattedskills = HTMLskills.replace("%data%", bio.skills[skilled]);
		$("#skills:last").append(formattedskills);
	}

	for(levels in bio.skillLevel) {
		$("#skill-level:last").append(HTMLskillRow);
		for(var level = 0; level < bio.skillLevel[levels]; level++){
			$(".skill-level:last").append(HTMLskillLevel);
		}
		for(var level = bio.skillLevel[levels]; level < 6; level++){
			$(".skill-level:last").append(HTMLskillLevel0);
		}
	}
}


$("#contact-box-open1").append(formattedMsg);
};
bio.display();


 var work = {
 	"start" : true,
 	"jobs": [
 		{
 			"employer" : "99 Restaurants",
 			"title" : "Assistant General Manager",
 			"dates" : "July, 2012 - Current",
 			"location" : "Attleboro, Massachussetts",
 			"description" : "I am manage a staff of 40+ employees in a high volume, casual dinning restaurant."
 		},
 		{	"employer" : "Unos Chicago Bar & Grille",
 			"title" : "Assistant General Manager",
 			"dates" : "September, 2008 - July, 2012",
 			"location" : "Portland, Maine",
 			"description" : "I am manage a staff of 40+ employees in a high volume, casual dinning restaurant."
 		},
 		{	"employer" : "Ruby Tuesday",
 			"title" : "Assistant General Manager",
 			"dates" : "August, 2004 - September, 2008",
 			"location" : "Taunton, Massachussetts",
 			"description" : "I am manage a staff of 40+ employees in a high volume, casual dinning restaurant. I am manage a staff of 40+ employees in a high volume, casual dinning restaurant. I am manage a staff of 40+ employees in a high volume, casual dinning restaurant. I am manage a staff of 40+ employees in a high volume, casual dinning restaurant. I am manage a staff of 40+ employees in a high volume, casual dinning restaurant."
 		}
 	]
};

work.display = function() {
for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var workEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var workTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var employerTitle = workEmployer + workTitle;
	var workDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);	
	var workLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var workDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

	$(".work-entry:last").append(employerTitle);
	$(".work-entry:last").append(workDates);
	$(".work-entry:last").append(workLocation);
	$(".work-entry:last").append(workDescription);
	}
};
work.display();

var projects = {
	"start"	: true,
	"porfolio" : [
		{
			"title" : "Build a Portfolio Site",
 			"dates" : "February 1st, 2016 - February 9th, 2016",
 			"description" : "Make a responsive Porfolio for Jane Doette",
 			"images" : ["images/meta-tags.jpg"]
		},
		{
 			"title" : "Responsive Blog",
 			"dates" : "February 10th, 2016 - February 14th, 2016",
 			"description" : "A fully responive blog site",
 			"images" : ["images/city.png"]
 		},
 		{
 			"title" : "Online Resume",
 			"dates" : "March 25th, 2016 - April 12th, 2016",
 			"description" : "An online resume",
 			"images" : ["images/Publication1.jpg"]
 		}
 	]
};
projects.display = function() {
 	for (pjt in projects.porfolio) {
 		$("#projects").append(HTMLprojectStart);

		var projectName = HTMLprojectTitle.replace("%data%", 
			projects.porfolio[pjt].title);
		$(".project-entry:last").append(projectName);
		var projectDates = HTMLprojectDates.replace("%data%", 
			projects.porfolio[pjt].dates);
		$(".project-entry:last").append(projectDates);
		var projectLocation = HTMLprojectDescription.replace("%data%", 
			projects.porfolio[pjt].description);
		$(".project-entry:last").append(projectLocation);

		if (projects.porfolio[pjt].images.length > 0) {
			for (image in projects.porfolio[pjt].images) {	
				var projectImage = HTMLprojectImage.replace("%data%", 
				projects.porfolio[pjt].images[image]);
				$(".project-entry:last").append(projectImage);
			}
		}
	}
};
projects.display();

var education = {
	"start"	: true,
	"schools" : [
		{
 			"name" : "Attleboro High School",
 			"degree" : "High School Diploma",
 			"dates" : "September, 2000 - May, 2004",
 			"location" : "Attleboro, MA",
 			"majors" : "I took 10 science (including AP) classes and 6 math (including AP) classes"
 		}
 	],
 	"onlineCourses" : [
 		{
 			"program" : "Udacity",
 			"title" : "Front-end Web Developer Nanodegree",
 			"dates" : "February, 2016 - October, 2016",
 			"url" : "Udacity.com"
		},
		{
			"program" : "Udemy",
			"title" : "Javascript: Understanding the Weird Parts",
 			"dates" : "March, 2016 - April, 2016",
 			"url" : "Udemy.com"			
		}
	]
};

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

 	var educationName = HTMLschoolName.replace("%data%", 
 		education.schools[school].name);
 	$(".education-entry:last").append(educationName);
 	var educationDegree = HTMLschoolDegree.replace("%data%", 
 		education.schools[school].degree);
 	$(".education-entry:last").append(educationDegree);
 	var educationDates = HTMLschoolDates.replace("%data%", 
 		education.schools[school].dates);
 	$(".education-entry:last").append(educationDates);
 	var educationLocation = HTMLschoolLocation.replace("%data%", 
 		education.schools[school].location);
 	$(".education-entry:last").append(educationLocation);
 	var educationMajors = HTMLschoolMajor.replace("%data%", 
 		education.schools[school].majors);
 	$(".education-entry:last").append(educationMajors);
 	}
};
education.display();

$(".education-entry:last").append(HTMLonlineClasses);
for (courses in education.onlineCourses) {


	var onlineName = HTMLonlineTitle.replace("%data%", 
		education.onlineCourses[courses].title);
	$(".education-entry:last").append(onlineName);
	var onlineDegree = HTMLonlineSchool.replace("%data%", 
		education.onlineCourses[courses].program);
	$(".education-entry:last").append(onlineDegree);
	var onlineDates = HTMLonlineDates.replace("%data%", 
		education.onlineCourses[courses].dates);
	$(".education-entry:last").append(onlineDates);
	var onlineLocation = HTMLonlineURL.replace("%data%", 
		education.onlineCourses[courses].url);
	$(".education-entry:last").append(onlineLocation);
}

function inName () {
	var internationalName = bio.name;
	var names = bio.name.trim().split(" ");
	console.log(names);
    names[2] = names[2].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    internationalName = names.join(" ");
    
    return internationalName;
}

 var aboutMe = {
 	"start" : true,
 	"family" : ["Wife", "Brittany", "Daughter", "Aurora"],
 	"objectives" : "Getting a new damned job!!!",
 	"interests" : ["D&D", "Charity", "Beer", "Scotch", "Cigars", "MCU"],
 	"references" : [
 		{
 			"name" : "Asta Hodge",
 			"title" : "General Manager",
 			"relationship" : "my boss",
 			"phone" : "401-301-7349",
 		},
 		{
 			"name" : "Bethany Massey",
 			"title" : "Service Manager",
 			"relationship" : "colleage",
 			"phone" : "401-741-9721",
 		},
 		{
 			"name" : "Garon Davis",
 			"title" : "Web Developer",
 			"relationship" : "Brother",
 			"phone" : "508-463-7825",
 		}
 	]
 };
	 $('#biography').append(HTMLaboutmeStart);
 	var wifeName = HTMLfamily.replace("%relation%", 
		aboutMe.family[0]).replace("%data%", aboutMe.family[1]);
 	$(".bio-entry:last").append(wifeName);
 	var ChildName = HTMLfamily.replace("%relation%", 
		aboutMe.family[2]).replace("%data%", aboutMe.family[3]);
 	$(".bio-entry:last").append(ChildName);

$("#mapDiv").append(googleMap);
