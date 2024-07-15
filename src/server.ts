import dotenv from 'dotenv';
dotenv.config();
import app from './app'
// import {Sequelize} from 'sequelize';
import sequelize from './config/database';

app.listen(process.env.PORT, async ()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error:any) {
        console.error('Unable to connect to the database:', error);
      }
    console.log('App is listening on port' + process.env.PORT)
})
