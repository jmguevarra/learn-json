/**
 * Get Data using Fetch function
 */

const randomUsers = 'https://api.npoint.io/cdf5be73d8eee19e21bb'; //json api online
    
fetch(randomUsers)
.then(function(response){
    return response.json();
})
.then(function(data){
    const users = data.results;
    console.log(users);
    const usersTag = document.querySelector('.users');
    let htmlRender = '';

    users.forEach(function(user, index){
        htmlRender += `
        <div class="user user-${index}">
            <img src="${user.picture['large']}">
            <div class="user-info">
                <h3 clas="user-name">${user.name["title"]}  ${user.name["first"]} ${user.name["last"]}</h3>
                <ul class="personal-detail">
                    <li class="gender">${user.gender}</li>
                    <li class="age">${user.registered["age"]}</li>
                    <li class="phone">${user.phone}</li>
                    <li class="email">${user.email}</li>
                    <li class="address">
                    ${user.location.street['number']} ${user.location.street['name']} St. ${user.location['city']} City, ${user.location['postcode']} ${user.location['state']}, ${user.location['country']}
                    </li>
                </ul>
            </div>
        </div>
        `;
    });


    usersTag.innerHTML = htmlRender;
});