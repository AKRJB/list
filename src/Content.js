import { useState } from "react";
import {FaTrashAlt} from "react-icons/fa"

const Content = () => {

    const [items, setItems] = useState ([
        {
            id:1,
            item:"Almond",
            checked: false,
        },
        {
            id:2,
            item:"Walnut",
            checked: false,
        },
        {
            id:3,
            item:"DryFruits",
            checked: false,
        }
    ]);
    const handleCheck = (id) => {
        // console.log(`key${id}`);
       const listItems = items.map((item)=> item.id === id ? {...item, checked: ! item.checked}: item);
       setItems(listItems)
       localStorage.setItem('shoppinlist', JSON.stringify(listItems));
    }

    const handleDelete = (id) => {
        // console.log(`key${id}`);
        const listItems = items.filter((item)=>item.id != id);
        setItems(listItems)
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    }
    return (
        <main>
            {items.length? (
            <ul>
                {items.map((item)=>(
                    <li className="item" key={items.id}>
                       <input
                       type="checkbox"
                       onClick={()=>handleCheck(item.id)}
                       checked={item.checked}
                       />
                       <label style={(item.checked) ? { textDecoration: 'line-through' } : null}
                       onDoubleClick={()=>handleCheck(item.id)}>
                        {item.item}</label>
                       <FaTrashAlt 
                       onClick={()=>handleDelete(item.id)}
                       role="button" 
                       tabIndex='0' />
                    </li>
                ))}
            </ul>
            ) :
            <p style={{marginTop:'2rem'}}>
            Your bucket list is empty
            </p>
}
        </main>
    )
}

export default Content