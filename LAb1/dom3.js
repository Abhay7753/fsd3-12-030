import{EventEmitter} from "events";
const button =new EventEmitter();
button.on("click",(uname)=>{
    console.log(`button clicked by ${uname}`);
});
button.emit("clicked","Abhay jeet");
button.emit("clicked", "Abhay ");

button.emit("clicked", "Rajnesh");

button.emit("clicked", "Abhay jeet");

button.emit("clicked", "Abhay jeet");
button.emit("click");
