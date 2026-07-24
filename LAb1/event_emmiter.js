import{EventEmitter} from "node:events";



const start = () => {
    console.log("System starts");

};
const working =(name)=>{
    console.log(`${name}add item to cart `);
};
const checkout =(name)=>{
    console.log(`${name} logged out `);
};
const task =new EventEmitter();
task.once("greet",start);
task.on("greet", working);
task.on("greet",checkout);
task.once("exit",()=>{
    console.log("system shutting down");
})

task.emit("greet","Abhay jeet");
task.emit("greet", "Aman chauhan ");
task.emit("greet", "Abhay kumar");
task.emit("exit","manager");