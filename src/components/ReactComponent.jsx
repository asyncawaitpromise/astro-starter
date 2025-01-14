import React, { useEffect, useState } from 'react'

const ReactComponent = () => {
    const [cnt, setCnt] = useState(0);
    return (
        <div>
            My component <br />
            <button className='btn'
                onClick={() => setCnt(c => c + 1)}
            >Clicked: {cnt}</button>
        </div>
    )
}

export default ReactComponent