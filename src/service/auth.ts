const url = "http://localhost:3500";

export async function login(username: string, password: string) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const response = await fetch(url + "/auth/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: myHeaders,
    });
    
    if (response.ok) {
        // If the response status is 200-299
        const data = await response.json(); // Assuming the response is in JSON format
        console.log("Login successful:", data);

        localStorage.setItem("accessToken", data.accessToken);
        window.location.href = "/"

    } else {
        // If the response status is outside 200-299
        const errorData = await response.json(); // Assuming the error response is in JSON format
        console.error("Login failed:", errorData);
        // You can handle specific status codes if needed
        if (response.status === 401) {
            console.error("Unauthorized: Invalid username or password.");
        } else if (response.status === 500) {
            console.error("Server error, please try again later.");
        }
        // Add more status code checks as needed
    }
}

export async function register(username: string, password: string) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const response = await fetch(url + "/auth/register", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: myHeaders,
    });
    
    if (response.ok) {
        // If the response status is 200-299
        const data = await response.json(); // Assuming the response is in JSON format
        console.log("Register successful:", data);

        window.location.href = "/#login"

    } else {
        // If the response status is outside 200-299
        const errorData = await response.json(); // Assuming the error response is in JSON format
        console.error("Register failed:", errorData);
        // You can handle specific status codes if needed
        if (response.status === 401) {
            console.error("Unauthorized: Invalid username or password.");
        } else if (response.status === 500) {
            console.error("Server error, please try again later.");
        }
        // Add more status code checks as needed
    }
}