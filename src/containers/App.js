import React, { Component } from 'react';
import { Grid, TextField } from '@material-ui/core';
import { MainForm } from '../components';
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
            />
          </Grid>
          <Grid item xs={6}>
            
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
