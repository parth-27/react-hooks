import React,{useState} from 'react'

export function HookState() {

    // With the help of useState we can use state in functional component.
    // state in class component is always an object 
    // but it can be anything in functional compoenent with the help of useState /

    // here destructuring count and setCount. Initialize count with 0 on first rendering
    // setCount to change count variable.
    const [count, setCount] = useState(0);

    const [name, setName] = useState({
        firstName: '',
        lastName:'',
    });

    const [items, setItems] = useState([]);

    const addItem = () => {
        setItems(prevState => (
            [...prevState,
            {
                id: items.length,
                value: Math.floor(Math.random() * 10) + 1
            }
        ]));
    }

    // setState will merge the state on updating any field
    // useState will not merge the state on updating any field we have to do manually by copying everything and then update

    return (
        <div>
            <button onClick={() => setCount(prevCount => prevCount + 1)} >Function Count {count}</button>
            <form>
                <input type="text" onChange={ e => setName(prevState=>({ ...prevState, firstName:e.target.value}))} value={ name.firstName }/>
                <input type="text" onChange={e => setName(prevState=>({ ...prevState,  lastName: e.target.value }))} value={ name.lastName } />
                <h2>Your First Name is - {name.firstName} </h2>
                <h2>Your last Name is - {name.lastName} </h2>
                <button onClick={addItem}>Add a number</button>
                <ul>
                    {items.map(item => (
                        <li key={item.id}>{item.value}</li>
                    ))}
                </ul>
            </form>
        </div>
    )
}