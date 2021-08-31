function recursiva(numerito: number): number {
  console.log(numerito);
  if (numerito < 5) {
    return recursiva(numerito + 1);
  } else {
    return 5;
  }
}

recursiva(0);