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

const studentBase = {
  name: undefined,
  email: undefined,
  age: undefined,
  approvedCourses: undefined,
  learningPaths: undefined,
  socialMedia: {
    facebook: undefined,
    twitter: undefined,
    instagram: undefined,
  }
};

const juan = deepCopy(studentBase);
Object.seal(juan); //* Ninguna propiedad del objeto Juan se podrá eliminar
Object.isSealed(juan); //* Pregunta si tiene todas sus propiedades protegidas
Object.isFrozen(juan); //* Pregunta si tiene todas sus propiedades protegidas y además no se pueden agregar otras