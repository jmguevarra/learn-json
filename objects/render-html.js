/**
 * it contains function with html file to render
 * Note: Users API must have same structure of object here : https://api.npoint.io/cdf5be73d8eee19e21bb
 * 
 */

function displayUsers(users, addToTag, position = 'afterbegin'){
    /** Error Handling */
    if(users.constructor != Array || users.length == 0){
        console.error('Invalid or Empty Users Array');
        return false;
    }
    if (typeof(addToTag) == 'undefined' || addToTag == null){ //check if selector exists.
       console.error('Selector not exist');
        return false;
    }

    
    /** Proceed to main goal */
    let htmlRender = '';

    //new Format of looping
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

    //Old Format of looping using for loop
    // for(let i = 0; i < users.length; i++){
    //    // console.log(users[i]);  All  user object
    //     htmlRender += `
    //         <div class="user user-${i}">
    //             <img src="${users[i].picture['large']}">
    //             <div class="user-info">
    //                 <h3 clas="user-name">${users[i].name["title"]}  ${users[i].name["first"]} ${users[i].name["last"]}</h3>
    //                 <ul class="personal-detail">
    //                     <li class="gender">${users[i].gender}</li>
    //                     <li class="age">${users[i].registered["age"]}</li>
    //                     <li class="phone">${users[i].phone}</li>
    //                     <li class="email">${users[i].email}</li>
    //                     <li class="address">
    //                     ${users[i].location.street['number']} ${users[i].location.street['name']} St. ${users[i].location['city']} City, ${users[i].location['postcode']} ${users[i].location['state']}, ${users[i].location['country']}
    //                     </li>
    //                 </ul>
    //             </div>
    //         </div>
    //     `;
    // }


    addToTag.insertAdjacentHTML(position, htmlRender);
}



/** parentNode.insertAdjacentHtml([positions], [html]) 
 * 
 * position: see here https://prnt.sc/135f7ug
 * 1. beforebegin
 * 2. afterbegin
 * 3. beforeend
 * 4. afterend
 * 
*/