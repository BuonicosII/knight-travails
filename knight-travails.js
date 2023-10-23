//Start from scratch

//function to get the array of possible moves
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


//function to create a chessboard with the knight moves
function createBoard () {
    const board = new Map();

    for (let x = 0; x <= 7; x++ ) {
        for (let y = 0; y <= 7; y++) {
            board.set(`[${x}, ${y}]`, getMoves([x, y]))
        }
    }

    return board
}

const chessBoard = createBoard();

//function to output the shortest array of nodes visited by the knight to get to the destination

function knightMoves(from, to) {

    let predecessor = [];
    predecessor[from] = null;

    const visited = {}
    let queue = []

    visited[from] = true;
    queue.push(from);

    function returnPath (node, predecessorArray) {
        let pathArray = []

        pathArray.push(node);

        let getPredecessor = predecessorArray[node];

        while (getPredecessor !== null) {
            pathArray.push(getPredecessor);
            getPredecessor = predecessorArray[getPredecessor]
        }

        let path = pathArray.reverse();

        console.log(`You made it in ${path.length - 1} moves`);

        for (const move of path) {
            console.log(move);
        }

    }

    while (queue.length > 0) {
        let node = queue.shift();

        if (node[0] === to[0] && node[1] === to[1]) {
            returnPath(node, predecessor);
            return;
        }

        let possibleMoves = getMoves(node);

        for (const move of possibleMoves) {
            if (!visited[move]) {
                visited[move] = true;
                predecessor[move] = node;
                queue.push(move);
            }
        }
    }

}

knightMoves([0,0], [7,7])

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