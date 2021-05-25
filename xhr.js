/**
 * Get Data using XMLHttpRequest. This is the old way of getting data via http request
 * 
 */
const randomUsers = 'https://api.npoint.io/cdf5be73d8eee19e21bb';

/** I created a function same like fetch function that calling data from XMLHttpRequest */
const loadUsers = function(url, callback = function(){}){
    if( url == null ){ return; } 

    //Do action here
    const request = new XMLHttpRequest();

    //Do event listenter first before send the request
    request.addEventListener('readystatechange', function(){
        if(request.readyState === 4 && request.status === 200){
            let data = JSON.parse(request.responseText);
            callback(undefined, data);
        }else if(request.readyState === 4){
            let errMessage = 'Could not fetch the data. ERROR: '+request.status +' - visit https://developer.mozilla.org/en-US/docs/Web/HTTP/Status for more info.';
            callback(errMessage, undefined);
        }
    });

    request.open('GET', url);
    request.send();
}

//Usage with Callbacks This is same as fetch
loadUsers(randomUsers, function(err, data){
    /** Error Handling */
    if(err){ console.error(err); return false; }
    
    /**Proceed to main goal */
    const users = data.results;
    //console.log(users);
    const usersTag = document.querySelector('.users');
    displayUsers(users, usersTag);
});





/** States Stages 
 var xhr = new XMLHttpRequest();
 console.log('UNSENT', xhr.readyState); // readyState will be 0
 
 xhr.open('GET', '/api', true);
 console.log('OPENED', xhr.readyState); // readyState will be 1
 
 xhr.onprogress = function () {
     console.log('LOADING', xhr.readyState); // readyState will be 3
 };
 
 xhr.onload = function () {
     console.log('DONE', xhr.readyState); // readyState will be 4
 };

 xhr.send(null); */
