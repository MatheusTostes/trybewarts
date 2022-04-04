const loginBtn = document.getElementById('loginBtn');
const agreeBtn = document.getElementById('agreement');
const counter = document.getElementById('counter');
const textArea = document.getElementById('textarea');
const checkboxes = document.getElementsByClassName('checkbox');
const form = document.getElementById('evaluation-form');
const btnSubmit = document.getElementById('submit-btn');
// const btnSubmit = document.getElementById('submit-btn');

function login() {
  const email = document.getElementById('email').value;
  const pass = document.getElementById('pass').value;

  if (email === 'tryber@teste.com' && pass === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

loginBtn.addEventListener('click', login);

function disableButton() {
  const marked = document.getElementById('agreement').checked;
  const buttonStatus = document.getElementById('submit-btn');

  if (marked === false) {
    buttonStatus.disabled = true;
  } else {
    buttonStatus.disabled = false;
  }
}

agreeBtn.addEventListener('click', disableButton);

function freeSize() {
  const actualLength = textArea.value.length;
  const freeLength = 500 - actualLength;
  console.log(freeLength);

  counter.innerText = freeLength;
}

textArea.addEventListener('input', freeSize);

// function toggleSubject(e) {
//   // let hasToggle = event
//   // console.log(e.target.checked);
//   if (e.target.checked) {
//     e.target.classList.add('subject');
//   } else {
//     e.target.classList.remove('subject');
//   }

//   console.log(e.target);
// }

// for (let element of checkboxes) {
//   // console.log(element);
//   element.addEventListener('click', toggleSubject);
// }

function getName() {
  const name = document.getElementById('input-name').value;
  return name;
}

function getLastName() {
  const lastName = document.getElementById('input-lastname').value;
  return lastName;
}

function getEmail() {
  const email = document.getElementById('input-email').value;
  return email;
}

function getHouse() {
  const house = document.getElementById('house').value;
  return house;
}

function getFamily() {
  let family;
  const radioFamily = document.getElementsByClassName('radio-family');
  if (radioFamily[0].checked) {
    family = radioFamily[0].value;
  } else if (radioFamily[1].checked) {
    family = radioFamily[1].value;
  } else if (radioFamily[2].checked) {
    family = radioFamily[2].value;
  }
  return family;
}

function getDisciplines() {
  let disciplines = '';
  for (let index = 0; index < checkboxes.length; index += 1) {
    const box = checkboxes[index];
    const boxValue = box.value;
    if (box.checked && disciplines.length === 0) {
      disciplines += `${boxValue}`;
    } else if (box.checked) {
      disciplines += `, ${boxValue}`;
    }
  }
  return disciplines;
}

function getEvaluation() {
  const rates = document.getElementsByClassName('eval');
  let evaluation = '0';
  for (let index = 0; index < rates.length; index += 1) {
    if (rates[index].checked) {
      evaluation = rates[index].value;
    }
  }
  return evaluation;
}

function literalForm(student) {
  const obs = document.getElementById('textarea').value;
  const innerForm = `
                    <p>Nome: ${student.name} ${student.lastName}</p>
                    <p>Email: ${student.email}</p>
                    <p>Casa: ${student.house}</p>
                    <p>Família: ${student.family}</p>
                    <p>Matérias: ${student.disciplines}</p>
                    <p>Avaliação: ${student.evaluation}</p>
                    <p>Observações: ${obs}</p>
                    `;
  return innerForm;
}

function submitForm() {
  const student = {
    name: getName(),
    lastName: getLastName(),
    email: getEmail(),
    house: getHouse(),
    family: getFamily(),
    disciplines: getDisciplines(),
    evaluation: getEvaluation(),
  };

  console.log(student.evaluation);

  const innerForm = literalForm(student);
  form.innerHTML = '';
  form.insertAdjacentHTML('afterbegin', innerForm);
}

btnSubmit.addEventListener('click', submitForm);
