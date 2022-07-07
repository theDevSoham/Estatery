import Card from './Card'

const Cards = ({resData}) => {

    var ind = 0;


  return (
    <div className="cards">
        {resData.map(item => {
            return <Card 
            key={ind++}
            price={item.price} 
            name={item.name} 
            address={item.address} 
            desc={{beds: item.desc.beds, bathrooms: item.desc.bathrooms, space: item.desc.space}}
            src={item.src}
            />
        })}
    </div>
  )
}

export default Cards;