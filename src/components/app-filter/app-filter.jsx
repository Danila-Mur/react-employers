import './app-filter.css';

export const AppFilter = ({ filter, onFilterSelect }) => {
  const buttonsData = [
    {
      name: 'all',
      label: 'Все сотрудники',
    },
    {
      name: 'rise',
      label: 'На повышение',
    },
    {
      name: 'moreThen1000',
      label: 'З/П больше 1000$',
    },
  ];

  return (
    <div className='btn-group'>
      {buttonsData.map(({ name, label }) => {
        const activeBtn = filter === name;

        return (
          <button
            key={name}
            className={`btn ${activeBtn ? 'btn-light' : 'btn-outline-light'}`}
            type='button'
            onClick={() => onFilterSelect(name)}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};
