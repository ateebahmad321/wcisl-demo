<?php
namespace Wc_Isl\Examples;

add_action( 'init', __NAMESPACE__ . '\wcisl_register_dynamic_block' );
/**
 * Register dynamic block.
 */
function wcisl_register_dynamic_block() {
	register_block_type(
		'pinterset/wcisl',
		[
			'render_callback' => __NAMESPACE__ . '\wcisl_render_dynamic_block',
			'attributes'      => [  // regsiter attributes same as on js side.
				'slug' => [
					'type'    => 'string',
					'default' => '',
				],
			],
		]
	);

}

/**
 * Callback dynamic block rendering.
 *
 * @param array  $attributes all regiser attributes.
 * @param string $content content of the block.
 */
function wcisl_render_dynamic_block( $attributes, $content ) {
	$meta_tags = get_meta_tags( 'https://www.pinterest.com/' . $attributes['slug'] );

	$output_markup = '';
	if ( isset( $meta_tags['pinterestapp:followers'] ) ) {
		ob_start();
		?>
		<div class="wcisl-pinterest">
			<img src="<?php echo esc_url( $meta_tags['og:image'] ); ?>">
			<p>Title: <?php esc_attr_e( $meta_tags['og:title'] ); ?></p>
			<p>Follower: <?php esc_attr_e( $meta_tags['pinterestapp:followers'] ); ?></p>
		</div>
		<?php
		$output_markup = ob_get_clean();

	} else {
		$output_markup = '<div>  Look like your user name <b>' . $attributes['slug'] . '</b> incorrect. Please enter correct user name <div>';
	}
	return $output_markup;
}
