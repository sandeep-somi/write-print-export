import React, { Component } from 'react';
import { Grid, TextField } from '@material-ui/core';
import { MainForm, FieldForm } from '../components';
import { Modal } from '../common';
import { fields } from '../constants';
import actions from '../redux/actions';
import { connect } from 'react-redux';

class App extends Component {
  state = {
    fields: [...fields]
  }

  componentDidMount() {
    actions.createFields(fields);
  }

  render() {
    const { fields = [] } = this.state;
    console.log(this.props, 'this.props');
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
          size="md"
          title="Create New Form"
          onConfirm=""
          confirmTxt="Submit"
          actions
          cancelTxt="Cancel"
          onCancel=""
        >
          <FieldForm />
        </Modal>
      </div>
    );
  }
}

export default connect((state) => state)(App);
