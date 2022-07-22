import { useEffect, useState } from 'react';
import DataList from './components/DataList';
import SelectTypeForm from './components/SelectTypeForm';
import './styles.css';

export default function App() {
  const [dataType, setDataType] = useState('');
  const [data, setData] = useState(null);

  useEffect(() => {
    if (dataType) {
      const getData = async () => {
        console.log('fetching', dataType);
        const res = await fetch(`https://swapi.dev/api/${dataType}/`);
        const resData = await res.json();
        console.log('resData', resData);
        setData(resData);
      };
      getData();
    }
  }, [dataType]);

  return (
    <div>
      <SelectTypeForm setDataType={setDataType} dataType={dataType} />
      {data && <DataList dataType={dataType} data={data.results} />}
    </div>
  );
}
