
import { useState } from 'react';
const Selector = ({title, options, setVal}) => {

    const [selected, setSelected] = useState(options[0]);
    var ind = 0;

    // useEffect(() => {
    //     console.log(selected);
    // }, [selected]);

  return (
    <div className="selector">
            <p>{title}</p>
            <select className="select" name={title} id={title} value={selected} onChange={(e) => {setSelected(e.target.value); setVal(e.target.value)}}>
                {options.map(
                    option => <option className="option" key={ind++} value={option}>{option}</option>)}
            </select>
    </div>
  )
}

export default Selector