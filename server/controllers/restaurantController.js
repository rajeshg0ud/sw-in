import asyncHandler from "../asyncHandler.js";
import { data } from "../data.js";
import { restaurantsMenu } from "../resMenu.js";


const getRestaurantById= asyncHandler(async(req, res)=>{
    const id= req.params.id;

    const restaurant= restaurantsMenu.find(r=> r.id === id);
 
        if (restaurant) {
          res.json(restaurant);
        } else {
          res.status(404).send('Restaurant not found');
        }

})

const getAllRestaurants= asyncHandler(async(req, res)=>{

    res.json(data)
})

export {getRestaurantById, getAllRestaurants};