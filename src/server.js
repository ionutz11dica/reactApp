const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors');


app.use(express.static(path.join(__dirname, 'src')))
app.use(cors());



const admin = require('firebase-admin');


const serviceAccount = require("./functions/serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
  
const db = admin.firestore();



app.get('/products', async (req, res) => {
    var mocks = []
    const snapshot = await db.collection('products').get();
    snapshot.forEach((doc) => {
        mocks.push(doc.data())
      console.log(doc.id, '=>', doc.data());
    });

  return res.send(mocks)
})
  
app.listen(4001, () =>
    console.log('Express server is running on localhost:8080')
);









const mockProducts = [
    {
        id: 1,
        title: 'Nike Air Max 90',
        imageUrl: 'https://i.pinimg.com/originals/ef/3e/52/ef3e5290da4e264a4bd180d18ea3519d.jpg',
        price: 100,
        currency: 'dollars',
        description: 'Nike Air Max 90 White / Grey / Turquoise',
        color: 'turquoise',
        brand: 'Nike',
        sizes: [40, 41, 42, 43, 44],
        sizesAvailable: [40, 42, 44],
    },
    {
        id: 2,
        title: 'ADIDAS ADVENTURE AOP WOVEN PANTS',
        imageUrl: 'https://static.footshop.com/419218/98095.jpg',
        price: 100,
        currency: 'dollars',
        description: 'Red',
        color: 'multicolor',
        brand: 'Adidas',
        sizes: [40, 41, 42, 43, 44],
        sizesAvailable: [40, 42, 44],
    },
    {
        id: 3,
        title: 'Adidas Down Regent',
        imageUrl: 'https://static.footshop.com/414022/84013.jpg',
        price: 200,
        currency: 'dollars',
        description: 'Collegiate Green',
        color: 'turquoise',
        brand: 'Adidas',
        sizes: [40, 41, 42, 43, 44],
        sizesAvailable: [40, 42, 44],

    },
    {
        id: 4,
        title: 'Nike Air Force 1 GTX',
        imageUrl: 'https://static.footshop.com/421519/86107.jpg',
        price: 179,
        currency: 'dollars',
        description: 'Flax/ Flax-Wheat-Gum Light Brown',
        color: 'yellow',
        sizes: [40, 41, 42, 43, 44],
        sizesAvailable: [42, 44],
        brand: 'Nike',
    },
    {
        id: 5,
        title: 'NIKE SPORTSWEAR WOVEN JACKET',
        imageUrl: 'https://static.footshop.com/392698/61408.jpg',
        price: 74.97,
        currency: 'dollars',
        description: 'Barely Volt/ White/ White/ Volt',
        color: 'white',
        sizes: [40, 41, 42, 43, 44],
        sizesAvailable: [43, 44],
        brand: 'Nike',
    },
    {
        id: 6,
        title: 'VANS SK8-HI 38 DX (ANAHEIM FACTORY)',
        imageUrl: 'https://static.footshop.com/350371/56593.jpg',
        price: 76.76,
        currency: 'dollars',
        description: 'Hoffman Fabrics/ Native Mix',
        color: 'yellow',
        brand: 'Vans',
        sizes: [40, 41, 42, 43, 44],
        sizesAvailable: [41, 43],

    },
    {
        id: 7,
        title: 'MAHARISHI LIBERTY DRAGON HOODED SWEAT',
        imageUrl: 'https://static.footshop.com/408313/95632.jpg',
        price: 300,
        currency: 'dollars',
        description: 'Black',
        color: 'black',
        brand: 'Puma',
        sizes: [40, 41, 42, 43, 44],
        sizesAvailable: [40, 42],
    },
    {
        id: 8,
        title: 'CHINATOWN MARKET SMILEY CHAMPION 3 RINGS SHORTS',
        imageUrl: 'https://static.footshop.com/411832/95380.jpg',
        price: 90,
        currency: 'dollars',
        description: 'Red',
        color: 'red',
        brand: 'Puma',
        sizes: [40, 41, 42, 43, 44],
        sizesAvailable: [41, 42],
    },
]
