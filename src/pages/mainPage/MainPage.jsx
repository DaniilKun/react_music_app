import { useEffect, useState } from 'react';
import styles from './MainPage.module.scss';
import Track from '../../components/track/Track';
import { Input } from '@mui/material';

const MainPage = () => {

  const [searchValue, setSearchValue] = useState('')
   const [items, setItems] = useState([]);

  const searchTit = searchValue ? `title=*${searchValue}`:''
  // const searchArt = searchValue ? `artists=*${searchValue}`:''

  useEffect(() => {
    console.log("Search value:", searchValue);
    fetch(`https://acd16845b68716b9.mokky.dev/items?${searchTit}`)
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        // console.log(arr);
        setItems(arr);
      })
      .catch((error) => {
        console.error('Ошибка фетч запроса', error);
      });
  }, [searchValue]);
// console.log(searchValue);
  return (
    <div className={styles.search}>
      <Input 
      value={searchValue}
      className={styles.input} 
      placeholder="Поиск треков ..." 
      onChange={event => setSearchValue(event.target.value)} />
      <div className={styles.list}>
        {items && items.length > 0 ? (
          items.map((item) => <Track key={item.id} {...item} />)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default MainPage;
