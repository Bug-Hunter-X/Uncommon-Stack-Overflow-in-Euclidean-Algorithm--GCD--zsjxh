function foo(a, b) {
  if (a === 0) {
    return b;
  }
  return foo(b % a, a);
}