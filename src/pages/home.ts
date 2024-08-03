export async function homePage() {
    const app = document.getElementById("app");

    const accessToken = localStorage.getItem("accessToken");
    
    if (app) {
        app.innerHTML = `
            <h1>Exam home page</h1>
        `
    }
}