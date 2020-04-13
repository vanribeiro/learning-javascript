import Hello from './modules/Hello.js';

var body = document.querySelector('body');


body.onload = function (){
    const msg = new Hello("Classes no JavaScript...");
    console.log(msg.getMsg());
}