const obj1 = {
  a: 'a',
  b: 'b',
  c: {
    d: 'd',
    e: 'e',
  },
  editA() {
    this.a = 'AAAAA';
  }
};

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

deepCopy(obj1);