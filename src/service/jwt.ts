const url = "http://localhost:3500"

export async function checkAccessToken(accessToken: string): Promise<boolean> {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const response = await fetch(url + "/auth/check", {
            method: "POST",
            body: JSON.stringify({ accessToken }),
            headers: myHeaders,
        });
        
        if (response.ok) {
            console.log(response);
            return true
        } 
        return false;

    } catch (error) {
        console.error(error);
    }

    return false;
}