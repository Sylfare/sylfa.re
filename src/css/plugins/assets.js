const vite = require("vite");

module.exports = {
    
    install: function(less, pluginManager, functions) {
        // console.log(process.env)
        const a = vite.loadEnv(process.env.NODE_ENV,  process.cwd(), "");
        
        functions.add('pi', function() {
            return new tree.Dimension(Math.PI);
        });

        functions.add('asset', function(lien){
            lien.value = `${a.ASSETS_BASE_URL}${lien.value}`;
            return new tree.URL(lien);
        })
    }
}