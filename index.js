let savedata;

fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    savedata = data;
    img = data.destinations[0].images.png;
   
  })
  .catch(error => {
   
    console.error(error);
  });



const content = document.querySelector('.content');

var HOME = document.createElement("div");
HOME.innerHTML = `
<div class="explore-section">
  <div class="explore-text">
    <h2>SO, YOU WANT TO TRAVEL TO</h2>
    <p>SPACE</p>
    <h3>Let's face it; If you want to go to space, you might aswell genuinely go to outer space and not hover kind of on the edge of it.Well sit back, and relax because we'll give you a truly out of this world experience</h3>
  </div>
  <button class="explore-btn">
    EXPLORE
  </button>
</div>
`;
content.append(HOME);
let currentPage='HOME';
const pages=document.querySelectorAll('.menu-item');
let body = document.querySelector('.HOME-bg');
let exploreBtn = document.querySelector('.explore-btn');



pages.forEach(el => el.onclick = () => {
  pages.forEach(el => el.classList.remove('active'));
  el.classList.add('active');
  body.classList.remove(`${currentPage}-bg`);
  currentPage = el.children[1].innerHTML;
  body.classList.add(`${currentPage}-bg`);
  content.children[0].remove();
  
  switch (currentPage) {
      case 'DESTINATION':
          var DESTINATION = document.createElement("div");
          DESTINATION.innerHTML = `
          <div>
          <div>
            <h2 class="destination-header"><span>01</span>PICK YOUR DESTINATION</h2>
            <div class="flex-row screen">
              <div class="flex-row">
                <img class="planetImg" src="${savedata.destinations[0].images.png}">
                <div class="flex-column abs">
                  <div class="destination-list">
                    <a href="#" class="dest">${savedata.destinations[0].name}</a>
                    <a href="#" class="dest">${savedata.destinations[1].name}</a>
                    <a href="#" class="dest">${savedata.destinations[2].name}</a>
                    <a href="#" class="dest">${savedata.destinations[3].name}</a>
                  </div>
            
                <p class="destTitle">${savedata.destinations[0].name}</p>
                <p class="desc">${savedata.destinations[0].description}</p>
                <p class="dist">${savedata.destinations[0].distance}</p>
                
            </div>
          </div>
            </div>
          
          </div>
          
        </div>
          `;
          content.append(DESTINATION);
          let destinationsList = document.querySelectorAll('.dest');
          let planetImg = document.querySelector('.planetImg');
          let destTitle = document.querySelector('.destTitle')
          let desc = document.querySelector('.desc')
          let dist = document.querySelector('.dist')
          destinationsList.forEach((de,i) => de.onclick = () => {
            destTitle.innerHTML = de.innerHTML;
            planetImg.src = savedata.destinations[i].images.png;
            desc.innerHTML = savedata.destinations[i].description;
            dist.innerHTML = savedata.destinations[i].distance;
          })
          break;

      case 'CREW':
          var CREW = document.createElement("div");
          CREW.innerHTML = `
          <div class="crew-screen">
          <div class="crew-details">
            <h2><strong>02</strong> MEET YOUR CREW</h2>
              <div>
                <p class="role">${savedata.crew[0].role}</p>
                <p class="crew-name">${savedata.crew[0].name}</p>
                <p class="crew-desc">${savedata.crew[0].bio}</p>
              </div>
              <div>
                <button class="crew-btn"></button>
                <button class="crew-btn"></button>
                <button class="crew-btn"></button>
                <button class="crew-btn"></button>
              </div>
             
          </div>
            <img class="crew-img" src="${savedata.crew[0].images.png}" alt="">
          </div>
          `;
         
          content.append(CREW);
          let crewBtns = document.querySelectorAll(".crew-btn");
          let crewImg = document.querySelector(".crew-img");
          let crewRole = document.querySelector(".role");
          let crewName = document.querySelector(".crew-name");
          let crewDesc = document.querySelector(".crew-desc");
          crewBtns.forEach((cr,i)=> cr.onclick = () =>{
          
              crewRole.innerHTML = savedata.crew[i].role;
              crewImg.src = savedata.crew[i].images.png;
              crewName.innerHTML = savedata.crew[i].name;
              crewDesc.innerHTML = savedata.crew[i].bio;
              
          })
          break;

      case 'TECHNOLOGY':
          var TECHNOLOGY = document.createElement("div");
          TECHNOLOGY.innerHTML = `<strong>TECH</strong>`;
          content.append(TECHNOLOGY);
          break;

      case 'HOME':
        var HOME = document.createElement("div");
        HOME.innerHTML = `
        <div class="explore-section">
          <div class="explore-text">
            <h2>SO, YOU WANT TO TRAVEL TO</h2>
            <p>SPACE</p>
            <h3>Let's face it; If you want to go to space, you might aswell genuinely go to outer space and not hover kind of on the edge of it.Well sit back, and relax because we'll give you a truly out of this world experience</h3>
          </div>
          <button class="explore-btn">
            EXPLORE
          </button>
        </div>
        `;
        content.append(HOME);
        exploreBtn = document.querySelector('.explore-btn');
        exploreBtn.onclick = () => {
        pages[1].click();
        };
        break;
      default:
          break;
  }
  


});


exploreBtn.onclick = () => {
  pages[1].click();
};

