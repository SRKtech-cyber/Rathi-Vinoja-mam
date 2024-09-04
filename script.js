document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz');

    const questions = [
        {
            lesson: "What is the primary function of the CPU in a computer?",
            options: ["Processing data", "Storing data", "Displaying data"],
            answer: "Processing data"
        },
        {
            lesson: "Which of the following is a programming language?",
            options: ["Python", "English", "Spanish"],
            answer: "Python"
        },
        {
            lesson: "What does the acronym 'URL' stand for?",
            options: ["Uniform Resource Locator", "Universal Resource Link", "Unified Resource Locator"],
            answer: "Uniform Resource Locator"
        }
    ];

    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `
            <p class="question-text">${q.lesson}</p>
            ${q.options.map(option => `
                <button onclick="checkAnswer('${q.answer}', '${option}')">${option}</button>
            `).join('')}
        `;
        quizContainer.appendChild(questionDiv);
    });
});

function checkAnswer(correctAnswer, selectedAnswer) {
    if (correctAnswer === selectedAnswer) {
        alert('Correct! Well done.');
    } else {
        alert('Try again!');
    }
}
