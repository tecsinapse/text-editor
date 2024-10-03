import React from 'react';
import 'tinymce/tinymce';
import 'tinymce/themes/silver/theme';
import 'tinymce/plugins/paste';
import 'tinymce/plugins/link';
import 'tinymce/plugins/code';
import 'tinymce/plugins/image';
import 'tinymce/plugins/lists';
import 'tinymce-i18n/langs/pt_BR';
import { Editor } from '@tinymce/tinymce-react';
import { makeStyles } from '@material-ui/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import PropTypes from 'prop-types';

const useStyle = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
  },
  editorError: {
    borderColor: 'red',
    borderWidth: '1px',
    borderStyle: 'solid',
  },
}));

export const EditText = ({
  onChange,
  value,
  uploadURL,
  disabled,
  error,
  name,
  language,
  showMenu,
  uploadFunc,
  hasImage,
  hasImageButton,
  skinUrl,
  toolbarDrawer,
  variant,
  height,
  iconsUrl,
  ...props
}) => {
  const classes = useStyle();

  const plugins = ['link', 'code', 'paste', 'lists'];

  if (hasImage) {
    plugins.push('image');
  }

  const toolbar = {
    simple: [
      'paste',
      'undo redo',
      'fontselect fontsizeselect forecolor',
      'bold italic',
      'alignleft aligncenter alignright alignjustify',
      'image',
    ],
    advanced: [
      'copy cut paste',
      'undo redo',
      'fontselect fontsizeselect forecolor',
      'bold italic underline strikethrough subscript superscript',
      'alignleft aligncenter alignright alignjustify',
      'link unlink',
      'bullist numlist',
      'outdent indent',
      'code',
    ],
  };

  if (hasImage && hasImageButton) {
    toolbar.advanced.push('image');
  }

  return (
    <div className={classes.root}>
      <div className={error ? classes.editorError : null}>
        <Editor
          disabled={disabled}
          value={value}
          init={{
            plugins: plugins.join(' '),
            toolbar_drawer: toolbarDrawer,
            toolbar: toolbar[variant].join('|'),
            paste_data_images: hasImage,
            images_upload_url: uploadURL,
            automatic_uploads: true,
            skin_url: skinUrl,
            language: language === 'pt' ? 'pt_BR' : language,
            menubar: showMenu,
            images_upload_handler: uploadFunc,
            branding: false,
            height,
            icons_url: iconsUrl,
          }}
          onEditorChange={onChange}
          textareaName={name}
          {...props}
        />
      </div>
      {error && <FormHelperText error>{error}</FormHelperText>}
    </div>
  );
};

EditText.defaultProps = {
  onChange: null,
  value: '',
  uploadURL: undefined,
  disabled: false,
  error: '',
  language: 'pt',
  showMenu: false,
  uploadFunc: undefined,
  hasImage: false,
  hasImageButton: true,
  toolbarDrawer: '',
  variant: 'simple',
  height: 200,
};

EditText.propTypes = {
  /** Change event handler */
  onChange: PropTypes.func,
  value: PropTypes.string,
  /** URL to upload images */
  uploadURL: PropTypes.string,
  /** Disable editor */
  disabled: PropTypes.bool,
  /** Error message */
  error: PropTypes.string,
  /** Languge to render editor */
  language: PropTypes.oneOf(['pt', 'en', 'es']),
  /** Show menu bar */
  showMenu: PropTypes.bool,
  /** Function to handle uploads */
  uploadFunc: PropTypes.func,
  /** Enable button tp paste images from web */
  hasImage: PropTypes.bool,
  /** Allow to paste images from web */
  hasImageButton: PropTypes.bool,
  /** URL location of editor skin */
  skinUrl: PropTypes.string.isRequired,
  /** URL location of icons */
  iconsUrl: PropTypes.string,
  /** Toolbar drawer style */
  toolbarDrawer: PropTypes.oneOf(['', 'floating', 'sliding']),
  /** Editor variant */
  variant: PropTypes.oneOf(['simple', 'advanced']),
  /** Fixed height of editor */
  height: PropTypes.number,
};

export default EditText;
