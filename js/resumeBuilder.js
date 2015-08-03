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
			"images" : []
		},
		{
			"title" : "Resume",
			"dates" : "August 2015",
			"description" : "Interactive Resume",
			"images" : ["images/website1.png", "images/website2.png"]
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
		"twitter" : "JustinMStout",
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

var formattedName = HTMLheaderName.replace("%data%",bio.name + " ");
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
	$("#skills").append(formattedSkill);
}


function displayWork() {
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

displayWork();

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

projects.display();

$(document).click(function(loc) {
	logClicks(loc.pageX, loc.pageY);
});

$("#main").append(internationalizeButton);

function inName() {
	var names = bio.name.split(" ");
	var firstLetter = names[0][0].toUpperCase();
	var restOfWord = names[0].slice(1,names[0].length);
	names[1] = names[1].toUpperCase();
	return firstLetter + restOfWord + " " + names[1];
}
