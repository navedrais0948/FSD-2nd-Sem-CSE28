document.getElementById("CalculateBtn").addEventListener('click',processGrades);



function processGrades(){

    const countInput = document.getElementById('subjectCount').value;

    const numSubjects = parseInt(countInput,10);

    if(isNaN(numSubjects) || numSubjects <= 0){
        alert('Enter a valid number');
        return;

    }


    let totalMarks = 0;

    for(let i=0;i<numSubjects;i++){
        let markInput = prompt(`Enter the marks for subjects ${i}`);
        let marks = parseFloat(markInput);


        if(isNaN( marks) || marks<0 || marks>100){
            alert("Enter marks between 0-100");
            return;
        }

        totalMarks += marks;
    }


    const avgMarks = totalMarks/numSubjects;
    let grade = "";
    let status = "";

    if(avgMarks >=90){
        grade = "A+"
    }else if(avgMarks>=75){
        grade = "A";
    }else if(avgMarks>=50){
        grade = "B";
    }else if(avgMarks>50){
        status="Pass";
    }else if(avgMarks<40){
        status="Fail";
    }


    const resultDiv = document.getElementById('result');
    resultDiv.style.display = "block";
    resultDiv.innerHTML = `
        <h3>Results:</h3>
        <p><strong>Total Marks:</strong> ${totalMarks}</p>
        <p><strong>Average Marks:</strong> ${avgMarks}</p>
        <p><strong>Grade:</strong> ${grade}</p>
        <p><strong>Status:</strong> ${status}</p>
    `;
}