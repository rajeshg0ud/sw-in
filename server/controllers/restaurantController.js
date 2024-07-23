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

const getAllRestaurants = asyncHandler(async (req, res) => {
  const keyword= req.query.keyword ? req.query.keyword.toLowerCase(): "";

  console.log(keyword )
  const restaurants= data.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(keyword)
  )
  res.status(200).json(restaurants);
});

export {getRestaurantById, getAllRestaurants};