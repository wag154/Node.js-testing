const db = require("../database/postgres.db");
const bcrypt = require("bcrypt")
class User{
    constructor({id, username , name, password, email, level}){
        this.id = id;
        this.username = username;
        this.name = name;
        this.password = password;
        this.email = email;
        this.level = level;
    }
     async Sign_Up(){
        try{
            const hashPassword = await bcrypt.hash(this.password, 10);
            const resp = await db.query("INSERT INTO users (username,password) VALUES ($1,$2)", [this.username,hashPassword])
            
            if (resp.rowCount == 0){
                throw new Error("unable to add user");
            }
            else{
                return {message : "created"};
            }
        }
        catch (e){
            throw new Error("username not unique")
        }
    }
   async Login (){
        try{
            const resp = await db.query("SELECT * FROM users WHERE username = $1",[this.username])
            
            if (resp.rowCount === 0){
                throw new Error("No account with those details")
            }
            
            const user = resp.rows[0];
            const pwdCheck = await bcrypt.compare(this.password, user.password);
        
            if (!pwdCheck){
                throw new Error ("Invalid Password")
            }
            
            return user.id;
            
        }
        catch (e){
         throw new Error (e)
        }
    }
}
module.exports = User