function requiredParam(param) {
  throw new Error(`${param} es obligatorio`);
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
  };
  const public = {
    email,
    age,
    approvedCourses,
    learningPaths,
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
  };

  return public;
}

const juan = createStudent({
  name: "Juan",
  age: 18,
  email: "juanito@frijolitos.com",
  twitter: "fjuandc",
}); // {}
