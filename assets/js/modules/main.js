var main = {
	init: function(){
		this.geral();
	},
	geral: function(){

        // links externos
        $('a[rel=external]').click( function() {
            window.open(this.href);
            return false;
        });

        // svg
        svg4everybody();

        // placeholder no ie
        $('input, textarea').placeholder();
	}
}
main.init();
