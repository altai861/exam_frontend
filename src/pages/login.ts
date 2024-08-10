import { login } from "../service/auth.ts";

export async function loginPage() {
    const app = document.getElementById("app");

    if (app) {
        app.innerHTML = `
            <h1>Login</h1>
            <form id="login-form">
                <input type="text" placeholder="Username" required id="username"></input>
                <input type="password" placeholder="Password" required id="password"></input>
                <input type="submit" value="Login"></input>
            </form>
            <p>Don't have an account? <a href='/#register'>register</a></p>
        `

        const loginForm = document.getElementById("login-form");

        loginForm?.addEventListener("submit", async (event) => {
            event.preventDefault();
            
            const usernameInput = document.getElementById("username") as HTMLInputElement | null;
            const username = usernameInput?.value
            const passwordInput = document.getElementById("password") as HTMLInputElement | null;
            const password = passwordInput?.value

            if (username && password) {
                await login(username, password)
            }
        })

    }
}