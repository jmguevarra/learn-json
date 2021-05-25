/**
 * Get Data using Fetch function with help of map function
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

     /** With map function */
    let filteredUser = users.map(function(user, index){
        let userNewData =  { //create new object to gather just all needed from complex API/Object
            fullname    :   `${user.name['title']}. ${user.name['first']} ${user.name['last']}`,
            picture     :   user.picture['large'],
            gender      :   user['gender'],
            age         :   user.registered["age"],
            email       :   user['email'],
            phone       :   user['phone'],
            address     :   `${user.location.street['number']} ${user.location.street['name']} St. ${user.location['city']} City, ${user.location['postcode']} ${user.location['state']}, ${user.location['country']}`,
        };
        return userNewData;
    });

    //console.log(filteredUser);
    displayUsers(filteredUser, usersTag);
 });