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

            exams.forEach((exam: { name: any; _id: any}) => {
                examsHTML += `
                    <a href="#exams#${exam._id}">
                        <div class='exam' id='${exam._id}'>
                            <h3>${exam.name}</h3>
                        </div>
                    </a>
                `
            })

            app.innerHTML = `
                <div id="navbar">
                    <div>
                        <h1>Exam</h1>
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