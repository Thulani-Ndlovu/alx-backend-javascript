export default function signUpUser(firstName, lastName) {
  const promise = Promise.resolve({
    firstName: `${firstName}`,
    lastName: `${lastName}`,
  });
  return promise;
}
