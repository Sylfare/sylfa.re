// function polyfillMethod(source, method, callback, ...args) {
//     var type;
//     alert("alors");
//     switch(typeof source) {
//         case "string":
//             alert("oui, ça avance")
//             type = String.prototype;
//             break;
//         default:
//             type = Object.getPrototypeOf(source);
//     }
//     if(type.hasOwnProperty(method)){
//         console.log("normal");
//         return source[method](...args);
//     } else {
//         alert("callback");
//         return callback(source);
//     }
// }

// if(hasGlobalVariables === undefined) {

//     function replaceAll(source, search, replace){
//         alert("jpp")
//         // return polyfillMethod(source, "replaceAll", function(){ return source.split(search).join(replace);})
//         return source.split(search).join(replace);
//     }
// }