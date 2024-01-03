export default function getFullResponseFromAPI(success) {
  const response = {
    status: '200',
    body: 'Success',
  };
  const promise = new Promise(((resolve, reject) => {
    if (success) {
      resolve(response);
    } else {
      reject(Error('The fake API is not working currently'));
    }
  }));
  return promise;
}
