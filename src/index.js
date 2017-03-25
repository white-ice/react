import React from 'react';
import ReactDOM from 'react-dom';
import Excel from './components/Excel/Excel';
import Logo from './components/Logo/Logo';
import Button from './components/ui/Button/Button';

let headers = localStorage.getItem('headers');
let data = localStorage.getItem('data');

if (!headers) {
    headers = ['Title', 'Year', 'Rating', 'Comments'];
    data = [['Test', '2015', '3', 'meh']];
}

ReactDOM.render(
    <div>
        <h1>
            <Logo /> Welcome to Whinepad!
        </h1>
        <Excel headers={headers} initialData={data}/>

        <div className="col-lg-12">
            <h2>Components UI</h2>
            <h4>Button</h4>
            <Button> Button </Button>
            <h4>Suggest</h4>

        </div>
    </div>,
    document.getElementById('root')
);
