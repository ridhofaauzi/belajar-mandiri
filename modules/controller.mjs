//import data users file data.mjs
import users from "./data.mjs";

/**
 * membuat user controller 
 * terdapat method index dan store
 */

const index = () => {
    console.log("Index - Get All Users" );
    users.forEach(function (user) {
        console.log(user);
    });
};

const store = (user) => {
    console.log("Store - Get All Users" );
    users.push(user);
};

/**
 * export beberapa data 
 * data disimpan di dalam object
 */

export{index, store};