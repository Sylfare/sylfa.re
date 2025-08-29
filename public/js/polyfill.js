window.polyfillMethod = function(source, method, callback) {
    var type;
    alert("alors");

    if(source === undefined) return;
    switch(typeof source) {
        case "string":
            // alert("oui, ça avance")
            type = String.prototype;
            break;
        case "undefined": // huh?
            return;
        default:
            type = Object.getPrototypeOf(source);
    }
    if(source === "undefined") {
        return;
    }

    if(type.hasOwnProperty(method)){
        console.log("normal");
        return type[method].bind(source);
    } else {
        alert("callback");
        return callback.bind(source);
    }  
}

window.polyfill = {
    replaceAllBy: function(source){return polyfillMethod(source, "replaceAll", function(search, replace){return this.split(search).join(replace)})}
}



// var truc = "ezaiou"
// function getPolyfill() {
//     return polyfill;
// }