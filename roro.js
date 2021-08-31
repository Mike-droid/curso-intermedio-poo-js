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
  name = requiredParam('name'), //Mostará error si está vacío
  email = requiredParam('email'),
  age,
  twitter,
  facebook,
  instagram,
  approvedCourses = [], //valor por defecto
  learningPaths = [], //valor por defecto
} = {} /*Por defecto es un objeto vacío*/ ) {
  return {
    name,
    email,
    age,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      facebook,
      instagram
    },
  };
}

const juan = createStudent({
  name: 'Juan',
  email: 'juan@gmail.com',
  age: 20,
  twitter: '@fjuandc',
})