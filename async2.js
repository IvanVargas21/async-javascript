const getAllProducts = async () => {
    try {
        const response = await fetch('https://dummyjson.com/products/')
        const json = await response.json();
        console.log(json)
    }catch(error){
        console.log(error);
    }
}

getAllProducts();


// fetch('https://dummyjson.com/products/1', {
//     method: 'PUT',
//     headers: {
//         'Content-type': 'application/json'
//     },
//     body: JSON.stringify ({
//         title: 'iphone 19',
//         description: 'Changed to Iphone 19',
//         price: '1000',
//         rating: '9/10' 
//     })
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log(error))

