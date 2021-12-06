function isObject(element) {
  return typeof element === "object";
}

function isArray(element) {
  return Array.isArray(element);
}

function deepCopy(element) {
  let elementCopy;
  const elementIsArray = isArray(element);
  const elementIsObject = isObject(element);

  if (elementIsArray) {
    elementCopy = [];
  } else if (elementIsObject) {
    elementCopy = {};
  } else {
    return element;
  }

  for (key in element) {
    const keyIsArray = isArray(key);
    const keyIsObject = isObject(element[key]);

    if (keyIsObject && !keyIsArray) {
      elementCopy[key] = deepCopy(element[key]);
    } else if (keyIsArray) {
      elementCopy.push(element[key]);
    } else {
      elementCopy[key] = element[key];
    }
  }

  return elementCopy;
}

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
  return {
    name,
    email,
    age,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      facebook,
      instagram,
    },
  };
}

const juan = createStudent({
  name: "Juan",
  age: 18,
  email: "juanito@frijolitos.com",
  twitter: "fjuandc",
}); // {}
