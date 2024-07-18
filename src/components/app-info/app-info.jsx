import './app-info.css';

export const AppInfo = ({ allEmployers }) => {
  const filterIncrease = allEmployers.filter((item) => item.increase).length;

  return (
    <div className='app-info'>
      <h1>Учет сотрудников в компании N</h1>
      <h2>Общее число сотрудников: {allEmployers.length}</h2>
      <h2>Премию получат: {filterIncrease}</h2>
    </div>
  );
};
