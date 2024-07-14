import { AppFilter } from '../app-filter/app-filter';
import { AppInfo } from '../app-info/app-info';
import { EployersAddForm } from '../eployers-add-form/eployers-add-form';
import { EployersList } from '../eployers-list/eployers-list';
import { SearchPanel } from '../search-panel/search-panel';
import './app.css';

function App() {
  const data = [
    { id: 1, name: 'John N.', salary: 1000, increase: true },
    { id: 2, name: 'Alex K.', salary: 500, increase: false },
    { id: 3, name: 'Carl P.', salary: 1300, increase: true },
  ];

  return (
    <div className='app'>
      <AppInfo />

      <div className='search-panel'>
        <SearchPanel />
        <AppFilter />
      </div>

      <EployersList data={data} />
      <EployersAddForm />
    </div>
  );
}

export default App;
