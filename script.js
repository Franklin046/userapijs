const userApiUrl = "https://randomuser.me/api/";

document.getElementById("get-user").addEventListener("click", () => {
  fetch(userApiUrl)
    .then((response) => response.json())
    .then((data) => {
      const userDiv = document.getElementById("user");
      userDiv.innerHTML = `
                <p>Name: ${data.results[0].name.first} ${data.results[0].name.last}</p>
                <p>Email: ${data.results[0].email}</p>
                <p>Location: ${data.results[0].location.city}, ${data.results[0].location.country}</p>
            `;
    })
    .catch((error) => {
      console.error("Error fetching user:", error);
    });
});
