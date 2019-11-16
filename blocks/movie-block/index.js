
/**
 * Block external appendices.
 */
import classnames from "classnames";
import "./style.scss";
import "./editor.scss";
/**
 * Block dependiences
 */
const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
const { RichText } = wp.editor;

// The name of the block is a unique string that identifies a block.
//Name have a structued as namespace/block-name. 
//Name space is name of your plugin or theme.
export default registerBlockType('wcisl/movie', { // Rigster block function to register block

  //This is the title of your block . Which can be translated with translation function.
  title: __("Movie"),

  // This is a short description of your block. Which can be translated with translation function.
  description: __("Simple text & heading block  to show working of block"),

  // Assigning to the 'scisl' category  to he block. Default common | formatting | layout | widgets | embed

  category: 'wcisl',

  //We can add dashicon name or own SVG Icon.
  icon: 'video-alt2',

  // icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M19 13H5v-2h14v2z" /></svg>,

  // keywords helps to easier  discover a block with keyword aliases.
  keyword: [__('movie'), __('wcisl'), __("film")],

  //  Define the block attributes. 
  attributes: {
    title: {
      type: 'string',
      source: 'html',
      selector: 'h2',
    },
    description: {
      type: 'string',
      source: 'html',
      selector: 'p',
    },
  },
  //https://developer.wordpress.org/block-editor/developers/block-api/block-registration/#supports-optional
  support: {
    // By default, a block’s markup can be edited individually. To disable this behavior, set html to false.
    // html : false,

    // Add the support for an anchor link. By Default is true
    //anchor: false,

    // Remove the support for the custom className. By Default is true
    //customClassName: false,
  },
  edit: (props) => {
    const { attributes: { title, description }, className, setAttributes, isSelected } = props;

    const mainClasses = classnames(className, { 'seleted': isSelected })
    return (<div className={mainClasses}>
      <RichText
        tagName={"h2"} // The tag here is the element output and editable in the admin
        className={'movie-title'}
        value={title} // Any existing content, either from the database or an attribute default
        placeholder={__('Movie Title')} // Placeholder
        onChange={(title) => setAttributes({ title })} // setAttributes( {title:titles})
        keepPlaceholderOnFocus
      />
      <RichText
        tagName={"p"} // The tag here is the element output and editable in the admin
        className={'movie-descripton'}
        value={description} // Any existing content, either from the database or an attribute default
        placeholder={__('Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry ')} // place holder
        onChange={(description) => setAttributes({ description })} // setAttributes( {title:titles})
        keepPlaceholderOnFocus
      />

    </div>)
  },
  save: (props) => {
    const { attributes: { title, description }, className } = props;

    return (
      <div className={className}>
        {/* Saves <h2>Content added in the editor...</h2> to the database for frontend display */}
        <RichText.Content tagName={"h2"} value={title} />
        {/* Saves <p>Content added in the editor...</p> to the database for frontend display */}
        <RichText.Content tagName={"p"} value={description} />
      </div>
    );
  }
});



