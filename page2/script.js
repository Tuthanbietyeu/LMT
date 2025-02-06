// Mảng Sudoku với 80 số cố định bị xóa
const sudoku = [
    [5, 0, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 0, 0, 0, 4, 0],
    [1, 0, 0, 0, 0, 2, 5, 0, 0],
    [8, 0, 0, 7, 0, 1, 0, 0, 3],
    [4, 0, 6, 0, 5, 0, 0, 9, 1],
    [7, 1, 0, 0, 2, 4, 0, 0, 6],
    [9, 0, 1, 0, 0, 7, 0, 8, 4],
    [2, 0, 7, 0, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 0, 1, 7, 9]
];

// Hàm tạo bảng Sudoku với số cố định và các ô trống
function createBoard() {
    let table = document.getElementById('sudoku-board');

    for (let row = 0; row < 9; row++) {
        let tr = document.createElement('tr');
        for (let col = 0; col < 9; col++) {
            let td = document.createElement('td');
            let input = document.createElement('input');
            input.type = 'number';
            input.min = 1;
            input.max = 9;
            input.id = `cell-${row}-${col}`;

            // Kiểm tra nếu ô này có giá trị cố định từ mảng 'sudoku'
            if (sudoku[row][col] !== 0) { // Nếu số không phải 0 (số cố định)
                input.value = sudoku[row][col]; // Điền giá trị vào ô
                input.disabled = true; // Không cho phép chỉnh sửa số cố định
            }

            td.appendChild(input);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

// Hàm kiểm tra bảng Sudoku
function checkBoard() {
    let table = document.getElementById('sudoku-board');
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            let input = document.getElementById(`cell-${row}-${col}`);
            let correctValue = sudoku[row][col];

            // Kiểm tra nếu giá trị người dùng nhập không đúng
            if (input.value != correctValue && input.disabled === false) {
                input.style.backgroundColor = 'transparent'; // Không thay đổi màu nền khi sai
            }
        }
    }
}

// Khởi tạo bảng khi trang tải
window.onload = createBoard;
