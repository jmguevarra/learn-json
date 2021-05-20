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
    //console.log(users);
    const usersTag = document.querySelector('.users');
    displayUsers(users, usersTag);
});