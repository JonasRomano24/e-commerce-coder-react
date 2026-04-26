//1. importar el hook de react
import {useState} from "react";
import Button from 'react-bootstrap/Button';

const ItemCount = ()=>{
    const[count , setCount]=useState(1)
    const sumar = ()=> {
        setCount(count + 1)
    }
    const restar = ()=> {
        if (count > 0) {
          setCount(count - 1)  
        }
    }
    return(
        <div>
            <Button className="btn btn-danger" onClick={restar}>-</Button>
            <span className="btn">{count}</span>
            <Button className="btn btn-succsess" onClick={sumar}>+</Button>
        </div>
    )
}

export default ItemCount