const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

let listHtml = "";

for (let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i];
  listHtml += `
    <div class="col-md-4"> 
        <div class="card h-100 bg-dark text-white shadow-sm"> 
            <div class="row g-0 align-items-center">
                <div class="col-4">
                   <img src="./${member.img}" alt="${member.name}" class="img-fluid rounded-start">
                </div>
                <div class="col-8">
                    <div class="card-body">
                        <h5 class="card-title fw-bold">${member.name}</h5>
                        <p class="card-text text-light small">${member.role}</p>
                        <a href="mailto:${member.email}" class="text-info text-decoration-none">${member.email}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
}

const container = document.getElementById("team-container");
container.innerHTML = listHtml;





