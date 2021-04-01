import React, {Fragment, useState} from 'react';
import ReactDom from 'react-dom';

type  FormElement = React.FormEvent<HTMLFontElement>;
export default function ToDoList() : JSX.Element{

    const [value, SetValue] = useState<string>('');
    SetValue('test');
    console.log(value);
    debugger;

    const handleSubmit = (e : FormElement) : void => {
        e.preventDefault();
        SetValue('');
    }

    return (
        <Fragment>
        <h1>Todo List</h1>
        <form>
            <input type="text" value={value} onChange={e => SetValue(e.target.value)} required/>
            <button type='submit'>Add ToDo</button>
        </form>
        </Fragment>
    )

}