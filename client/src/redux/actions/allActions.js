const addpoint = () => {
    return {
        "type": "ADD",
        "payload":1
    }
}

const subtractpoint = () => {
    return {
        "type": "SUBTRACT",
        "payload":-1
    }
}

const zeropoint = () => {
    return {
        "type": "ZERO",
        "payload":0
    }
}


export {addpoint,subtractpoint,zeropoint}