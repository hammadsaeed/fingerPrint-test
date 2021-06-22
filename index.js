const appContainer = document.getElementById('text');

if(appContainer) {
  const fpPromise = FingerprintJS.load()

  fpPromise
    .then(fp => fp.get())
    .then(result => {
      // This is the visitor identifier:
      const token = result.visitorId
      appContainer.innerHTML = 'token:' + token
      console.log(token);
    })
    .catch(error => console.error(error))
}