const initialstate = 0
const newscore = (score = initialstate, action) => {
    switch (action.type) {
        case "ADD": return (score + 1);

        case "SUBTRACT": return (score - 1);

        case "ZERO": return (score);

        default: return (score);

    }
}

export default newscore;