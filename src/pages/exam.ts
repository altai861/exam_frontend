import { getExam } from "../service/exam";

export async function examPage(examId: string) {
    const app = document.getElementById("app");

    if (app) {
        const exam = await getExam(examId);
        app.innerHTML = JSON.stringify(exam);
    }
}