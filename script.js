fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {
    let usersContainer = document.getElementById('users');
    users.forEach(user => {
        let userCard = `
            <div class="card">
                <h3>${user.name}</h3>
                <p><strong>username:</strong> ${user.username}</p>
                <p><strong>email:</strong> <a href="mailto:${user.email}">${user.email}</a></p>
                <p><strong>phone:</strong> ${user.phone}</p>
                <p><strong>location:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
                <p><strong>companeyy:</strong> ${user.company.name}</p>
                <p><strong>adressss:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
            </div>
        `;
        usersContainer.innerHTML += userCard;
    });
})
.catch(error => console.log("plzzzz there os an eroorrr:", error));
