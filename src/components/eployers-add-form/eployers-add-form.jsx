import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './eployers-add-form.css';

// export const EployersAddForm = () => {
export class EployersAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
    };
  }

  onChangeValue = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  addEmployers = () => {
    return {
      ...this.state,
      increase: false,
      like: false,
      id: uuidv4(),
    };
  };

  render() {
    const { name, salary } = this.state;
    const { onAdd } = this.props;

    return (
      <div className='app-add-form'>
        <h3>Добавьте нового сотрудника</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onAdd(this.addEmployers());
          }}
          className='add-form d-flex'
        >
          <input
            type='text'
            className='form-control new-post-label'
            placeholder='Как его зовут?'
            name='name'
            value={name}
            onChange={this.onChangeValue}
          />
          <input
            type='number'
            className='form-control new-post-label'
            placeholder='З/П в $?'
            name='salary'
            value={salary}
            onChange={this.onChangeValue}
          />

          <button type='submit' className='btn btn-outline-light'>
            Добавить
          </button>
        </form>
      </div>
    );
  }
}
