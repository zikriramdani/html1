function getWomens() {
    var getShoes = [
        {
            id: 1,
            img: 'product00.jpg',
            name: 'aw',
            price: 'Rp. xxxxxx'
        },
        {
            id: 2,
            img: 'product01.jpg',
            name: 'aq',
            price: 'Rp. xxxxxx'
        },
        {
            id: 3,
            img: 'product02.jpg',
            name: 'aqwe',
            price: 'Rp. xxxxxx'
        }
    ];
    for (var i = getShoes.length - 1, item; item = getShoes[i]; i--) {
        console.log("Looping: index ", i, "item", item);
        // document.getElementById("dataShoes").innerHTML = i;
        // document.getElementById("nameShoes").innerHTML = item.name;
    };
};
getWomens();
