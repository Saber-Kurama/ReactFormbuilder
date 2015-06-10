'use strict';
/**
  静态变量  用来定义一些key值
*/
const FBConst = {
	mappings:{
		SIZE: 'field_options.size',
		UNITS: 'field_options.units',
		LABEL: 'label',
		FIELD_TYPE: 'field_type',
		REQUIRED: 'required',
		ADMIN_ONLY: 'admin_only',
		OPTIONS: 'field_options.options',
		DESCRIPTION: 'field_options.description',
		INCLUDE_OTHER: 'field_options.include_other_option',
		INCLUDE_BLANK: 'field_options.include_blank_option',
		INTEGER_ONLY: 'field_options.integer_only',
		MIN: 'field_options.min',
		MAX: 'field_options.max',
		MINLENGTH: 'field_options.minlength',
		MAXLENGTH: 'field_options.maxlength',
		LENGTH_UNITS: 'field_options.min_max_length_units'
	},
	options:{
		BUTTON_CLASS: 'fb-button',
		HTTP_ENDPOINT: '',
		HTTP_METHOD: 'POST',
		AUTOSAVE: true,
		CLEAR_FIELD_CONFIRM: false
	}


};
export default FBConst;
  // @helpers:
  //   defaultFieldAttrs: (field_type) ->
  //     attrs = {}
  //     attrs[Formbuilder.options.mappings.LABEL] = 'Untitled'
  //     attrs[Formbuilder.options.mappings.FIELD_TYPE] = field_type
  //     attrs[Formbuilder.options.mappings.REQUIRED] = true
  //     attrs['field_options'] = {}
  //     Formbuilder.fields[field_type].defaultAttributes?(attrs) || attrs

  //   simple_format: (x) ->
  //     x?.replace(/\n/g, '<br />')
  // # 类变量
  // @options:
  //   BUTTON_CLASS: 'fb-button'
  //   HTTP_ENDPOINT: ''
  //   HTTP_METHOD: 'POST'
  //   AUTOSAVE: true
  //   CLEAR_FIELD_CONFIRM: false
  //   dict:
  //     ALL_CHANGES_SAVED: 'All changes saved'
  //     SAVE_FORM: 'Save form'
  //     UNSAVED_CHANGES: 'You have unsaved changes. If you leave this page, you will lose those changes!'
