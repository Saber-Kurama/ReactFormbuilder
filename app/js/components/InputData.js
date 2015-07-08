import React from 'react/addons';


let InputData = React.createClass({

    getInitialState: function() {
        return {
            message: this.props.name
        }
    },
    render: function(){
    	console.log('InputData ==========='+ this.props.name);
        var valueLink = {
          value: this.state.message,
          requestChange: this.handleChange
        };
        return (
            <div>
              <input type="text" valueLink={valueLink} />
              <input type="text" defaultValue={this.props.name} onChange={this.updateTxt}/>
              <p>{this.state.message}</p>
              <p>{this.props.name}</p>
            </div>
        )
    },
    updateTxt: function(e) {
        this.setState({message: e.target.value});
        //this.props.changeProperties();
        
    },
    handleChange:function(message){
        this.setState({message: message});
        this.props.changeProperties();
    }

});

export default  InputData;
