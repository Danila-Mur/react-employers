import { EployersListItem } from '../eployers-list-item/eployers-list-item';

import './eployers-list.css';

export const EployersList = ({ data, onDelete }) => {
  return (
    <ul className='app-list list-group'>
      {data.map((item) => {
        const { id, ...itemProps } = item;

        return (
          // <EployersListItem key={item.name} name={item.name} salary={item.salary} />
          <EployersListItem key={id} {...itemProps} onDelete={() => onDelete(id)} />
        );
      })}
    </ul>
  );
};
