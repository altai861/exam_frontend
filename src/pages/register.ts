import { register } from "../service/auth.ts"

export async function registerPage() {
    const app = document.getElementById("app");

    if (app) {
        app.innerHTML = `
            <h1>Register</h1>
            <form id="register-form">
                <input type="text" placeholder="Username" required id="username"></input>
                <input type="password" placeholder="Password" required id="password"></input>
                <input type="password" placeholder="Confirm password" required id="confirm-password"></input>
                <input type="submit" value="Register"></input>
            </form>
            <p>Already have an account <a href='/#login'>login</a></p>
        `

        const registerForm = document.getElementById("register-form");

        registerForm?.addEventListener("submit", async (event) => {
            event.preventDefault();
            
            const usernameInput = document.getElementById("username") as HTMLInputElement | null;
            const username = usernameInput?.value
            const passwordInput = document.getElementById("password") as HTMLInputElement | null;
            const password = passwordInput?.value
            const confirmPasswordInput = document.getElementById("confirm-password") as HTMLInputElement | null;
            const confirmPassword = confirmPasswordInput?.value

            console.log(confirmPassword, password)
            if (confirmPassword !== password) {
                alert("Confirmed password does not match");
            } else {
                if (username && password) {
                    await register(username, password)
                }
            } 
        })

    }
}