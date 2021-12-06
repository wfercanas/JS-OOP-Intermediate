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
    changeName(newName) {
      private._name = newName;
    },
    readName() {
      return private._name;
    },
  };

  Object.defineProperty(public, "readName", {
    configurable: false,
    writable: false,
  });

  Object.defineProperty(public, "changeName", {
    configurable: false,
    writable: false,
  });

  return public;
}

const juan = createStudent({
  name: "Juan",
  age: 18,
  email: "juanito@frijolitos.com",
  twitter: "fjuandc",
}); // {}
