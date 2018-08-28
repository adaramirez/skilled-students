console.log(data);

var students = data.students;
var card = "";
console.log(students);

var studentsTemp = function(photo,firstName,lastName){
    return `
    <div class="card col-12 col-md-3" style="width:18rem;">
        <img class = "card-img-top" src="${photo}" alt="Card image cap">
        <div class = "card-body">
            <h5 class = "card-title">${firstName} ${lastName}</h5>
        </div>
        <div class = "card-body">
            <p id="all-skills"></p>
            <input type="text" id="skills" value="Type Skill">
            <button onclick=myFunction() type="button" class="btn-outline-warning">Add Skill</button>
        </div>
    </div>
    `
}

for (var i = 0; i < students.length; i++){
    var photo = students[i].photo;
    var firstName = students[i].name;
    var lastName = students[i].last_name;
    var student = studentsTemp(photo,firstName,lastName);
    card += student;
}
document.getElementById("student-card").innerHTML = card;

function myFunction(){
    var x = document.getElementById("skills").value;
    var nodeX = document.createTextNode(x);
    var space = document.createElement("span");
    space.appendChild(nodeX);
    document.getElementById("all-skills").appendChild(space);
}




// var btn = document.getElementsByClassName("btn-outline-warning");
// btn.addEventListener("click", add);

// function add(){

// }















