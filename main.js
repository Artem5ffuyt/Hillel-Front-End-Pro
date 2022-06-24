
let board = prompt(`зробите хід `);

for (let i = 0; i < 8; i++) {
    };

const ddMove = (y, x)=>{
if (x >= 0 && x <= 7 && y >= 0 && y <= 7 && board(x)(y) == null) {
    board(x)(y)
}
};

function addMoves(x, y) {
    if (x + 1, y + 2) {
        board == true
    } if (x + 2, y + 1) {
        board == true;
    } if (x + 2, y - 1) {
        board == true
    } if (x + 1, y - 2) {
        board == true
    } if (x - 1, y - 2) {
        board == true
    } if (x - 2, y - 1) {
        board == true
    } if (x - 2, y + 1) {
        board == true;
    } if (x - 1, y + 2) {
        board == true
    } else {
        board == false
    }
};
if(board == true){
    alert(`ok`)
} else if (board == false){
    alert(`yes`)
};
    
console.log(addMoves)
