

let eleBtn= document.querySelector('#btn');

eleBtn.addEventListener('click', function() {
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
    
    let eleGoceryList = document.querySelector('#goceryList');
    let i = 0;
    while (i < arrItemList.length) {
        console.log(arrItemList[i]);
        eleGoceryList.innerHTML += (`<li>${arrItemList[i]}</li>`);
        i++;
    }

})