function logout() {
  fetch('/api/users/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  })
  .then(function() {
    document.location.replace('/');
  })
  .catch(err => {
    console.log(err);
  })
}

document.querySelector("#logout").addEventListener('submit', logout);