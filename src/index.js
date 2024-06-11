// index.js

// Callbacks
const handleClick = (ramen) => {
  // Add code
  const ramenDetail = document.querySelector("#ramen-detail")
  const ramenDetailImg = ramenDetail.querySelector(".detail-image")
  const ramenDetailName = ramenDetail.querySelector(".name")
  const ramenDetailResturant = ramenDetail.querySelector(".restaurant")
  const ramenRating = document.querySelector("#rating-display")
  const ramenComment = document.querySelector("#comment-display")



  ramenDetailImg.src = ramen.image
  ramenDetailName.textContent = ramen.name
  ramenDetailResturant.textContent = ramen.restaurant
  ramenRating.textContent = ramen.rating
  ramenComment.textContent = ramen.comment

};

const addSubmitListener = () => {
  // Add code
  const submit = document.querySelector("#new-ramen")
  submit.addEventListener("submit", e =>{
    e.preventDefault()
    const newRamen = {
      name: e.target.name.value,
      restaurant: e.target.name.value,
      image: e.target.image.value,
      rating: e.target.rating.value,
      comment: e.target["new-comment"].value
    }
    addRamen(newRamen)
  })

}

const displayRamens = () => {
  // Add code
  fetch("http://localhost:3000/ramens")
  .then(r => r.json())
  .then(ramens => {
    handleClick(ramens[0])
    ramens.forEach(ramen => {
      console.log(ramen)
      addRamen(ramen)
    })
  }) 

};

const addRamen = (ramen) => {
  const ramenImg = document.createElement("img")
  const ramenMenu = document.querySelector("#ramen-menu")
  ramenImg.src = ramen.image
  ramenImg.addEventListener("click",() => handleClick(ramen))
  ramenMenu.append(ramenImg)
}


const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here
  document.addEventListener("DOMContentLoaded",() => {
    displayRamens()
    addSubmitListener()
  })
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
