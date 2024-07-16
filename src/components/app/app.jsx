import { Component } from 'react';

import { AppFilter } from '../app-filter/app-filter';
import { AppInfo } from '../app-info/app-info';
import { EployersAddForm } from '../eployers-add-form/eployers-add-form';
import { EployersList } from '../eployers-list/eployers-list';
import { SearchPanel } from '../search-panel/search-panel';
import './app.css';

// function App() {
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, name: 'John N.', salary: 1000, increase: true },
        { id: 2, name: 'Alex K.', salary: 500, increase: false },
        { id: 3, name: 'Carl P.', salary: 1300, increase: true },
      ],
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      // const index = data.findIndex((elem) => elem.id === id);

      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);

      // const newArr = [...before, ...after];

      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (item) => {
    this.setState(({ data }) => {
      return {
        data: [...data, item],
      };
    });
  };

  render() {
    return (
      <div className='app'>
        <AppInfo />

        <div className='search-panel'>
          <SearchPanel />
          <AppFilter />
        </div>

        <EployersList data={this.state.data} onDelete={this.deleteItem} />
        <EployersAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

// export default App;
