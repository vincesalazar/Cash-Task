var collectionButtons = document.querySelector('.coll-cont .collection .coll-footer div:nth-child(3)');
console.log(collectionButtons);
if (collectionButtons.childNodes.length < 2) {
    collectionButtons.style.justifyContent = "flex-end";
}

var collection = document.querySelectorAll('.collection');
collection.forEach((e, i) => {
    var collectionList = e.childNodes[3];
    var showButton = e.childNodes[5].childNodes[1];
    var showLessButton = e.childNodes[5].childNodes[3];
    console.log("KJSDNKCJNSDKJCNSDKJNCSD")
    console.log(e.childNodes[5].childNodes[3])
    showButton.addEventListener("click", () => {
        collectionList.style.display = "block";
        showButton.style.display = "none";
        showLessButton.style.display = "block";
        showLessButton.childNodes[0].style.cursor = "pointer";
        showLessButton.addEventListener("click", () => {
            collectionList.style.display = "none";
            showLessButton.style.display = "none";
            showButton.style.display = "block";
        })
    });
})

// var collectionTasksList = document.querySelector('.coll-cont .collection ul');
// var showMoreCollectionTasksButton = document.querySelector('.coll-cont .collection .coll-footer div:nth-child(1)');
// showMoreCollectionTasksButton.addEventListener("click", () => {
//     collectionTasksList.style.display = "block"
// });