const regForm = document.querySelector('#reg-form');
const logForm = document.querySelector('#log-form');
const pass = document.querySelector('#password');
const passCheck = document.querySelector('#password-check');
const regBtn = document.querySelector('.reg-btn');
const logBtn = document.querySelector('.log-btn');
const container = document.querySelector('.card');
const buyBtn = document.querySelector('.btn-buy');

// слушатель рег-формы, если она есть (т.е. пользователь на рег-странице)
if (regForm) {
  regForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    // удаление надписи с ошибкой, если она осталась с прошлого раза
    const paswErr = document.querySelector('.pasw-err');
    if (paswErr) paswErr.remove();

    // проверка соответствия паролей
    if (pass.value !== passCheck.value) {
      const errMsg = '<div class="alert alert-danger pasw-err">Пароли не совпадают, переделай</div>';
      regBtn.insertAdjacentHTML('beforebegin', errMsg);
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

      const data = await response.json();
      if (data.registration === false) {
        const errMsg = '<div class="alert alert-danger pasw-err">Такой email уже зарегистрирован, переделай</div>';
        regBtn.insertAdjacentHTML('beforebegin', errMsg);
      } else {
        window.location.href = '/';
      }
    }
  });
}


// слушатель лог-формы
if (logForm) {
  logForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    // удаление надписи с ошибкой, если она осталась с прошлого раза
    const paswErr = document.querySelector('.pasw-err');
    if (paswErr) paswErr.remove();

    // проверка пользователя
    const { method, action, email, password } = event.target;

    const response = await fetch(action, {
      method,
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });

    const data = await response.json();
    console.log(data)
    if (data.login === false) {
      const errMsg = '<div class="alert alert-danger pasw-err">Не тот email или пароль, угадывай снова</div>';
      logBtn.insertAdjacentHTML('beforebegin', errMsg);
    } else {
      window.location.href = '/';
    }
  });
}

// покупка при нажатии на "Выкупить"
buyBtn.addEventListener('click', async (event) => {
  event.preventDefault();
  const { id } = event.target;
  console.log(id);

  const response = await fetch(`/${id}`, { method: 'delete' })
  const data = await response.json()
  if (data.delete) {
    window.location.href = '/';
  }
})
