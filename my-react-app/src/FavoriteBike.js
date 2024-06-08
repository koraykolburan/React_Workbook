import { useState } from "react";

function FavoriteBike()  {
     const [brand, setBrand] = useState("Canyon");

     return (
          <>
               <h1>My Favorite Bike is <code>{brand}</code>!</h1>
               <button
                    type="button"
                    onClick={() => setBrand("Cannondale")}
               >Cannondale</button>
               &nbsp; &nbsp;
               <button
                    type="button"
                    onClick={() => setBrand("Mosso")}
               >Mosso</button>
               &nbsp; &nbsp;
               <button
                    type="button"
                    onClick={() => setBrand("Vitus Venon")}
               >Vitus Venon</button>
               &nbsp; &nbsp;
               <button
                    type="button"
                    onClick={() => setBrand("Allez")}
               >Allez</button>
               &nbsp; &nbsp;
               <button
                    type="button"
                    onClick={() => setBrand("Canyon")}
               >Canyon</button>
          </>
     )
}

export default FavoriteBike;