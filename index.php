<?php
/**
 * Plugin Name: Simple Speech Bubble.
 */

add_action(
	'init',
	function () {
		register_block_type_from_metadata( __DIR__ . '/src/speech-bubble' );
	}
);
