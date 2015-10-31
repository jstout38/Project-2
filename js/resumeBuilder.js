/*
This is empty on purpose! Your code to build the resume will go here.
 */

var work = {
	"jobs" : [
		{
			"employer" : "Neuse Regional Library",
			"title" : "Reference Librarian and Grants Specialist",
			"location" : "Kinston, NC",
			"dates" : "October 2006 - present",
			"description" : "Managed the Library's integrated library system, as well as a migration to the Evergreen open source integrated library system; wrote proposals which were awarded over $1,000,000 from various sources, including government, corporate, and private foundation sources; assisted in leading several strategic library initiatives with library consultants funded by LSTA grant funding, including the development of a new technology plan and a new five-year strategic plan; completed the Library’s annual USAC E-Rate proposal and all necessary forms for reimbursement; assisted with two library renovation projects, while serving on the Building Committee for the second and coordinating communications between the owner and architect; implemented several new information technology systems funded by grant funding, including an RFID automated system, time and print management software for public computers, network upgrades, and a mobile training lab.",
			"url" : "http://www.neuselibrary.org"
		}
	]
};

var projects = {
	"projects" : [
		{
			"title" : "Portfolio",
			"dates" : "July 2015",
			"description" : "Interactive Portfolio Using Bootstrap Framework",
			"images" : ["images/project1-1.png", "images/project1-2.png"],
			"url" : "http://www.github.com/jstout38/Project-1"
		},
		{
			"title" : "Resume",
			"dates" : "August 2015",
			"description" : "Interactive Resume Using jQuery",
			"images" : ["images/project2-1.png", "images/project2-2.png"],
			"url" : "http://www.github.com/jstout38/Project-2"
		},
		{
			"title" : "Arcade Clone",
			"dates" : "August 2015",
			"description" : "Clone of the Popular Game Frogger (Artwork provided by Udacity)",
			"images" : ["images/Project3-1.png", "images/Project3-2.png"],
			"url" : "http://www.github.com/jstout38/Project-2"
		},
		{
			"title" : "Website Optimization",
			"dates" : "September 2015",
			"description" : "Optimization of an Existing Website with CSS Background Animations",
			"images" : ["images/Project4-1.png", "images/Project4-2.png"],
			"url" : "http://www.github.com/jstout38/Project-2"
		},
		{
			"title" : "Neighborhood Map",
			"dates" : "September 2015",
			"description" : "Neighborhood Map of Local Restaurants Using Knockout Framework annd Google Maps and Yelp APIs",
			"images" : ["images/Project5-1.png", "images/Project5-2.png"],
			"url" : "http://www.github.com/jstout38/Project-2"
		},
		{
			"title" : "Calorie Counter",
			"dates" : "October 2015",
			"description" : "Calorie Counter Web App Developed Using Backbone Framework",
			"images" : ["images/Project5-2-1.png", "images/Project5-2-2.png"],
			"url" : "http://www.github.com/jstout38/Project-2"
		},
		{
			"title" : "Feedreader Testing",
			"dates" : "October 2015",
			"description" : "Testing of Existing Feedreader App Using Jasmine",
			"images" : ["images/Project6-1.png", "images/Project6-2.png"],
			"url" : "http://www.github.com/jstout38/Project-2"
		}
	]
};

var bio = {
	"name" : "Justin Stout",
	"role" : "Web Developer",
	"welcomeMessage" : "I am a front-end developer and certified professional librarian with over nine years’ experience of project and integrated library system management seeking a front-end developer position. I have practical project experience with the latest front-end development technologies and standards and my background gives me a diverse background that will help me succeed in this new field.",
	"contacts" : {
		"mobile" : "252-525-0115",
		"email" : "jstout38@gmail.com",
		"github" : "jstout38",
		"twitter" : "@JustinMStout",
		"location" : "Kinston, NC"
	},
	"bioPic" : "images/picture.jpg",
	"skills" : ["HTML", "CSS", "Javascript", "jQuery", "Bootstrap", "Backbone", "Knockout", "Jasmine", "Git", "Linux Environments"]
};

var education = {
	"schools" : [
		{
			"name" : "Duke University",
			"location" : "Durham, NC",
			"degree" : "B.S.",
			"majors" : ["Economics"],
			"dates" : "2006",
			"url" : "http://www.duke.edu"
		},
		{
			"name" : "North Carolina Central University",
			"location" : "Durham, NC",
			"degree" : "M.L.S.",
			"majors" : ["Library Science"],
			"dates" : "2014",
			"url" : "http://www.ncsu.edu"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Front-End Developer Nanodegree",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "http://www.udacity.com"
		}
	]
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name + " ");
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedLocation);
	var formattedPicture = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedPicture);
	$("#header").append(formattedWelcome);
	$("#header").append(HTMLskillsStart);
	bio.skills.forEach(function(skill) {
		var formattedSkill = HTMLskills.replace("%data%",skill);
		$("#skills").append(formattedSkill);
	});
	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedLocation);
};

work.display = function() {
	work.jobs.forEach( function(job) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",job.employer);
		formattedEmployer = formattedEmployer.replace("#",job.url);
		var formattedTitle = HTMLworkTitle.replace("%data%",job.title);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);
		var formattedDates = HTMLworkDates.replace("%data%",job.dates);
		var formattedLocation = HTMLworkLocation.replace("%data%",job.location);
		var formattedDescription = HTMLworkDescription.replace("%data%",job.description);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	});
};


projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		formattedTitle = formattedTitle.replace("#",projects.projects[project].url);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);
		projects.projects[project].images.forEach(function(image) {
			var formattedPicture = HTMLprojectImage.replace("%data%",image);
			$(".project-entry:last").append(formattedPicture);
		});
	}
};

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		formattedName = formattedName.replace("#", education.schools[school].url);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedName + formattedDegree);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedLocation);
		education.schools[school].majors.forEach(function (major) {
			var formattedMajor = HTMLschoolMajor.replace("%data%",major);
			$(".education-entry:last").append(formattedMajor);
		});
	}
	$("#education").append("<br>");
	$("#education").append(HTMLonlineClasses);
	for (course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		formattedTitle = formattedTitle.replace("#", education.onlineCourses[course].url);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		formattedURL = formattedURL.replace("#", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedTitle + formattedSchool);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedURL);
	}
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
