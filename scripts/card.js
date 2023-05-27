const container = document.querySelector(".row");
const names = ['Duplex', 'Suite', 'VIP Suite', 'Studio', 'Hotel Apartment']
const locations = ['Tokyo, Japan', 'Ryiadh, Saudi Arabia', 'Jeddah, Saudi Arabia', 'Istanbul, Turkey', 'Dubai, UAE', 'Abu-Dhabi, UAE', 'New York, USA', 'London, United Kingdom', 'California, USA']
const added = [];
const card = `
          <!--Start Card-->
          <div class="card col-lg-3 col-md-4 col-sm-12 my-2 mx-2">
            <img
              class="card-img"
              src="https://images.unsplash.com/photo-1610375233775-6e0166927193?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body p-3">
              <h5 class="card-title text-dark d-flex align-items-center">
                <span class="title-icon material-symbols-outlined"
                  >filter_hdr</span
                >
                &nbsp; Traditional suite
              </h5>
              <div>
                <div class="icons">
                  <div class="infos">
                    <div class="info bedrooms text-black-50">
                      <p class="info-text">4</p>
                      <span class="icon material-symbols-outlined">king_bed</span>
                    </div>
                    <div class="info bathrooms">
                      <p class="info-text">3</p>
                      <span class="icon material-symbols-outlined">bathtub</span>
                    </div>
  
                    <div class="info parking">
                      <p class="info-text">2</p>
                      <span class="icon material-symbols-outlined"
                        >local_parking</span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="apt-location" id="location">
                <span class="icon material-symbols-outlined"> location_on </span>
                <p class="location-tag">Tokyo Japan</p>
              </div>
              <div class="apt-price" id="price">
                <p>$ 200.0</p>
              </div>
              <div class="bookBtn" id="Book">
                <a href="" class="bookNowBtn link">Book Now!</a>
              </div>
            </div>
            <!--End Card-->`;



for (let i = 0; i < 21; i++) { 
     container.innerHTML += getCard();
}






function getPrice() {
     return `${getRandomNum(150,10)*10}.00`
}


function getRandomNum( max,min=1) {
     let num = Math.floor(Math.random() * max); 
     while (num < min) { 
          num = Math.floor(Math.random() * max);
     }
     return num;
}

function getIcon() {
     const icons = ['filter_hdr', 'beach_access', 'apartment'];
     
     return icons[getRandomNum(icons.length,0)];
}

function getName() {
    return names[getRandomNum(names.length)]
}

function getLocation(){
return locations[getRandomNum(locations.length)]
}

function getPhoto() {
  let photo = getRandomNum(28, 0);
  while (added.includes(photo)) {
    photo = getRandomNum(28,0)
  }
  added.push(photo);
  return photo;
}

function getCard() {
     let photo = getPhoto();
     return`
     <!--Start Card-->
     <div class="card col-lg-3 col-md-4 col-sm-12 my-2 mx-2">
       <img
         class="card-img"
         src="./image/cardImages/${photo}.png"
         class="card-img-top"
         alt="..."
       />
       <div class="card-body p-3">
         <h5 class="card-title text-dark d-flex align-items-center">
           <span class="title-icon material-symbols-outlined"
             >${getIcon()}</span
           >
           &nbsp; ${getName()}
         </h5>
         <div>
           <div class="icons">
             <div class="infos">
               <div class="info bedrooms text-black-50">
                 <p class="info-text">${getRandomNum(4)}</p>
                 <span class="icon material-symbols-outlined">king_bed</span>
               </div>
               <div class="info bathrooms">
                 <p class="info-text">${getRandomNum(3)}</p>
                 <span class="icon material-symbols-outlined">bathtub</span>
               </div>

               <div class="info parking">
                 <p class="info-text">${getRandomNum(3)}</p>
                 <span class="icon material-symbols-outlined"
                   >local_parking</span
                 >
               </div>
             </div>
           </div>
         </div>
         <div class="apt-location" id="location">
           <span class="icon material-symbols-outlined"> location_on </span>
           <p class="location-tag">${getLocation()}</p>
         </div>
         <div class="apt-price" id="price">
           <p>$ ${getPrice()}</p>
         </div>
         <div class="bookBtn" id="Book">
           <a href="" class="bookNowBtn link">Book Now!</a>
         </div>
       </div>
       <!--End Card-->`
}