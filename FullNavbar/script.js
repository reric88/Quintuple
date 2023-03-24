console.log('This town ain\'t big \'nuff for the two\'a us. ');

const links = document.querySelectorAll('.navbar-link');


links.forEach((link) => {
    link.addEventListener('click', () => {
        
        links.forEach((link) => {
        link.className = 'navbar-link';
        });
        link.classList.add('change');
        
        subLinks.previousElementSibling.classList.add('previousElement');
        subLinks.nextElementSibling.classList.add('nextElement');
    });
});






// if (classLink.navLink.first) {
//     document.querySelector(classLink.navMenu.first).classList.add('changed');
// } else {
//     document.querySelector(classLink.navMenu.first).classList.remove('changed');
// };
// if (classLink.navLink.second) {
//     document.querySelector(classLink.navMenu.second).classList.add('changed');
// } else {
//     document.querySelector(classLink.navMenu.second).classList.remove('changed');
// };
// if (classLink.navLink.third) {
//     document.querySelector(classLink.navMenu.third).classList.add('changed');
// } else {
//     document.querySelector(classLink.navMenu.third).classList.remove('changed');
// };
// if (classLink.navLink.fourth) {
//     document.querySelector(classLink.navMenu.fourth).classList.add('changed');
// } else {
//     document.querySelector(classLink.navMenu.fourth).classList.remove('changed');
// };
// if (classLink.navLink.fifth) {
//     document.querySelector(classLink.navMenu.fifth).classList.add('changed');
// } else {
//     document.querySelector(classLink.navMenu.fifth).classList.remove('changed');
// };
// if (classLink.navLink.sixth) {
//     document.querySelector(classLink.navMenu.sixth).classList.add('changed');
// } else {
//     document.querySelector(classLink.navMenu.sixth).classList.remove('changed');
// };



// links.forEach((link) => {
//     link.addEventListener('click', () => {
//         links.forEach((link) => {
//         link.className = 'navbar-link';
//     });
//     link.classList.add('change');
//     subSwitch.classList.add('changed');

//     link.previousElementSibling.classList.add('previousElement');
//     link.nextElementSibling.classList.add('nextElement');
    // subLinks.previousElementSibling.classList.add('previousElement');
    // subLinks.nextElementSibling.classList.add('nextElement');
// });
// });







// function subLink() {
//     let getClass = document.getElementsByClassName
//      if (getClass('first')) {
//         subSwitch.classList.add('changed');
//         alert('yep');
//      };
//      if (document.getElementsByClassName('second')) {
//         subSwitch.classList.add('changed');
//         alert('yep');
//      };
//      if (document.getElementsByClassName('third')) {
//         subSwitch.classList.add('changed');
//      };
//      if (document.getElementsByClassName('fourth')) {
//         subSwitch.classList.add('changed');
//      };
//      if (document.getElementsByClassName('fifth')) {
//         subSwitch.classList.add('changed');
//      };
//      if (document.getElementsByClassName('sixth')) {
//         subSwitch.classList.add('changed');
//      };

// }




// links.forEach((link) => {
//     link.addEventListener('click', () => {
//         menu.forEach((link) => {
//         link.className = 'navbar-menu';
//         });
//         link.classList.add('change');

//         link.previousElementSibling.classList.add('previousElement')
//         link.nextElementSibling.classList.add('nextElement')
//     })
// })

