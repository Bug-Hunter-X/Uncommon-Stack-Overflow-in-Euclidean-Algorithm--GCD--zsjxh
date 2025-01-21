function foo(a, b) {
  if (a === 0 && b === 0) {
    return 0; // Handle the case where both a and b are 0
  } else if (a === 0) {
    return b;
  }
  return foo(b % a, a);
}