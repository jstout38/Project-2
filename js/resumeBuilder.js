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
			"description" : "Performed professional and assisted with administrative library duties"
		}
	]
};

var projects = {
	"projects" : [
		{
			"title" : "Portfolio",
			"dates" : "July 2015",
			"description" : "Interactive Portfolio",
			"images" : ["images/website1.png", "images/website2.png"]
		},
		{
			"title" : "Resume",
			"dates" : "August 2015",
			"description" : "Interactive Resume",
			"images" : []
		}
	]
};

var bio = {
	"name" : "Justin Stout",
	"role" : "Web Developer",
	"welcomeMessage" : "Welcome to my resume!",
	"contacts" : {
		"mobile" : "252-525-0115",
		"email" : "jstout38@gmail.com",
		"github" : "jstout38",
		"twitter" : "@JustinMStout",
		"location" : "Kinston, NC"
	},
	"skills" : ["HTML", "CSS", "Javascript", "jQuery"]
};

var education = {
	"schools" : [
		{
			"name" : "Duke University",
			"location" : "Durham, NC",
			"degree" : "B.S.",
			"majors" : ["Economics"],
			"dates" : "2001 - 2006",
			"url" : "http://www.duke.edu"
		},
		{
			"name" : "North Carolina Central University",
			"location" : "Durham, NC",
			"degree" : "M.A.",
			"majors" : ["Library Science"],
			"dates" : "2010 - 2014",
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
	var formattedName = HTMLheaderName.replace("%data%",bio.name + " ");
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedLocation);
	$("#header").append(HTMLskillsStart);
	for (skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}
}

work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	}
}


projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);
		for (image in projects.projects[project].images) {
			var formattedPicture = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedPicture);
		}
	}
}

bio.display();
work.display();
projects.display();

$("#main").append(internationalizeButton);

function inName() {
	var names = bio.name.split(" ");
	var firstLetter = names[0][0].toUpperCase();
	var restOfWord = names[0].slice(1,names[0].length);
	names[1] = names[1].toUpperCase();
	return firstLetter + restOfWord + " " + names[1];
}
