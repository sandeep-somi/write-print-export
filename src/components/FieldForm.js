import React from 'react';
import { Grid, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import { FormInput, FormButton } from '../common';
import { Delete } from '@material-ui/icons';


class FieldForm extends React.Component {
  state = {
    fields: [
      {
        name: 'Sample',
        type: 'text',
        max: 32,
        required: true,
        error: 'First name is required'
      },
    ],
    field: {
      name: '',
      type: '',
      max: 32,
      required: false,
      error: ''
    }
  }

  componentDidMount() {

  }

  onChange = (index, key, value) => {
    let { fields = []} = this.state;
    fields[index][key] = value;
    this.setState({ fields });
  }

  addField = () => {
    let { field, fields = [] } = this.state;
    fields.push({...field});
    this.setState({ fields });
  }

  removeField = (index) => {
    let { fields = [] } = this.state;
    fields.splice(index, 1);
    this.setState({ fields });
  }

  render() {
    const { fields = [] } = this.state;

    return (
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          {fields && fields.map((field, key) => <FieldItem
            field={field}
            key={key}
            index={key}
            field={field}
            onChange={this.onChange.bind(this, key)}
            removeField={this.removeField}
          />)}
        </Grid>
        <Grid container style={{margin: '10px 0px'}}>
          <Grid item xs={12} style={{textAlign: 'center'}}>
            <FormButton onClick={this.addField}>+ Add</FormButton>
          </Grid>
          {/* <Grid item xs={12} style={{padding: '20px 0px'}}>
            <FormButton clr="red">Submit</FormButton>
          </Grid> */}
        </Grid>
      </Grid>
    )
  }
}

export default FieldForm;

const FieldItem = props => {
  const { onChange, field = {}, removeField, index } = props;

  return (
    <Grid container style={{paddingTop: 10}}>
      <Grid item xs={12} sm={1} md={1} style={{textAlign: 'center', padding: 20}}>
        # {index + 1}
      </Grid>
      <Grid item xs={12} sm={10} md={10} className="item-field">
        <Grid container>
          
            {/* {
              field && Object.keys(field).map((item, key) => {
                let type = item === 'error' ? 'textarea' : 'text'
                
                return <Grid item xs={12} sm={6} md={3} className="item-element" key={key}>
                <FormInput
                  name={item}
                  type={type}
                  fullWidth
                  onChange={e => onChange(item, e.target.value)}
                  value={field[item]}
                />
              </Grid>
              })
            } */}
            
            <Grid item xs={12} sm={6} md={3} className="item-element">
            <FormInput
              name="name"
              type="text"
              fullWidth
              onChange={e => onChange('name', e.target.value)}
              value={field.name}
            />
          </Grid>
          {/* <Grid item xs={12} sm={6} md={3} className="item-element">
            <FormInput
              name="type"
              type="text"
              fullWidth
              onChange={e => onChange('type', e.target.value)}
              value={field.type}
            />
          </Grid> */}
          <Grid item xs={12} sm={6} md={3} className="item-element">
            <FormControl fullWidth>
              <InputLabel>Type</InputLabel>
              <Select
                onChange={e => onChange('type', e.target.value)}
                value={field.type}
              >
                <MenuItem value='text'>Text</MenuItem>
                <MenuItem value='textarea'>Textarea</MenuItem>
                <MenuItem value='number'>Number</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className="item-element">
            <FormControl fullWidth>
              <InputLabel>Mandatory</InputLabel>
              <Select
                onChange={e => onChange('required', e.target.value)}
                value={field.required}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={true}>Yes</MenuItem>
                <MenuItem value={false}>No</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className="item-element">
            <FormInput
              name="Length"
              type="number"
              fullWidth
              onChange={e => onChange('max', e.target.value)}
              value={field.max}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} className="item-element">
            <FormInput
              name="Error to display"
              type="textarea"
              max={field.max}
              fullWidth
              onChange={e => onChange('error', e.target.value)}
              value={field.error}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={1} md={1} style={{textAlign: 'center', padding: '20px 0px'}}>
        <FormButton clr="red" onClick={removeField.bind(this, index)}><Delete/></FormButton>
      </Grid>
    </Grid>
  )
}