// Vérifier si les données existent déjà, sinon les initialiser
if (!localStorage.getItem("students")) {
  localStorage.setItem("students", JSON.stringify(["Alice", "Bob", "Charlie"]));
}
if (!localStorage.getItem("teachers")) {
  localStorage.setItem("teachers", JSON.stringify(["Prof. Xavier", "Prof. Y"]));
}
if (!localStorage.getItem("courses")) {
  localStorage.setItem("courses", JSON.stringify(["Math", "Science", "History"]));
}

function getStats() {
  const students = JSON.parse(localStorage.getItem("students")) || [];
  const teachers = JSON.parse(localStorage.getItem("teachers")) || [];
  const courses = JSON.parse(localStorage.getItem("courses")) || [];

  return {
    students: students.length,
    teachers: teachers.length,
    courses: courses.length
  };
}

document.addEventListener("DOMContentLoaded", function () {
  const stats = getStats();
  const ctx = document.getElementById("statsChart").getContext("2d");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Étudiants", "Enseignants", "Cours"],
      datasets: [{
        label: "Statistiques",
        data: [stats.students, stats.teachers, stats.courses],
        backgroundColor: ["blue", "red", "green"]
      }]
    }
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const stats = getStats();
  document.getElementById("students-count").textContent = stats.students;
  document.getElementById("teachers-count").textContent = stats.teachers;
  document.getElementById("courses-count").textContent = stats.courses;
});


// Create buttom_bar div
const bottomBar = document.createElement("div");
bottomBar.id = "buttom_bar";

// Array of text content for h3 elements
const titles = ["Cours", "NOMBRE D'ETUDIANT", "DUREE"];

// Create and append h3 elements to buttom_bar
titles.forEach(text => {
  const h3 = document.createElement("h3");
  h3.textContent = text;
  bottomBar.appendChild(h3);
});

// Append buttom_bar to the #red container
document.getElementById("red").appendChild(bottomBar);
