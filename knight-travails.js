//Start from scratch



/*
function knightMoves(from, to) {

    //function to return all the possible squares the knight can move to
    function getMoves(square) {
        let returnArray = [];
        let possibleArray = [[2, 1], [1, 2], [-1, 2], [-2, 1], [-2, -1], [-2, -1], [2, -1], [1, -2]]

        for (const move of possibleArray) {
            if (square[0] + move[0] >= 0 && 
                square[0] + move[0] <= 7 &&
                square[1] + move[1] >= 0 &&
                square[1] + move[1] <= 7) {
                    returnArray.push([square[0] + move[0], square[1] + move[1]])
                }
        }
        return returnArray
    };

    //function to check whether the toSquare is present among the moves, if true this is the base case
    function findToSquare(square, to) {
        if (square[0] === to[0] && square[1] === to[1]) {
            return true;
        }
    }

    //recursive helperFunction 
    function findShortestPath(from, to, visited = []) {
        let path = []
        if (findToSquare(from, to)) {
            path.push(from)
            return path;
        } else {
            let possibleMoves = getMoves(from);
            let shortestPath = undefined;

            for (const move of possibleMoves) {
                if (!visited.includes(move)) {
                    visited.push(move);
                    let path = findShortestPath(move, to, visited);

                    if (shortestPath === undefined) {
                        shortestPath = path;
                    } else if (path.length < shortestPath.length) {
                        shortestPath = path
                    }
                }

            }

            return shortestPath;

        }
    }

    findShortestPath(from, to);
}

console.log(knightMoves([5,3], [8, 2]))
*/