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

const studentBase = {
  name: undefined,
  email: undefined,
  age: undefined,
  approvedCourses: undefined,
  learningPaths: undefined,
  socialMedia: {
    twitter: undefined,
    instagram: undefined,
    facebook: undefined,
  },
};

const juan = deepCopy(studentBase);
Object.seal(juan);
Object.isSealed(juan);

juan.name = "Juanito";
