import {useState, useEffect} from 'react';
import Nav from "./Nav";
import Head from "./Head";
import Cards from "./Cards";

const Spa = () => {

  // const [filtered, setFiltered] = useState([
  //   {
  //     src: 'https://insidebusiness.co.zw/wp-content/uploads/2021/03/image_search_1614671099784.png',
  //     price: '500',
  //     name: 'Palm Harbor',            
  //     address: '2699Green Valley, Highland Lake, FL',
  //     desc: { beds: 3, bathrooms: 2, space: "5x3" },
  //     checkObj: {
  //       searchVal: "initiate",
  //       location: "New York, USA",
  //       price: "$500 - $2,500",
  //       type: "Houses",
  //       date: "2022-07-08"
  //     }
  //   }
  // ]);

  const [objectOfVal, setObjectOfVal] = useState({
    searchVal: "initiate",
    location: "New York, USA",
    price: "$500 - $2,500",
    type: "Houses",
    date: "2022-07-08"
  });

  const [resData, setResData] = useState([
    {
      src: 'https://insidebusiness.co.zw/wp-content/uploads/2021/03/image_search_1614671099784.png',
      price: '500',
      name: 'Palm Harbor',            
      address: '2699Green Valley, Highland Lake, FL',
      desc: { beds: 3, bathrooms: 2, space: "5x3" },
      checkObj: {
        searchVal: "initiate",
        location: "New York, USA",
        price: "$500 - $2,500",
        type: "Houses",
        date: "2022-07-08"
      }
    }
  ]);

  useEffect(() => {
    setResData(resData => resData.filter(item => {
      if (objectOfVal.searchVal === "") {
        console.log(item);
        return item;
      }else if(objectOfVal.searchVal === item.name && objectOfVal.location === item.location) {
        console.log(item);
        return item;
      }
    }));

    console.log(objectOfVal);
  }, [objectOfVal]);

  useEffect(() => {
    const Req = async() => {
      const response = await fetch('https://estatery-backend.herokuapp.com/post');
      const data = await response.json();
      setResData(data);
    }

    Req();
  }, []);

  const getValues = objectOfValues => {
    setObjectOfVal(objectOfValues);
  }

  return (
    <div className="spa">
      <Nav />
      <Head getValuesFromHead={getValues}/>
      <Cards resData={resData}/>
    </div>
  )
}

export default Spa;