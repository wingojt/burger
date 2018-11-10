

//call the ORM functions using burger specific input for the ORM
// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgers = {
    selectAll: (callback)=>{
      orm.selectAll("burgers",  (result)=>{
        callback(result);
      })
    },
    insertOne: (newValue, callback)=>{
      orm.insertOne("burgers", "burger_name", newValue, (result)=>{
        callback(result);
      })
    },
    updateOne: (idVal, callback)=>{
      orm.updateOne("burgers", idVal, (result)=>{
        callback(result);
      })
    }
  }

// Export the database functions for the controller (burgers_controller.js).

module.exports = burgers;