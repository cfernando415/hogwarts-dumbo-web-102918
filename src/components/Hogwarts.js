import React from 'react';
import Hog from './Hog'

const Hogwarts = (props) => {
    const hogs = props.hogs.map((hog, i) => <Hog key={i} hog={hog} />)
    return (
        <ul>
            {hogs}
        </ul>
    )
}

export default Hogwarts;