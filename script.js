let btn = document.querySelector('.menu');
let navigation = document.querySelector('.links');
let navigationItems = document.querySelectorAll('.links a');



btn.addEventListener('click', () => {
    btn.classList.toggle('active')
    navigation.classList.toggle('active')
})

navigationItems.forEach(navItem => {
    navItem.addEventListener('click', () => {
        btn.classList.remove('active');
        navigation.classList.remove('active');
    })
})