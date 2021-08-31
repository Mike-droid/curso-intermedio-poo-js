function isObject(subject) {
  return typeof subject === 'object' && subject !== null;
}

function isArray(subject) {
  return Array.isArray(subject);
}

function deepCopy(subject) {
  let copySubject;

  const subjectIsArray = isArray(subject);
  const subjectIsObject = isObject(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for(key in subject) {
    const keyIsObject = isObject(subject[key]);

    //*if else - if else
    keyIsObject ? copySubject[key] = deepCopy(subject[key]) : subjectIsArray ? copySubject.push(subject[key]) : copySubject[key] = subject[key];
  }

  return copySubject;
}

function requiredParam(param) {
  throw new Error(`Missing required parameter: ${param}`);
}

function createStudent({
  name = requiredParam('name'),
  email = requiredParam('email'),
  age,
  twitter,
  facebook,
  instagram,
  approvedCourses = [],
  learningPaths = [],
} = {} ) {
  const private = {
    "_name": name
  };

  const public = {
    email,
    age,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      facebook,
      instagram
    },
    changeName(newName) {
      private["_name"] = newName;
    },
    readName() {
      return private["_name"];
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
  name: 'Juan',
  email: 'juan@gmail.com',
  age: 20,
  twitter: '@fjuandc',
})