<?php
/**
 * Plugin Name:     Simple Speech Bubble.
 * Plugin URI:      https://github.com/team-hamworks/editors-note
 * Description:     Simple Speech Bubble Block.
 * Author:          HAMWORKS
 * Author URI:      https://ham.works
 * License:         GPLv2 or later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     simple-speech-bubble
 * Domain Path:     /languages
 * Version: 0.0.2
 */

add_action(
	'init',
	function () {
		register_block_type_from_metadata( __DIR__ . '/src/speech-bubble' );
	}
);
