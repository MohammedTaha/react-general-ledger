import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import ContentAdd from 'material-ui/svg-icons/content/add';
import IconButton from 'material-ui/IconButton';

class NewLedgerRecord extends Component {


    constructor(props){
        super(props);
        this.state = {particulars : "", cashIn: "", cashOut : ""};
    }

    handleChange(fieldName, eve, newVal){
        let newState = {};
        newState[fieldName] = newVal;
        this.setState(newState);
    }

    addNewEntry(){
        this.props.registerNewLedgerEntry.bind(this, {...this.state});
        setTimeout(()=>{
            this.state = {particulars : "", cashIn: "", cashOut : ""};
        }, 1000);
    }

    render() {
        return (
            <tr>
                <td>{this.props.sNo}</td>
                <td> - </td>
                <td>{this.props.userName}</td>
                <td>
                    <TextField
                        value={this.state.particulars}
                        onChange={this.handleChange.bind(this, 'particulars')}
                        name="particulars" 
                    />
                </td>
                <td className="cashCol">
                    <TextField
                        value={this.state.cashIn}
                        onChange={this.handleChange.bind(this, 'cashIn')}
                        name="cashIn" 
                        type="number"
                    />
                </td>
                <td className="cashCol">
                    <TextField
                        value={this.state.cashOut}
                        onChange={this.handleChange.bind(this, 'cashOut')}
                        name="cashOut" 
                        type="number"

                    />
                </td>
                <td>
                    <IconButton onTouchTap={this.addNewEntry.bind(this)}> <ContentAdd /> </IconButton>

                </td>
            </tr>
        );
    }
}

export default NewLedgerRecord;