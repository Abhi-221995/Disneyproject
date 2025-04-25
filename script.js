// This script is for header field section adult & child increment and decrement purpose

let adultNum = 1;
let childNum = 0;
let adultDecerement = document.getElementById("adultDecrement");
let adultIncrement = document.getElementById("adultIncrement");
let adultcount = document.getElementById("adultCount");
let childCount = document.getElementById("childCount");
let childDecrement = document.getElementById("childDecrement");
let childIncrement = document.getElementById("childIncrement");

if (adultNum >= 1) {
  adultDecerement.disabled = false;
} else {
  adultDecerement.disabled = true;
}
adultDecerement.addEventListener("click", () => {
  if (adultNum >= 2) {
    adultNum--;
  }
  console.log(adultNum);
  adultcount.innerHTML = adultNum;
});

if (adultNum <= 14) {
  adultIncrement.disabled = false;
} else {
  adultIncrement.disabled = true;
}
adultIncrement.addEventListener("click", () => {
  if (adultNum < 14) {
    adultNum++;
  }
  adultcount.innerHTML = adultNum;
  console.log(adultNum);
});

childDecrement.addEventListener("click", () => {
  if (childNum > 0) {
    childNum--;
  }
  childCount.innerHTML = childNum;
  if (childNum >= 0) {
    childDecrement.disabled = false;
  } else {
    childDecrement.disabled = true;
  }
});

childIncrement.addEventListener("click", () => {
  if (childNum < 14) {
    childNum++;
  }
  childCount.innerHTML = childNum;
  if (childNum <= 14) {
    childIncrement.disabled = false;
  } else {
    childIncrement.disabled = true;
  }
});

//   This script is to show the additional links for mobile version
let addLinks = document.getElementById("moreLinks");
let mobileView = document.getElementById("footerMobile");
let flag = true;
addLinks.addEventListener("click", () => {
  if (flag == true) {
    // mobileView.classList.add("dropDown")
    mobileView.style.height = "100" + "%";
    mobileView.style.overflow = "visible";
    mobileView.style.display = "block";
    flag = false;
  } else {
    // mobileView.classList.remove("dropDown")
    mobileView.style.height = "0" + "px";
    mobileView.style.display = "none";
    mobileView.style.overflow = "hidden";
    flag = true;
  }
  console.log(flag);
});

// This script is for navbar cards when mouse hover the cards will show

const navItems = document.querySelectorAll(".navMenu li");
const cards = document.querySelectorAll(".cards");
let cardIdhov = "";

navItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    const cardId = item.getAttribute("data-card");
    cardIdhov = cardId;
    console.log(cardId);
    cards.forEach((card) => card.classList.remove("show"));

    const cardToShow = document.getElementById(cardId);
    if (cardToShow) {
      const itemRect = item.getBoundingClientRect();
      cardToShow.style.left = `${itemRect.left}px`;
      cardToShow.style.top = `${itemRect.bottom}px`;
      cardToShow.classList.add("show");
      cardToShow.style.display = "flex";
    }
  });

  item.addEventListener("mouseleave", () => {

    const cardId = item.getAttribute("data-card");
    cardIdhov = cardId;
    console.log(cardId);
    cards.forEach((card) => {card.classList.remove("show");
        card.style.display = "none";
    });
  });

});

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.classList.add("show");
    card.style.display = "flex";
    let cid = card.id;
    console.log(cid);
    document.querySelector(`[data-card="${cid}"]`).classList.add("hoverEffect");
    

  });
  card.addEventListener("mouseleave", () => {
    card.classList.remove("show");
    card.style.display = "none";
    let cid = card.id;
    console.log(cid);
    document.querySelector(`[data-card="${cid}"]`).classList.remove("hoverEffect");
  });
});





// window.addEventListener("scroll",(event)=>{
//     console.log(event.pageYOffset)
// })

// document.getElementById('card2').addEventListener('mouseover', ()=>{
//     // alert('working');
//     console.log(document.querySelector('[data-card="card2"]'));
//     document.querySelector('[data-card="card2"]').style.color="red";

// })

// document.getElementById('card2').addEventListener('mouseout', ()=>{
//     // alert('working');
//     console.log(document.querySelector('[data-card="card2"]'));
//     document.querySelector('[data-card="card2"]').style.color="blue";

// })