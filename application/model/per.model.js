const db = require ("../database/postgres.db");

class Perm {
    constructor({id,groupname }){
        this.id = id;
        this.groupname = groupname;
    }
    static async increase_perm(){
        try{
            
        }
        catch (e){
            throw new Error (e)
        }
    }
}
module.exports = Perm;