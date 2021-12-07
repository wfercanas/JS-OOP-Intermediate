function isArray(element) {
  return Array.isArray(element);
}

function requiredParam(param) {
  throw new Error(`${param} es obligatorio`);
}

function LearningPath({ name = requiredParam("name"), courses = [] }) {
  this.name = name;
  this.courses = courses;
}

function Student({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  approvedCourses = [],
  learningPaths = [],
  twitter,
  facebook,
  instagram,
} = {}) {
  if (!isArray(learningPaths)) {
    console.warn("Learning Paths no es un array");
  } else {
    for (lp in learningPaths) {
      if (!(learningPaths[lp] instanceof LearningPath)) {
        console.warn(`${learningPaths[lp]} no es un verdadero LearningPath`);
        return;
      }
    }
  }

  this.name = name;
  this.email = email;
  this.age = age;
  this.approvedCourses = approvedCourses;
  this.learningPaths = learningPaths;
  this.socialMedia = {
    twitter,
    facebook,
    instagram,
  };
}

const web = new LearningPath({
  name: "Web Development",
});

const juan = new Student({
  name: "Juan",
  age: 18,
  email: "juanito@frijolitos.com",
  twitter: "fjuandc",
}); // {}
