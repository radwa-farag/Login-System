var header=document.querySelector("h1");
var userName = sessionStorage.getItem('userName');
header.appendChild(document.createTextNode (" "+userName));

if(userName==null)
    window.open("../html/index.html","_self");

function logout()
{
    sessionStorage.removeItem("userName");
    window.open("../html/index.html","_self");
}