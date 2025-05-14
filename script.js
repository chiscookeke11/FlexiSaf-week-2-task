const students = [
  { name: "Ada", class: "Primary One", fact: "Loves Math", image: "/public/one.jpg" },
  { name: "Bola", class: "Primary Two", fact: "Plays Piano", image: "/public/two.jpg" },
  { name: "Chioma", class: "Primary One", fact: "Excellent in Science", image: "/public/three.jpg" },
  { name: "David", class: "Primary Three", fact: "Enjoys Painting", image: "/public/four.jpg" },
  { name: "Emeka", class: "Primary One", fact: "Fast Runner", image: "/public/five.jpg" },
  { name: "Fola", class: "Primary Two", fact: "Great at Spelling", image: "/public/six.jpg" },
  { name: "Grace", class: "Primary Three", fact: "Loves Reading Novels", image: "/public/seven.jpg" },
  { name: "Hassan", class: "Primary One", fact: "Good at Drawing", image: "/public/eight.jpg" },
  { name: "Ijeoma", class: "Primary Two", fact: "Plays Violin", image: "/public/nine.jpg" },
  { name: "Joseph", class: "Primary Three", fact: "Knows all the states in Nigeria", image: "/public/ten.jpg" },
  { name: "Kemi", class: "Primary One", fact: "Enjoys Science Projects", image: "/public/eleven.jpg" },
  { name: "Ladi", class: "Primary Two", fact: "Loves Chess", image: "/public/twelve.jpg" },
  { name: "Mira", class: "Primary Three", fact: "Can recite poems", image: "/public/fourteen.jpg" },
  { name: "Nnamdi", class: "Primary One", fact: "Excellent in Football", image: "/public/fifteen.jpg" },
  { name: "Ola", class: "Primary Two", fact: "Good with Computers", image: "/public/sixteen.jpg" },
  { name: "Peace", class: "Primary Three", fact: "Great Storyteller", image: "/public/seventeen.jpg" },
  { name: "Queen", class: "Primary One", fact: "Loves Music", image: "/public/eighteen.jpg" },
  { name: "Rasheed", class: "Primary Two", fact: "Excellent Dancer", image: "/public/nineteen.jpg" },
  { name: "Sade", class: "Primary Three", fact: "Can solve puzzles fast", image: "/public/twenty.jpg" },
  { name: "Tunde", class: "Primary One", fact: "Always on time",  image: "/public/thirteen.jpg" }
];

const studentContainer = document.getElementById("student-container");
const filterSelect = document.getElementById("classFilter");

function renderStudents(data) {
  studentContainer.innerHTML = "";
  data.forEach(student => {
    const card = document.createElement("div");
    card.className = "card";


    const imgSrc = student.image ? student.image : "default.jpg";

    card.innerHTML = `
      <img src="${imgSrc}" alt="${student.name}" style="width: 100px; height: 100px; object-fit: cover;" />
      <h3>${student.name}</h3>
      <p>Class: ${student.class}</p>
      <p>Fact: ${student.fact}</p>
    `;
    studentContainer.appendChild(card);
  });
}

renderStudents(students);

filterSelect.addEventListener("change", () => {
  const selected = filterSelect.value;
  const filtered = selected === "All"
    ? students
    : students.filter(s => s.class === selected);
  renderStudents(filtered);
});
