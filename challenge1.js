function studentGradeGenerator () {
    let students = [];
    while(true) {
        //prompting the user for input
        let name =prompt("Enter student's name(or type 'done' to finish):");
        if (name.toLowerCase() === 'done') break;
        let mark = prompt("Enter marks for ${name}(0-100):");
        mark = parseInt(mark);
        while(isNaN(mark)|| mark < 0 || mark > 100){
            alert("Invalid mark!Please enter a number between 0 and 100");
            mark = parseInt(prompt("Enter marks for ${name}(0 - 100):"));
        }
        // used an example name -john
        students.push({
            name:name,
            john:john,
            grade:getGrade(john)
        });
    }
    console.log("Student Grades:");
    students.forEach(students => {
        console.log("Name:${student.name}, Marks:${student.mark}, Grade:${student.grade}");
        
    });
    
}
function getGrade (mark){
    if(mark > 79)return "A";
    else if(mark>= 60 && mark<= 79)return "B";
    else if(mark >= 50 && mark <= 59)return "C";
    else if(mark >= 40 && mark <= 49)return "D";
    else return "E";
}
studentGradeGenerator();
