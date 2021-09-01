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

function LearningPath({
  name = requiredParam('name'),
  courses = [],
}) {
  this.name = name;
  this.courses = courses;
}

function Student({
  name = requiredParam('name'),
  email = requiredParam('email'),
  age,
  twitter,
  facebook,
  instagram,
  approvedCourses = [],
  learningPaths = [],
} = {}) {

  if (isArray(learningPaths)) {
    this.learningPaths = [];

    for (learningPath in learningPaths) {
      if (learningPaths[learningPath] instanceof LearningPath) {
        this.learningPaths.push(learningPaths[learningPath]);
      }
    }
  }

  this.name = name;
  this.email = email;
  this.age = age;
  this.approvedCourses = approvedCourses;
  this.learningPaths = learningPaths;
  this.socialMedia = {
    twitter,
    facebook,
    instagram,
  };
}

const escuelaweb = new LearningPath({
  name: 'Escuela Web',
})

const escuelaData = new LearningPath({
  name: 'Escuela de Data',
})

const juan = new Student({
  name: 'Juan',
  email: 'juan@gmail.com',
  age: 20,
  twitter: '@fjuandc',
  learningPaths: [
    escuelaweb,
    escuelaData,
  ]
});