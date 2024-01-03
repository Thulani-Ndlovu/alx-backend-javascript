export default function loadBalancer(chinaDownload, USDownload) {
  const promise = Promise.race([chinaDownload, USDownload]);
  return promise;
}
