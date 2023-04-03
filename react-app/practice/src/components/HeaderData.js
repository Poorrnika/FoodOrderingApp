import React from 'react';

const HeaderData = ({user}) =>{
    return(
        <header>
            <h1>{user}'s Todo List</h1>
        </header>
    );
}

export default HeaderData;