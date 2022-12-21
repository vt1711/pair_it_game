const initialpoint = "0"
const currentpoint = (point = initialpoint, action) => {
    switch (action.type) {
        case "ADD": return ("+1");

        case "SUBTRACT": return ("-1");

        case "ZERO": return ("0");

        default: return (initialpoint);

    }
}

export default currentpoint;