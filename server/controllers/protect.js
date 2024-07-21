import jwt from 'jsonwebtoken'; 
import User from '../models/userModel.js'
import asyncHandler from '../asyncHandler.js';

const protect = asyncHandler(async (req, res, next) => {
  let token;
  token = req.cookies.jwt;
console.log(token); 
   console.log(req.cookies);

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select('-password'); // here we are finding the user by token and 
                                                                          // assigning the user id for frontend purpose
      
      next();
    } catch (err) {
      res.status(401); // Use integer status code
      throw new Error('Not authorized, token failed');
    }
  } else {
    res.status(401); // Use integer status code
    throw new Error('Not authorized, no token');
  }
});

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(404); // Use integer status code
    throw new Error('Not authorized, not an admin');
  }
};

export { admin, protect };
