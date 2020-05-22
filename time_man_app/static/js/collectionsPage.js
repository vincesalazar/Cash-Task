// THIS IS SO THE EDIT BUTTON ISNT WEIRD WHEN ON GENERAL COLLECTION
var buttons = document.querySelectorAll(".coll-cont .collection .coll-footer div:nth-child(2)")
console.log("underneath is buttons")
console.log(buttons);
console.log("this is buttons.length" + buttons.length);
buttons.forEach((e, i) => {
    if (i == buttons.length - 1) {
        e.style.justifyContent = "flex-end"
    }
});
// ************

// ******* THIS IS FOR NOTHING
// var ul = document.querySelectorAll(".coll-cont .collection ul");
// var li = document.querySelectorAll(".coll-cont .collection ul li");
// console.log(li);
// ul.forEach((e, i) => {
//     var childArr = e.children;
//     if (childArr.length == 0) {
//         e.style.borderBottom = "none"
//     }
// });
// var i;
// for (i = 0; i < li.length; i++) {
//     if (i == li.length - 1) {
//         li[i].style.borderBottom = "none";
//     }
// }



window.addEventListener("load", () => {

});