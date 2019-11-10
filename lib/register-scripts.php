<?php

namespace Wc_Isl\Examples;

add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\register_block_assets' );
/**
 * Enqueue block editor only JavaScript and CSS.
 */
function register_block_assets() {

	// Make paths variables so we don't write em twice ;)
	$editor_js_path    = '/assets/js/blocks.editor.js';
	$editor_style_path = '/assets/css/blocks.editor.css';

	$js_dependencies = [ 'wp-element', 'wp-i18n', 'wp-components', 'wp-blocks', 'wp-editor' ];

	// Register the bundled block JS file.
	wp_enqueue_script(
		'wcisl-editor-js',
		wcisl_get_plugin_url() . $editor_js_path,
		$js_dependencies,
		filemtime( wcisl_get_plugin_directory() . $editor_js_path ),
		true
	);

	// Register editor only styles.
	wp_enqueue_style(
		'wcisl-editor-css',
		wcisl_get_plugin_url() . $editor_style_path,
		[],
		filemtime( wcisl_get_plugin_directory() . $editor_style_path )
	);

}

add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\register_fornt_block_assets' );

/**
 *  Enqueuing block assets for both editor and front-end.
 */
function register_fornt_block_assets() {
	$style_path = '/assets/css/blocks.style.css';
	// Register shared editor and frontend styles.
	// You Can Add ! is_admin() condition to enqueue on only frontend.
	wp_enqueue_style(
		'wcisl-css',
		wcisl_get_plugin_url() . $style_path,
		[],
		filemtime( wcisl_get_plugin_directory() . $style_path )
	);
}
