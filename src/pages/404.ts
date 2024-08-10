

export async function NotFoundPage() {
    const app = document.getElementById("app");

    if (app) {
        app.innerHTML = `
            <h1>404 Not Found</h1>
        `
    }
}