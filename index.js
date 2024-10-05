const express = require('express');
const cors = require('cors');
const { resolve } = require('path');

const app = express();
app.use(cors());
const port = 3000;

app.get('/cart-total', (req,res)=> {
   let newItempPrice=parseFloat(req.query.newItemPrice);
   let cartTotal=parseFloat(req.query.cartTotal);

   let result=newItempPrice+cartTotal;
   res.send(result.toString());
})

app.get('/membership-discount', (req,res)=> {
    let cartTotal=parseFloat(req.query.cartTotal);
    let isMember=req.query.isMember === 'true';
    if(isMember) {
       cartTotal=0.9*cartTotal;
    }
    res.send(cartTotal.toString());
})

app.get('/estimate-delivery', (req,res)=> {
     let shippingMethod=req.query.shippingMethod;
     let distance=parseFloat(req.query.distance);
     let lowerCaseShippipngMethod=shippingMethod.toLowerCase();
     let result;
     if(lowerCaseShippipngMethod==='standard') {
        result=distance/50;
     } else if(lowerCaseShippipngMethod==='express') {
        result=distance/100;
     }
     res.send(result.toString());
})

app.get('/shipping-cost', (req,res)=> {
   let weight=parseFloat(req.query.weight);
   let distance=parseFloat(req.query.distance);

   let result=weight*distance*0.1;
   res.send(result.toString());
})

app.get('/loyalty-points', (req,res)=> {
    let purchaseAmount=parseFloat(req.query.purchaseAmount);
    let result=purchaseAmount*2;

    res.send(result.toString());
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
