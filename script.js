// Sample 15 students data
const students = [
  { name: "praveen", result: "85%", grade: "A", attendance: "90%" },
  { name: "pranjul", result: "78%", grade: "B", attendance: "85%" },
  { name: "sirjan", result: "92%", grade: "A+", attendance: "95%" },
  { name: "devansh", result: "88%", grade: "A", attendance: "89%" },
  { name: "giridhar", result: "69%", grade: "B", attendance: "80%" },
  { name: "prateek singh", result: "81%", grade: "A", attendance: "87%" },
  { name: "ayush", result: "69%", grade: "C", attendance: "75%" },
  { name: "jatin", result: "91%", grade: "A+", attendance: "93%" },
  { name: "arpit", result: "84%", grade: "A", attendance: "88%" },
  { name: "rohit negi", result: "77%", grade: "B", attendance: "82%" },
  { name: "Sneha ", result: "95%", grade: "A+", attendance: "97%" },
  { name: "prashant tiwari", result: "65%", grade: "C", attendance: "70%" },
  { name: "vivek singh", result: "82%", grade: "A", attendance: "86%" },
  { name: "Pooja saini", result: "79%", grade: "B", attendance: "83%" },
  { name: "akash singh", result: "87%", grade: "A", attendance: "91%" },
];

// Show top 5 results initially
window.onload = function () {
  let topResults = document.getElementById("topResults");
  const top5 = students.slice(0, 5);
  top5.forEach(s => {
    let li = document.createElement("li");
    li.innerText = `${s.name} - Result: ${s.result}`;
    topResults.appendChild(li);
  });
};

// Show/hide sections
function showSection(id) {
  document.querySelectorAll("section").forEach(sec => sec.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

// Search data
function searchData() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const student = students.find(s => s.name.toLowerCase().includes(query));

  document.getElementById("searchResult").innerHTML = "";
  document.getElementById("gradeResult").innerHTML = "";
  document.getElementById("attendanceResult").innerHTML = "";

  if (student) {
    // Show result if section is Result
    if (!document.getElementById("result").classList.contains("hidden")) {
      document.getElementById("searchResult").innerHTML =
        `<p><strong>${student.name}</strong><br>Result: ${student.result}</p>`;
    }

    // Show grade if section is Grade Sheet
    if (!document.getElementById("gradesheet").classList.contains("hidden")) {
      document.getElementById("gradeResult").innerHTML =
        `<p><strong>${student.name}</strong><br>Grade: ${student.grade}</p>`;
    }

    // Show attendance if section is Attendance
    if (!document.getElementById("attendance").classList.contains("hidden")) {
      document.getElementById("attendanceResult").innerHTML =
        `<p><strong>${student.name}</strong><br>Attendance: ${student.attendance}</p>`;
    }
  } else {
    alert("Student not found!");
  }
}
