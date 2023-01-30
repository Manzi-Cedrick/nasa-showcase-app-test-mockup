import React, { useState ,useMemo} from 'react';
import { Routes, Route } from 'react-router-dom'
import BlogPage from './screens/BlogPage';
import { SearchContext } from './SearchContext';
function App() {
  const [searchText, setSearchText] = useState('')
  const [dataSearch,setDataSearch] = useState({});
  const valueContext = useMemo(() => ({searchText,setSearchText,dataSearch,setDataSearch}),[searchText,setSearchText,dataSearch,setDataSearch])
  return (
    <SearchContext.Provider value={valueContext}>
      <Routes>
        <Route path='/' element={<BlogPage />} />
      </Routes>
    </SearchContext.Provider>
  );
}

export default App;
