import React from 'react';
import './Button.css';

const Button =(props)=>{

    return (
<button className='navbutton'
style={

    {
        color:props.fontColor,
        backgroundColor:props.backgroundColor,
        padding:props.padding,
        borderRadius:props.borderRadius,
        margin:props.margin,
        border:props.border,
        width:props.width,
    }
}

>

{props.children}
</button>

    )
}

export default Button;