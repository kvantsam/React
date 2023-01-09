import React, { Component } from 'react';

function Dropdown (props) {



    const toggleState = (state) =>  {
          state.setState({ isOpened: !this.isOpened });
     }

     console.log('isOpened', this.state.isOpened);

    return <div onClick={toggleState(this.state)}>{props.fio}</div>;


}

export default Dropdown;