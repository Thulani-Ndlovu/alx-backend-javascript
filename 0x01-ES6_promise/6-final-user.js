import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((data) => {
    const array = [];
    for (const idx of data) {
      array.push({ status: idx.status, value: idx.value || idx.reason });
    }
    return array;
  });
}
