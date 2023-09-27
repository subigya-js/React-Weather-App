import React from 'react'

const Error = () => {

    const style = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
        textAlign: "center",
        fontSize: "12px",
        color: "#e3e2de"
    }

    return (
        <div style={style}>
            <h2>Sorry, the given location is not available. Please try another</h2>
        </div>
    )
}

export default Error