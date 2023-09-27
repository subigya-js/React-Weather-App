import React from 'react'

const Empty = () => {

    const style = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
        textAlign: "center",
        fontSize: "12px",
        color: "#e3e2de",
    }

    return (
        <div style={style}>
            <h2 style={{fontSize: "1rem"}}>Please Enter the City Name above.</h2>
        </div>
    )
}

export default Empty