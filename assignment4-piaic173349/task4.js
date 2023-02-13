function validateEmail(email) {
  const atPosition = email.indexOf('@');
  const dotPosition = email.lastIndexOf('.');
  return atPosition > 0 && dotPosition > atPosition + 1 && email.length > dotPosition + 1;
}
