import React, { useState ,useMemo} from 'react';
import { Routes, Route } from 'react-router-dom'
import BlogPage from './screens/BlogPage';
import { SearchContext } from './SearchContext';
function App() {
  const [searchText, setSearchText] = useState('')
  const [data,setData] = useState(null)
  const valueContext = useMemo(() => ({searchText,setSearchText,data,setData}),[searchText,setSearchText,data,setData])
  return (
    <SearchContext.Provider value={valueContext}>
      <Routes>
        <Route path='/' element={<BlogPage />} />
      </Routes>
    </SearchContext.Provider>
  );
}

export default App;
