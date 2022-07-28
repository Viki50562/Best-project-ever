const regForm = document.querySelector('#reg-form');
const pass = document.querySelector('#password');
const passCheck = document.querySelector('#password-check');
let paswError = document.querySelector('.pasw-err');
const regBtn = document.querySelector('.reg-btn');

// слушатель рег-формы, если она есть (т.е. пользователь на рег-странице)
if (regForm) {
  regForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    // удаление надписи с ошибкой, если она осталась с прошлого раза
    // if (paswError) paswError.remove();

    // проверка соответствия паролей
    if (pass.value !== passCheck.value) {
      paswError = '<div class="alert alert-danger">Пароли не совпадают, переделай</div>';
      regBtn.insertAdjacentHTML('beforebegin', paswError);
    } else {
      const { method, action, name, email, password, phone } = event.target;

      const response = await fetch(action, {
        method,
        headers: { 'Content-Type': 'Application/json' },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          password: password.value,
          phone: phone.value,
        }),
      });

      window.location.href = '/';
    }
  });
}
