export default function getFullResponseFromAPI(success) {
  const promise = new Promise(((resolve, reject) => {
    const response = {
      status: '200',
      body: 'Success',
    };
    if (success === true) {
      resolve(response);
    } else {
      reject(Error('The fake API is not working currently'));
    }
  }));
  return promise;
}
