const vite = require("vite");

module.exports = {
    
    install: function(less, pluginManager, functions) {
        const a = vite.loadEnv(process.env.NODE_ENV,  process.cwd(), "");
        
        functions.add('pi', function() {
            return new tree.Dimension(Math.PI);
        });

        // deprecated, because everything is on the same domain now
        functions.add('asset', function(lien){
            lien.value = `${lien.value}`;
            return new tree.URL(lien);
        })
    }
}