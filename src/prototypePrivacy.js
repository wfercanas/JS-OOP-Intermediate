function isArray(element) {
  return Array.isArray(element);
}

function requiredParam(param) {
  throw new Error(`${param} es obligatorio`);
}

function LearningPath({ name = requiredParam('name'), courses = [] }) {
  this.name = name;
  this.courses = courses;
}

function Student({
  name = requiredParam('name'),
  email = requiredParam('email'),
  age,
  approvedCourses = [],
  learningPaths = [],
  twitter,
  facebook,
  instagram,
} = {}) {
  this.name = name;
  this.email = email;
  this.age = age;
  this.approvedCourses = approvedCourses;
  this.socialMedia = {
    twitter,
    facebook,
    instagram,
  };

  const private = {
    _learningPaths: [],
  };

  Object.defineProperty(this, 'learningPaths', {
    get() {
      return private._learningPaths;
    },
    set(newLearningPath) {
      if (newLearningPath instanceof LearningPath) {
        private._learningPaths.push(newLearningPath);
      } else {
        console.warn(`${newLearningPath} no es un verdadero LearningPath`);
      }
    },
  });

  if (!isArray(learningPaths)) {
    console.warn('Learning Paths no es un array');
  } else {
    for (lp in learningPaths) {
      if (!(learningPaths[lp] instanceof LearningPath)) {
        console.warn(`${learningPaths[lp]} no es un verdadero LearningPath`);
        return;
      } else {
        private._learningPaths = learningPaths[lp];
      }
    }
  }
}

const web = new LearningPath({
  name: 'Web Development',
});

const juan = new Student({
  name: 'Juan',
  age: 18,
  email: 'juanito@frijolitos.com',
  twitter: 'fjuandc',
}); // {}
