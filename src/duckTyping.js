function isArray(element) {
  return Array.isArray(element);
}

function requiredParam(param) {
  throw new Error(`${param} es obligatorio`);
}

function createLearningPath({ name = requiredParam("name"), courses = [] }) {
  const private = {
    _name: name,
    _courses: courses,
  };

  const public = {
    get name() {
      return private._name;
    },

    set name(newName) {
      if (newName) {
        private._name = newName;
      } else {
        console.warn("Tu nombre debe tener al menos un caracter");
      }
    },

    get courses() {
      return private._courses;
    },
  };

  return public;
}

function createStudent({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  approvedCourses = [],
  learningPaths = [],
  twitter,
  facebook,
  instagram,
} = {}) {
  const private = {
    _name: name,
    _learningPaths: learningPaths,
  };
  const public = {
    email,
    age,
    approvedCourses,
    socialMedia: {
      twitter,
      facebook,
      instagram,
    },

    get name() {
      return private._name;
    },

    set name(newName) {
      if (newName) {
        private._name = newName;
      } else {
        console.warn("Tu nombre debe tener al menos un caracter");
      }
    },

    get learningPaths() {
      return private._learningPaths;
    },

    set learningPaths(newLearningPath) {
      if (!newLearningPath.name) {
        console.warn("Tu Learning Path  no tiene propiedad name");
        return;
      } else if (!newLearningPath) {
        console.warn("Tu Learning Path no tiene courses");
        return;
      } else if (!isArray(newLearningPath.courses)) {
        console.warn("Tu Learning Path no es una lista de cursos");
        return;
      } else {
        private._learningPaths.push(newLearningPath);
      }
    },
  };

  return public;
}

const juan = createStudent({
  name: "Juan",
  age: 18,
  email: "juanito@frijolitos.com",
  twitter: "fjuandc",
}); // {}
