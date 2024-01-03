export default function uploadPhoto(filename) {
  const promise = Promise.reject(
    new Error(`${filename} cannot be processed`),
  );
  return promise;
}
