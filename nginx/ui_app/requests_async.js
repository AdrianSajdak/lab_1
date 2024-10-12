// requests.js

// Function to send GET request
// async function sendGetRequest() {
//     const input = document.getElementById("getInputField").value;
//     const url = `http://localhost:8000/${input}`; // Assumes the server is running on localhost:8000

//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         document.getElementById("getResponse").textContent = JSON.stringify(data, null, 2);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// Function to send POST request
async function sendPostRequest() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;

    console.log("First Name: ", firstName);
    console.log("Last Name: ", lastName);

    const data = {
        firstName: firstName,
        lastName: lastName
    };

    try {
        const response = await fetch("http://localhost:8000/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const responseData = await response.json();

        console.log("Odpowiedź z serwera:", responseData);

        // Updating table with new data

        updateTable(responseData);

    } catch (error) {
        console.error('Error:', error);
    }
}

async function updateTable(data) {
    // if (!Array.isArray(data)) {
    //     console.error("Oczekiwano tablicy, ale otrzymano:", data);
    //     return;
    // }

    const table = document.getElementById("nameTable");
    table.innerHTML = "<tr><th>First Name</th><th>Last Name</th></tr>";

    data.forEach(element => {
        const row = table.insertRow();
        const firstNameCell = row.insertCell(0);
        const lastNameCell = row.insertCell(1);

        firstNameCell.textContent = element.firstName;
        lastNameCell.textContent = element.lastName;
    });
}
