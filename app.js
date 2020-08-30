const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector(".quiz-form");
const result = document.querySelector('.result');
//console.log(form);

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswer = [form.q1.value, form.q2.value, form.q3.value,
    form.q4.value];

    // check answers
    userAnswer.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });

    // show result on page

    //const resu = document.querySelector('span');
    //resu.textContent = `${score}%`;

    //result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');

    scrollTo(0, 0);

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if (output === score) {
            clearInterval(timer);
        }
        output++;
    }, 10)

});