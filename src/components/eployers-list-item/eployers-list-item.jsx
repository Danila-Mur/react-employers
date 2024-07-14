import { Component } from 'react';
import './eployers-list-item.css';

// export const EployersListItem = ({ name, salary, increase }) => {
export class EployersListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false,
      like: false,
    };
  }

  onLike = () => {
    this.setState(({ like }) => ({
      like: !like,
    }));
  };

  onIncrease = () => {
    this.setState(({ increase }) => ({
      increase: !increase,
    }));
  };

  render() {
    const { name, salary } = this.props;
    const { increase, like } = this.state;

    return (
      <li className={`list-group-item d-flex justify-content-between ${increase ? 'increase' : ''} ${like ? 'like' : ''}`}>
        <span className='list-group-item-label' onClick={this.onLike}>
          {name}
        </span>
        <input type='text' className='list-group-item-input' defaultValue={`${salary}$`} />
        <div className='d-flex justify-content-center align-items-center'>
          <button onClick={this.onIncrease} type='button' className='btn-cookie btn-sm '>
            <i className='fas fa-cookie'></i>
          </button>

          <button type='button' className='btn-trash btn-sm '>
            <i className='fas fa-trash'></i>
          </button>
          <i className='fas fa-star'></i>
        </div>
      </li>
    );
  }
}
