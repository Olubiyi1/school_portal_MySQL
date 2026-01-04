import { sequelize } from "./config/database.js";

const testConnection = async()=>{
    try{
        await sequelize.authenticate()
        console.log("connection to db successful");
    }
    catch(err){
        console.error("unable to conncet to db", err.message);
        process.exit(0)
    }
    finally{
        await sequelize.close()
    }
}
testConnection()