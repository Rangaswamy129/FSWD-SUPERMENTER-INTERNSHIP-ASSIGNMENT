let students = [
{ name:"Ravi", marks:[80,75,90]},
{ name:"Sita", marks:[85,70,88]},
{ name:"Arun", marks:[60,65,70]}
];

function calculateAverage(marks){

let sum = 0;

for(let i=0;i<marks.length;i++){
sum += marks[i];
}

return (sum/marks.length).toFixed(2);

}

let table = document.getElementById("studentTable");

students.forEach(function(student){

let row = table.insertRow();

let nameCell = row.insertCell(0);
let marksCell = row.insertCell(1);
let avgCell = row.insertCell(2);

nameCell.innerHTML = student.name;
marksCell.innerHTML = student.marks.join(", ");
avgCell.innerHTML = calculateAverage(student.marks);

});