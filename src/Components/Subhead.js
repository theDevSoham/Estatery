import { useState, useEffect } from 'react';
import Selector from './Selector';
import Button from './Button';
import { React } from 'react';

const Subhead = ({searchValue, get}) => {

    const [searchVal, setSearchVal] = useState();
    const [location, setLocation] = useState('New York, USA');
    const [date, setDate] = useState('');
    const [price, setPrice] = useState('$500 - $2,500');
    const [type, setType] = useState('Houses');

    useEffect(() => {
        setSearchVal(searchValue);
    }, [searchValue])

    const handleSearch = (e) => {
        if(searchVal=== '' || location=== '' || price=== '' || type=== '' || date=== ''){
            alert('Please fill in all fields');
            return;
        }
        //console.log(searchVal, location, price, type, date);
        get({
            searchVal: searchVal,
            location: location,
            price: price,
            type: type,
            date: date
        });
    }

    const handleLocation = (location) => {
        setLocation(location);
    }

    const handlePrice = (price) => {
        setPrice(price);
    }

    const handleType = (type) => {
        setType(type);
    }
  return (
    <div className="subhead">
        <Selector title="location" options={["New York, USA", "West Bengal, India"]} setVal={handleLocation}/>
        <div className="selector">
            <p>When</p>
            <input type="date" name="when" id="when" value={date} onChange={(e) => setDate(e.target.value)}/>
        </div>
        
        <Selector title="Price" options={["$500 - $2,500", "$2,500 - $4,500"]} setVal={handlePrice}/>
        <Selector title="Property Type" options={["Houses", "Assets"]} setVal={handleType}/>
        <Button text="Search" isBg={true} clickEvent={handleSearch}/>
    </div>
  )
}

export default Subhead