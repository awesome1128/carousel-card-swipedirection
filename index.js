window.addEventListener('DOMContentLoaded', async function () {
	new Flickity( '.carousel', {
	  	on: {
			  ready: function() {
				  console.log('Flickity is ready');
			  },
			  change: function( index ) {
				  console.log( 'Slide changed to' + index );
			}
		},
		draggable: true,
		wrapAround: true,
		prevNextButtons: true,
		autoPlay: true,
		autoPlay: 1500,
		pauseAutoPlayOnHover: true,
		pageDots: false
	});
});