import { checkAccessToken } from "../service/jwt.ts";
import { getExams } from "../service/exam.ts";

export async function homePage() {
    const app = document.getElementById("app");

    const accessToken = localStorage.getItem("accessToken");
    const username = localStorage.getItem("username");

    let loggedIn: boolean = true

    if (accessToken) {
        const checkBool: boolean = await checkAccessToken(accessToken);
        if (checkBool) {
            loggedIn = true
        } else {
            loggedIn = false;
        }
    } else {
        console.log("Nevtreegui baina");
        loggedIn = false;
    }
    
    if (app) {
        if (loggedIn) {

            const exams = await getExams();


            let examsHTML = ""

            exams.forEach((exam: {
                username: string | null; name: any; _id: any
}) => {
                examsHTML += `
                    
                        <div class='exam ${exam.username === username ? 'mine' : ''}' id='${exam._id}'>
                            <a href="#exams#${exam._id}"><h3>${exam.name}</h3></a>
                            ${exam.username === username ? "<button class='delete-button'>Delete</button>" : ''}
                        </div>
                    
                `
            })

            app.innerHTML = `
                <div id="navbar">
                    <div>
                        <h1>Exam</h1>
                    </div>
                    <div>
                        <a href='#add-exam'><button>Add Exam</button></a>
                    </div>
                    <div id="navbar-right-side">
                        <h2>${username}</h2>
                        <button id="logout-button">Logout</button>
                    </div>
                </div>
                <div id="homepage-exams">
                    ${examsHTML}
                <div>
            `

            const deleteButtons = document.querySelectorAll(".delete-button");

            deleteButtons?.forEach((button: any) => {
                button.addEventListener("click", async () => {
                    const examId = button.closest('.exam').id
                    console.log(examId);
                })
            })

            const logoutButton = document.getElementById("logout-button");
            logoutButton?.addEventListener("click", () => {
                localStorage.removeItem("accessToken");
                window.location.reload();
            })
        } else {
            app.innerHTML = `
                <h1>Exam home page</h1>
                <a href="/#login">Login</a>
                <h2>Not Logged In</h2>
            `
        }
    }


}