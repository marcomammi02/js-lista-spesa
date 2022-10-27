const arrItemList = [
    'Lievito per dolci',
    'Farina 00',
    'Zucchero',
    'Uova',
    'Limone',
    'Burro',
    'Latte',
    'Nutella'
]

const eleBtn= document.querySelector('#btn');

eleBtn.addEventListener('click', function() {
    const eleGoceryList = document.querySelector('#goceryList');
    let i = 0;
    while (i < arrItemList.length) {
        console.log(arrItemList[i]);
        eleGoceryList.innerHTML += (`<li>${arrItemList[i]}</li>`);
        i++;
    }

})