let arrItemList = [
    'Lievito per dolci',
    'Farina 00',
    'Zucchero',
    'Uova',
    'Limone',
    'Burro',
    'Latte',
    'Nutella'
];

let eleGoceryList = document.querySelector('#groceryList');
const eleBtn= document.querySelector('#btn');

eleBtn.addEventListener('click', function() {
    let i = 0;
    while (i < arrItemList.length) {
        eleGoceryList.innerHTML += (`<li>${arrItemList[i]}</li>`);
        i++;
    }

})