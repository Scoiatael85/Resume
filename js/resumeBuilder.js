 var bio = {
	"name" : "Scott J. Davis",
	"role" : "Web Developer",
	"contactInfo" : {
		"generic" : true,
		"opening" : "Contact Information:",
		"mobile" : "508-809-0303",
		"email" : "Sdavis1985@Gmail.com",
		"twitter" : "@Scoiatael85",
		"github" : "Scoiatael85",
		"slack" : "#front-end_web-head",
		"location" : "201 Knight Ave Attleboro, MA"
	},
	"picture" : "images/Me.png",
	"welcomeMessage" : "Ready for Action! I'm hear to tear up the world of Web Design!!",
	"skills_start" : true,
	"skills" : ["HTML", "CSS", "Javascript", "SQL", "Team Leadership", "Independant Work"],
	"skillLevel" : [4, 4, 3, 3, 6, 5]
};

	var formattedRole = HTMLheaderRole.replace("%data%", 
		bio.role);
	$("#header").prepend(formattedRole);
	var formattedName = HTMLheaderName.replace("%data%", 
		bio.name);
	$("#header").prepend(formattedName);
	var contactGeneric = HTMLcontactGeneric.replace("%data%", 
		bio.contactInfo.generic);
	var contactMobile = HTMLmobile.replace("%data%", 
		bio.contactInfo.mobile);
//	$("#header").append(contactMobile);
	var contactMobile2 = HTMLmobile2.replace("%data%", 
		bio.contactInfo.mobile);
	$("#contact-box-open1").append(contactMobile2);
	$("#contact-box-open2").append(contactMobile2);
	var contactEmail = HTMLemail.replace("%data%", 
		bio.contactInfo.email);
//	$("#header").append(contactEmail);
	var contactEmail2 = HTMLemail2.replace("%data%", 
		bio.contactInfo.email);
	$("#contact-box-open1").append(contactEmail2);
	$("#contact-box-open2").append(contactEmail2);
	var contactTwitter = HTMLtwitter.replace("%data%", 
		bio.contactInfo.twitter);
	$("#contact-box-open1").append(contactTwitter);
	$("#contact-box-open2").append(contactTwitter);
	var contactGithub = HTMLgithub.replace("%data%", 
		bio.contactInfo.github);
	$("#contact-box-open1").append(contactGithub);
	$("#contact-box-open2").append(contactGithub);
	var contactSlack = HTMLslack.replace("%data%", 
		bio.contactInfo.slack);
	$("#contact-box-open1").append(contactSlack);
	$("#contact-box-open2").append(contactSlack);
	var contactLocation = HTMLlocation.replace("%data%", 
		bio.contactInfo.location);
	$("#contact-box-open1").append(contactLocation);
	$("#contact-box-open2").append(contactLocation);
	var formattedbioPic = HTMLbioPic.replace("%data%", 
		bio.picture);
	$("#picture").prepend(formattedbioPic);
	var formattedMsg = HTMLwelcomeMsg.replace("%data%", 
		bio.welcomeMessage);
	var skillsStart = HTMLskillsStart.replace("%data%", 
		bio.skills_start);
    var contactOpening = HTMLskillsStart.replace("Skill Set :", 
        bio.contactInfo.opening);

if(bio.skills.length > 0) {
	$("#skilled1").append(skillsStart);

	var formattedskills = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedskills);
	var formattedskills = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedskills);
	var formattedskills = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedskills);
	var formattedskills = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedskills);
	var formattedskills = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedskills);
	var formattedskills = HTMLskills.replace("%data%", bio.skills[5]);
	$("#skills").append(formattedskills);
}
if(bio.skillLevel.length > 0) {
	var skills
}

$("#contact-box-open1").append(formattedMsg);

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

function displayWork () {
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
}
displayWork ();

var project = {
	"start"	: true,
	"projects" : [
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
}
project.display = function() {
 	for (pjt in project.projects) {
 		$("#projects").append(HTMLprojectStart);

		var projectName = HTMLprojectTitle.replace("%data%", 
			project.projects[pjt].title);
		$(".project-entry:last").append(projectName);
		var projectDates = HTMLprojectDates.replace("%data%", 
			project.projects[pjt].dates);
		$(".project-entry:last").append(projectDates);
		var projectLocation = HTMLprojectDescription.replace("%data%", 
			project.projects[pjt].description);
		$(".project-entry:last").append(projectLocation);

		if (project.projects[pjt].images.length > 0) {
			for (image in project.projects[pjt].images) {	
				var projectImage = HTMLprojectImage.replace("%data%", 
				project.projects[pjt].images[image]);
				$(".project-entry:last").append(projectImage);
			}
		}
	}
}
project.display ();

var education = {
	"start"	: true,
	"schools" : [
		{
 			"name" : "Attleboro High School",
 			"degree" : "High School Diploma",
 			"dates" : "September, 2000 - May, 2004",
 			"location" : "Attleboro, MA",
 			"major" : "I took 10 science (including AP) classes and 6 math (including AP) classes"
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
 	var educationMajor = HTMLschoolMajor.replace("%data%", 
 		education.schools[school].major);
 	$(".education-entry:last").append(educationMajor);
 	}
};
education.display ();

 var online_class = {
	"start"	: true,
	"schools" : [
		{
			"title" : "Front-end Web Developer Nanodregree",
			"school" : "Udacity",
 			"dates" : "February, 2016 - August, 2016",
 			"url" : "Udacity.com",
 		},
 		{
			"title" : "Javascript: Understanding the Weird Parts",
			"school" : "Udemy",
 			"dates" : "March, 2016 - April, 2016",
 			"url" : "Udemy.com",
 		}
 	]
};
$(".education-entry:last").append(HTMLonlineClasses);
for (courses in online_class.schools) {
	$("#education").append(HTMLschoolStart);


	var onlineName = HTMLonlineTitle.replace("%data%", 
		online_class.schools[courses].title);
	$(".education-entry:last").append(onlineName);
	var onlineDegree = HTMLonlineSchool.replace("%data%", 
		online_class.schools[courses].school);
	$(".education-entry:last").append(onlineDegree);
	var onlineDates = HTMLonlineDates.replace("%data%", 
		online_class.schools[courses].dates);
	$(".education-entry:last").append(onlineDates);
	var onlineLocation = HTMLonlineURL.replace("%data%", 
		online_class.schools[courses].url);
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
};

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
	 $('#biography').append(HTMLaboutmeStart)
 	var wifeName = HTMLfamily.replace("%relation%", 
		aboutMe.family[0]).replace("%data%", aboutMe.family[1]);
 	$(".bio-entry:last").append(wifeName);
 	var ChildName = HTMLfamily.replace("%relation%", 
		aboutMe.family[2]).replace("%data%", aboutMe.family[3]);
 	$(".bio-entry:last").append(ChildName);

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
