import React from 'react'

import propTypes from "prop-types"

export default function Lists(props) {
    const className = ["list-reset"];
    if (props.isSmall) className.push("text-xs");
    return (
      <ul className={className.join(" ")}>
          {props.data.map((list, index) => {
            return (
                <li key={index} className={list.isChacked ? "is-checked": ""}>
                    {list.content}                                            
                </li>
                );
            })}
      </ul>  
    );
}

Lists.pr = {
    data: propTypes.array,
    isSmall: propTypes.bool
}