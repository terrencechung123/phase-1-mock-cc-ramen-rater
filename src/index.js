const url = 'http://localhost:3000/ramens'
const ramenMenu = document.getElementById('ramen-menu')
const ramenDetail = document.querySelector('.detail-image')
const ramenName = document.querySelector('h2.name')
const ramenRestaurant = document.querySelector('h3.restaurant')
const ramenRating = document.getElementById('rating-display')
const ramenComment = document.querySelector('#comment-display')
const ramenForm = document.querySelector('#new-ramen')

console.log(ramenForm);
ramenForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log('hello', e.target);
    const newRamen = {
        name : e.target.name.value,
        restaurant : e.target.restaurant.value,
        image : e.target.image.value,
        rating : e.target.rating.value,
        comment : e.target['new-comment'].value,
    };
    console.log(newRamen);
    renderRamen(newRamen);

})



// const ramenComment
// const addNewRamen
// const createNewRamen
// console.log(ramenDetail)


fetch(url)
.then(resp=>resp.json())
.then(ramenData=>{
    console.log(ramenData);
    ramenData.forEach(ramenObj=>renderRamen(ramenObj))
})

function renderRamen(ramenObj){
    // console.log(ramenObj);
    getRamenImage(ramenObj);

}

function getRamenImage(ramenObj){
    const div = document.createElement('div')
    const img = document.createElement('img')
    // console.log(ramenObj.image)
    img.addEventListener('click',(e)=>{displayImage(ramenObj)})
    img.src = ramenObj.image;
    div.append(img)
    ramenMenu.append(div);
}

function displayImage(ramenObj){
// console.log(ramenObj)
ramenDetail.src = ramenObj.image;
ramenName.textContent = ramenObj.name;
ramenRestaurant.textContent = ramenObj.restaurant
ramenRating.textContent = ramenObj.rating;
ramenComment.textContent = ramenObj.comment;
// addNewRamen.textContent = ramenObj.

}