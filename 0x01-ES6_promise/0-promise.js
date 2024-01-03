export default function getResponseFromAPI() {
  let successful = true;
  const promise = new Promise(((resolve, reject) => {
    if (successful) {
      resolve('Successful');
    } else {
      successful = false;
      reject(Error('Unsuccessful'));
    }
  }));

  return promise;
}
