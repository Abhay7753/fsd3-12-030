import express from 'express';
import pr
const app = express();

app.get("/api/products",(req,res)=>{
    let sortedProducts = products.map(({name, image , price, id})=>({
        name,
        image, 
        price,
        id,


    }));
    res.status(200).json({count:sortedProducts.length, data:sortedProducts})

})


app.use((req, res) =>{
    res.status(404).send("<h1>Page not found");
});


app.listen(4444, () => console.log("prg3 is running at 4444"));