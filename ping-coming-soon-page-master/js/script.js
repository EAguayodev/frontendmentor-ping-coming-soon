const email = document.getElementById('email');
const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault();

    const email = form['email'];
    const emailValue = email.value;
    const small = form.querySelector('small');

    if (!emailValue) {
      // say its empty
      email.classList.add('error');
      email.innerText = 'Email cannot be blank';
      small.style.display = 'inline-block';
    } else if (!validEmail(emailValue)) {
      // say its invalid
      email.classList.add('error');
      email.innerText = 'Email is invalid!';
      
    } else {
      // submit it
      email.classList.remove('error');
      email.innerText = '';
      small.style.display = 'none';
    }
});

function isvalidateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}