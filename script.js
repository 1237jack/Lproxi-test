document.querySelector('.button-confirm').addEventListener('click', function(event) {
  event.preventDefault();

  const set1dset1 = document.querySelector('input[name="set1dset1"]').value;
  const set2dset2 = document.querySelector('input[name="set2dset2"]').value;

  // Check if the username and password match
  if (set1dset1 === 'Admin' && set2dset2 === 'Rockclimbing2024') {
    sessionStorage.setItem('loggedIn', 'true'); // Store the login state
    window.location.href = 'dashboard.html'; // Redirect to protected page
  } else {
    alert('Invalid username or password!');
  }
});
