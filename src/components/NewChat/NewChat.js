import React from 'react';
import styles from './NewChat.module.css';
import { Button, TextField, Dialog, DialogContent, DialogTitle, Radio, Input,
InputLabel, RadioGroup, FormControlLabel, FormControl, Select, MenuItem, DialogActions} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


export default class FormDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen : false,
      isPrivate: 'true',
      chatName: null,
      users: null
    };
    this.handleChatNameChange = this.handleChatNameChange.bind(this);
    this.handlePrivacyChange = this.handlePrivacyChange.bind(this);
    this.handleUsersChange = this.handleUsersChange.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.onAddChat = this.onAddChat.bind(this);
  }

  handlePrivacyChange(event){
    this.setState({ isPrivate: event.target.value });
  }

  handleChatNameChange(event) {
    this.setState({ chatName: event.target.value });
  }

  handleUsersChange(event) {
    this.setState({ users: event.target.value.join(',') });
  }

  toggleModal(isOpen){
    if(isOpen){
      this.setState({ isOpen });
    } else {
      this.setState({
        isOpen : false,
        isPrivate: 'true',
        chatName: null,
        users: null
      });
    }
    
  }

  onAddChat(){
    this.props.addNewChat(this.state.isPrivate, this.state.chatName, this.state.users);
    this.setState({ isOpen: false });
  }

  render () {
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
      PaperProps: {
        style: {
          maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
          width: 250,
        },
      },
    };

    return (
      <div>
        <button onClick={() => this.toggleModal(true)} className={styles.add__chat}>Add chat +</button>
        <Dialog open={this.state.isOpen} onClose={() => this.toggleModal(false)} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">New chat</DialogTitle>
          <DialogContent className={styles.dialogContent}>
            <FormControl component="fieldset" className={styles.formControl} >
              <RadioGroup aria-label="privacy" name="privacy" value={this.state.isPrivate} onChange={event => this.handlePrivacyChange(event)}>                 
                  <FormControlLabel value="true" control={<Radio />} label="private" />
                  <FormControlLabel value="false" control={<Radio />} label="public" />
              </RadioGroup>
              { this.state.isPrivate === 'false' && <TextField
                  margin="dense"
                  id="name"
                  label="Chat name"
                  value={this.state.chatName || ''}
                  onChange={event => this.handleChatNameChange(event)}
                  fullWidth
              /> }
              <FormControl className={styles.formControl}>
                <InputLabel id="mutiple-name-label">Users</InputLabel>
                <Select
                  labelId="mutiple-name-label"
                  id="mutiple-name"
                  multiple
                  value={this.state.users ? this.state.users.split(',') : []}
                  onChange={(event) => this.handleUsersChange(event)}
                  input={<Input />}
                  MenuProps={MenuProps}
                  fullWidth
                >
                  {this.props.allUsers.map(user => (
                    <MenuItem key={user.name} value={user.id} >
                      {user.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
          </FormControl>
          <DialogActions>
            <Button type="submit" color="primary" onClick={this.onAddChat}>OK</Button>
          </DialogActions>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}