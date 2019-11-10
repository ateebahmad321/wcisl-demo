<?php
/**
 * Main plugin file
 *
 * @package     Wc_Isl\Examples
 * @author      Sharaz Shahid (@sharazghouri1)
 * @license     GPL2+
 *
 * @wordpress-plugin
 * Plugin Name: WordCamp Islmabad - Examples
 * Plugin URI:  .
 * Description: A plugin containing examples for developers to start develping blocks.
 * Version:     1.0.0
 * Author:      Sharaz Shahid
 * Author URI:  https://twitter.com/sharazghouri1
 * Text Domain: wcisl
 * Domain Path: /languages
 * License:     GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 */

namespace Wc_Isl\Examples;

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * Gets this plugin's absolute directory path.
 *
 * @return string
 */
function wcisl_get_plugin_directory() {
	return __DIR__;
}

/**
 * Gets this plugin's URL.
 *
 * @return string
 */
function wcisl_get_plugin_url() {
	static $plugin_url;

	if ( empty( $plugin_url ) ) {
		$plugin_url = plugins_url( null, __FILE__ );
	}

	return $plugin_url;
}



// Enqueue JS and CSS.
require __DIR__ . '/lib/register-scripts.php';

// Register block categories.
require __DIR__ . '/lib/block-categories.php';

// Register dynamic blocks.
require __DIR__ . '/lib/dynamic-block.php';


