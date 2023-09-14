// fill in javascript code here
let myform= document.querySelector("form");
myform.addEventListener("submit" ,function(e){
e.preventDefault();

    let name=document.getElementById('name').value;
    let Id=document.getElementById('docID').value;
    let specilization=document.getElementById('dept').value;
    let experience=document.getElementById('exp').value;
    let email=document.getElementById('email').value;
    let Mobile=document.getElementById('mbl').value;
    
})
let role;
if (Experience>5){
    role="senior";
}
else if(Experience>=2 && Experience<=5){
    role="junior";
}
else{
    role="Trainee";
}
let tbody=document.querySelector("tbody");
 let row =document.createElement("tr");
 let data=[name,Id, specilization,experience,email,Mobile,role]
 data.forEach((ele)=>{
    let td=document.createElement("td")
    td.innerText=ele;
    row.appendChild(td);
 })
//  delete functionality
let deleteTd=document.createElement('td')
let deletebtn=document.createElement('button')
deletebtn.innerText="delete";
deletebtn.addEventListener("click",function(){
    tbody.removeChild(row);
    
})
deleteTd.appendChild(deletebtn);
row.appendChild(deletebtn)


 tbody.appendChild(row);
