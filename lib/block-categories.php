<?php
namespace Wc_Isl\Examples;

add_filter( 'block_categories', __NAMESPACE__ . '\wcisl_register_block_category', 10, 2 );

/**
 * Register Block Category
 */
function wcisl_register_block_category( $categories, $post ) {

	$categories = array_merge(
		$categories,
		[
			[
				'slug'  => 'wcisl',
				'icon'  => 'sos',
				'title' => __( 'WC Islmabad Examples', 'wcisl' ),
			],
		]
	);
	return $categories;

}
