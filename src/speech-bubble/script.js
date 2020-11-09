import domReady from '@wordpress/dom-ready';

const isCSSVariableSupport = window?.CSS?.supports( '(--a: 0)' );

domReady( () => {
	if ( isCSSVariableSupport ) {
		return;
	}
	const sel = '.wp-block-simple-speech-bubble-speech-bubble__comment';
	const bubbles = document.querySelectorAll( sel );
	bubbles.forEach( ( element ) => {
		const computedStyle = window.getComputedStyle( element );
		const arrow = document.createElement( 'div' );
		arrow.classList.add(
			'wp-block-simple-speech-bubble-speech-bubble__arrow'
		);

		arrow.style.borderColor = computedStyle.getPropertyValue(
			'background-color'
		);
		element.appendChild( arrow );
	} );
} );
