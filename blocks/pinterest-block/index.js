
import "./style.scss";
/**
 * Block dependiences
 */
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;
const { __ } = wp.i18n;
const { InspectorControls } = wp.editor;
const { TextControl, PanelBody, ServerSideRender } = wp.components;


export default registerBlockType('wcisl/pinterset', { // Rigster block function to register block

  //This is the title of your block . Which can be translated with translation function.
  title: __("Pinterst Profile"),

  // This is a short description of your block. Which can be translated with translation function.
  description: __("It will show pinterset user porilfe image and follower."),

  // Assigning to the 'wcisl' category  to he block. Default common | formatting | layout | widgets | embed

  category: 'wcisl',

  //We can add dashicon name or own SVG Icon.
  icon: 'money',

  // icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M19 13H5v-2h14v2z" /></svg>,

  // keywords helps to easier  discover a block with keyword aliases.
  keyword: [__('pinterest'), __('wcisl'), __("profile")],

  //  Define the block attributes. 
  attributes: {
    slug: {
      type: 'string',
      default: ''
    },

  },
  //https://developer.wordpress.org/block-editor/developers/block-api/block-registration/#supports-optional
  support: {
    // By default, a block’s markup can be edited individually. To disable this behavior, set html to false.
    html: false,

    // Add the support for an anchor link. By Default is true
    //anchor: false,

    // Remove the support for the custom className. By Default is true
    //customClassName: false,
  },
  edit: (props) => {
    const { attributes: { slug }, className, setAttributes } = props;
    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title={__('Settings')}>
            <TextControl
              label={__("Pinterest Profile slug")}
              value={slug}
              onChange={(slug) => setAttributes({ slug })}
            />
          </PanelBody>
        </InspectorControls>
        <ServerSideRender
          block={'pinterset/wcisl'}
          attributes={props.attributes}
        />
      </Fragment>)
  },
  save: (props) => {
    return null
  }
});



