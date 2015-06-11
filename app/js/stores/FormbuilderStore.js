'use strict';
import Reflux from 'reflux';
let FormbuilderStore = Reflux.createStore({
	fields:{},
	inputFields:{},
	nonInputFields:{},
	init:function(){

	},
	registerField:function(name, opts){
		opts.field_type = name;
		this.fields[name] = opts;
		if (opts.type == 'non_input'){
			this.nonInputFields[name] = opts;
		}
		else{
			this.inputFields[name] = opts;
		}
	}
});
export default FormbuilderStore;
