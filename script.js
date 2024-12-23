document.querySelector('.button-confirm').addEventListener('click', function(event) {
  event.preventDefault();

  const username = document.querySelector('input[name="username"]').value;
  const password = document.querySelector('input[name="password"]').value;

  // Check if the username and password match
  if (username === 'Admin' && password === 'Rockclimbing2024') {
    sessionStorage.setItem('loggedIn', 'true'); // Store the login state
    window.location.href = 'dashboard.html'; // Redirect to protected page
  } else {
    alert('Invalid username or password!');
  }
});
