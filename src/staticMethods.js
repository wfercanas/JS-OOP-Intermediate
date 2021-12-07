class SuperObject {
  static isObject(element) {
    return typeof element === "object";
  }

  static isArray(element) {
    return Array.isArray(element);
  }

  static deepCopy(element) {
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
}

// function SuperObject() {}
// SuperObject.deepCopy = function() {}
// SuperObject.isObject = function() {}
// SuperObject.isArray = function() {}
