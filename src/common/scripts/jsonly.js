const event = new Event("jsonly", {cancelable: false, bubbles: true});
function checkOnlyJs(node = document.body) {
    node.querySelectorAll('script[type="text/html"]').forEach((element) => {
        const parent = element.parentElement;                                                    
        const contenu = element.innerHTML.replaceAll("<zcript", "<script").replaceAll("<\/zcript>","<\/script>").replaceAll("<z/>","");
        const nouveauBloc = document.createElement("div");
        parent?.replaceChild(nouveauBloc, element);
        nouveauBloc.outerHTML = contenu;
    });
    document.dispatchEvent(event);
}
document.addEventListener("DOMContentLoaded", e => checkOnlyJs());