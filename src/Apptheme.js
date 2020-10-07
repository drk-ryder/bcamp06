import React from 'react';
import './App.css';


function Apptheme() {
    return (
        <div className='App-container'>
            <h1 className='App'>Expense Tracker</h1>

            <h3>Your Balance <br /> $260</h3>

            <div className='App-expense'>
                <h3>INCOME <br /> $260</h3>
                <h3>EXPENSE <br /> $260</h3>
            </div>
            <h3>History</h3>
            <hr />

            <ul className='App-transactionlist'>
                <li>
                    <span>Cash</span>
                    <span color='blue'>+500</span>
                </li>

                <li>
                    <span>Cash</span>
                    <span color='blue'>+500</span>
                </li>

                <li>
                    <span>Cash</span>
                    <span color='blue'>+500</span>
                </li>
            </ul>

            {/* ==> Bottom portion of the App  */}

            <h3>Add New Transaction</h3>
            <hr />
            
            <form className='App-transactionform'>
                <label>
                    Enter Description <br />
                    <input type='text' required />
                </label>
                <br />
                <label>
                    Enter Amount <br />
                    <input type='number' required/>
                </label>
                <br />

                <button>Add Transaction</button>
            </form>


        </div>
    );
}

export default Apptheme;
