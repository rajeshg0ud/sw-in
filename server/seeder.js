import dotenv from 'dotenv'
import connectToDB from './db.js';  
import User from './models/userModel.js'; 
import Users from './users.js'; 

dotenv.config();
connectToDB();


const importData = async () => {
    try { 
        await User.deleteMany(); 

         await User.create(Users);
         

        console.log('Data Imported!'.green.inverse);
        process.exit();
    } catch (err) {
        console.error(`${err}`.red.inverse);
        process.exit(1);
    }
}

const destroyData= async()=>{
    try{
 
        await User.deleteMany(); 


    console.log('Data Destroyed!'.red.inverse);
        process.exit();
    } catch (err) {
        console.error(`${err}`.red.inverse);
        process.exit(1);
    }
} 


if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}
