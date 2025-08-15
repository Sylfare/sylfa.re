const event = new Event("jsonly", {cancelable: false, bubbles: true});
function checkOnlyJs(node = document.body) {
    node.querySelectorAll('script[type="text/html"]').forEach((element) => {
        const parent = element.parentElement;                                                    
        const contenu = element.innerHTML.replaceAll("<zcript", "<script").replaceAll("<\/zcript>","<\/script>").replaceAll("<z/>","");
        const nouveauBloc = document.createElement("div");
        parent?.replaceChild(nouveauBloc, element);
        nouveauBloc.outerHTML = contenu;
        if(nouveauBloc.querySelector('script[type="text/html"]') != null) {
            checkOnlyJs(nouveauBloc);
        }
    });
    document.dispatchEvent(event);
}
document.addEventListener("readystatechange", e => checkOnlyJs());

Object.keys(document).forEach(key => {
    if (/^on/.test(key)) {
        document.addEventListener(key.slice(2), event => {
            console.log(event);
        });
    }
});