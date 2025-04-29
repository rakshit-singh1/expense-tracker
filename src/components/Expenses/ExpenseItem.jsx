import React from 'react';
import ExpenseDate from './ExpenseDate.jsx';
import Card from '../UI/Card.jsx'; 
import './ExpenseItem.css';
const ExpenseItem = (props) => {
    // const expenseDate= new Date(2021, 2, 28);
    // const expenseTitle= 'Car Insurance';
    // const expenseAmount= 264.7;

    // const day= props.date.toLocaleString('en-US',{day:'2-digit'});;
    // const month= props.date.toLocaleString('en-US',{month:'long'});
    // const year= props.date.getFullYear();
    // function clickHandler(){}
    // const [title, setTitle] = useState(props.title);

    // const clickHandler = () => {
    //     setTitle('Updated Value');
    //     console.log('Updated!!!', title); // Note: This will log the previous value, not the updated one immediately.
    // };

    return (
        <li>
            <Card className = "expense-item">
                <ExpenseDate date={props.date}/>
                {/* <div>
                    <div>{day}</div>
                    <div>{month}</div>
                    <div>{year}</div>
                </div> */}
                {/* <div>{props.date.toISOString()}</div> */}
                <div className = "expense-item__description">
                    {/* <h2>{props.title}</h2> */}
                    <h2>{props.title}</h2>
                    <div className = "expense-item__price">&#8377;{props.amount}</div>
                </div>
                {/* <button onClick ={() => {console.log('Clicked'); return true}} >Change Title</button> */}
                {/* <button onClick = {clickHandler} >Change Title</button> */}
            </Card>
        </li>
    );
}

export default ExpenseItem;
