import React, { Component } from 'react';
import { Grid, TextField } from '@material-ui/core';
import { MainForm } from '../components';
import { Modal } from '../common';
import { fields } from '../constants';

class App extends Component {
  state = {
    fields: [...fields]
  }


  render() {
    const { fields = [] } = this.state;

    return (
      <div>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <h1 className="title">Write Print Export</h1>
          </Grid>
          <Grid item xs={6}>
          <TextField
            label="Title"
            fullWidth
          />
          </Grid>
          <Grid item xs={6}>
            <MainForm
              fields={fields}
              openModal={() => this.modal.open()}
            />
          </Grid>
          <Grid item xs={6}>
            
          </Grid>
        </Grid>
        <Modal
          ref={(c) => this.modal = c}
          size="sm"
          title="Create New Form"
          onConfirm=""
          confirmTxt="Submit"
          actions
          cancelTxt="Cancel"
          onCancel=""
        >
          <Grid container>
            <Grid item xs={12} sm={12} md={12}>
              Test Modal
            </Grid>
          </Grid>
        </Modal>
      </div>
    );
  }
}

export default App;
