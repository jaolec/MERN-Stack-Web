//This function should check a few conditions. 
//Is the login valid, is the account admin or tenant
//Then, it should change the CSS to show the correct page
//(Change either #tenant or #admin to display:block or whatever display you think works)
function logIn(){
    
}

//This function will change the display of #createUser to show the create user menu
function createUser(){
    document.getElementById("sign-in").style.display = 'none';
    document.getElementById("createUser").style.display = 'block';
}

//This function goes back to the login screen without creating a user
function stopCreate(){
    document.getElementById("sign-in").style.display = 'block';
    document.getElementById("createUser").style.display = 'none';
}

//Checks if the given username is already taken
//If not, add new user to database
//Should also record the date the account was created
//Afterwards, set display to none and show the login screen again
function addUser(){
    
}

//The following functions should all work basically the same
//Fetch relevant information from the server and display it
//In the corresponding div
//If anything is already displayed, make sure to hide it
function tenManage(){

}

function batManage(){

}

function mainManage(){

}

function checkProp(){

}

function checkPay(){

}

function checkMain(){

}

function viewProf(){

}

//Admin Battle Functions

//Fetches and displays a specific battle from the server
function fetchBattle(){

}

//After using fetchBattle, this should open an edit menu or give textboxes
//to fill. A submit button should also appear.
function battleEdit(){

}

//Takes all information in the previous textboxes and updates
//the corresponding database battle
function battleUpdate(){

}

//Opens create battle menu
function battleCreate(){

}

//Adds new battle to database
function pushBattle(){

}

//Admin Tenant Functions

//Fetches a specific tenant
function fetchTenant(){

}

//Edits a fetched tenant, should work like battles
function editTenant(){

}

//Like battles, update
function updateTenant(){

}

//Opens create tenant menu
function createTenant(){

}

//Adds new tenant to database
function pushTenant(){

}

//Admin Maintenance Functions

//Next five functions are like before
function fetchMain(){

}

function editMain(){

}

function updateMain(){

}

function createMain(){

}

function pushMain(){
    
}