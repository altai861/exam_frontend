
export async function addExamPage() {
    const app = document.getElementById('app');

    let questionCount = 1;

    if (app) {
        app.innerHTML = "ADD EXAM"
        app.innerHTML = `
            <div>
                <button id='go-back'>Go back</button>
            </div>
            <div>

                <h2>Add Exam</h2>
                <button id='add-question'>Add Question</button>
                <form id='add-exam-form'>
                    <input type='text' placeholder='Name' id='exam-name-input' required>
                    <div id='questions'>
                        <h4>Questions</h4>
                        <input type='text' id='question-${questionCount}' placeholder='Question ${questionCount}' required><input type='text' id='answer-${questionCount}' placeholder='Answer ${questionCount}'>
                    </div>

                    <input type='submit' value='Create Exam'>
                </form>
            
            </div>

            
        `


        const goBackButton = document.getElementById("go-back");
        if (goBackButton) {
            goBackButton.addEventListener("click", () => {
                window.history.back();
            })
        }

        const addQuestionButton = document.getElementById("add-question");
        if (addQuestionButton) {
            addQuestionButton.addEventListener("click", () => {
                const questionsDiv = document.getElementById("questions");
                if (questionsDiv) {
                    questionsDiv.innerHTML += `
                        <input >
                    `
                }
            })
        }
    }
}