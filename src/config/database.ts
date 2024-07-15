import {Sequelize} from "sequelize";


const sequelize = new Sequelize(process.env.MYSQL_DB || '', process.env.MYSQL_USER  || '', process.env.MYSQL_PASS || '',{
    host: '127.0.0.1',
    dialect: "mysql"
  });

  export default sequelize