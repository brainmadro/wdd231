let courses = [
  {
    subject: "CSE",
    number: 110,
    title: "Introduction to Programming",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.",
    technology: ["Python"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 130,
    title: "Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.",
    technology: ["HTML", "CSS"],
    completed: true,
  },
  {
    subject: "CSE",
    number: 111,
    title: "Programming with Functions",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.",
    technology: ["Python"],
    completed: true,
  },
  {
    subject: "CSE",
    number: 210,
    title: "Programming with Classes",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.",
    technology: ["C#"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 131,
    title: "Dynamic Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 231,
    title: "Frontend Web Development I",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: false,
  },
];

const $hamButton = document.querySelector('#menu');
const $navigation = document.querySelector('header nav');
const $certificateCards = document.querySelector(".certificate_cards");
const $filters = document.querySelectorAll(".certificate_filters button");
const $dialog = document.querySelector("dialog");

$hamButton.addEventListener('click', () => {
	$navigation.classList.toggle('open');
	$hamButton.classList.toggle('open');
});

courses = courses.map((course) => {
	const $container = document.createElement("div");
  $container.classList.add("card");
	
  if (course.completed) $container.classList.add("completed");
	
  $container.textContent = `${course.subject} ${course.number}: C${course.credits}`;
  $container.addEventListener('click', () => {
    displayModal(course)
  })
	
  return {
		...course,
    HTMLElement: $container,
  };
});

getCreditsRequired(courses)

courses.forEach((course) => {
	$certificateCards.appendChild(course.HTMLElement);
});

$filters.forEach((element) => {
  element.addEventListener("click", (event) => {
    let filteredCourses = courses.filter(
      (course) => course.subject.toLowerCase() == event.target.dataset.filter
    );
		
		filteredCourses = (filteredCourses.length == 0) ? courses : filteredCourses

    $certificateCards.innerHTML = "";
    filteredCourses.forEach((course) => {
      $certificateCards.appendChild(course.HTMLElement);
    });
		
		getCreditsRequired(filteredCourses)
  });
});

function getCreditsRequired(courses) {
	const creditsRequired = courses.filter(x => !x.completed).reduce((acc, cur) => {
		return acc + cur.credits
	}, 0)
	
	document.querySelector('#total_credits').textContent = creditsRequired
}

function displayModal(course) {
  $dialog.innerHTML = '';
  $dialog.innerHTML = `
    <div class="header">
      <button id="closeModal">❌</button>
      <h2>${course.subject} ${course.number}</h2>
      <h3>${course.title}</h3>
    </div>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
  `;
  $dialog.showModal();
  
  closeModal.addEventListener("click", () => {
    $dialog.close();
  });
}