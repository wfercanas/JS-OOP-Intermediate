function isArray(element) {
  return Array.isArray(element);
}

function requiredParam(param) {
  throw new Error(`${param} es obligatorio`);
}

class LearningPath {
  constructor({ name = requiredParam("name"), courses = [] }) {
    this.name = name;
    this.courses = courses;
  }
}

class Student {
  #learningPaths = [];

  constructor({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    approvedCourses = [],
    learningPaths = [],
    twitter,
    facebook,
    instagram,
  }) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.approvedCourses = approvedCourses;
    this.socialMedia = {
      twitter,
      facebook,
      instagram,
    };

    if (!isArray(learningPaths)) {
      console.warn("Learning Paths no es un array");
    } else {
      for (lp in learningPaths) {
        if (!(learningPaths[lp] instanceof LearningPath)) {
          console.warn(`${learningPaths[lp]} no es un verdadero LearningPath`);
          return;
        } else {
          this.#learningPaths.push(learningPaths[lp]);
        }
      }
    }
  }

  get learningPaths() {
    return this.#learningPaths;
  }

  set learningPaths(newLearningPath) {
    if (newLearningPath instanceof LearningPath) {
      this.#learningPaths.push(newLearningPath);
    } else {
      console.warn(`${newLearningPath} no es un verdadero LearningPath`);
    }
  }
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
