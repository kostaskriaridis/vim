const SQUARE_SIZE = 20;
const MARGIN = 2;
const ACTIVE_COLOR = '#fab';
const COLOR = '#eee';

class FieldCanvas {
    constructor(selector, matrix) {
        this.container = document.querySelector(selector);
        this.context = this.container.getContext('2d');
        this.matrix = matrix;

        this.draw();
    }

    draw() {
        this.matrix.forEach((row, rowIndex) =>
            this.drawRow(row, rowIndex)
        );
    }

    redraw(matrix) {
        this.matrix = matrix;

        this.draw();
    }

    drawRow(row, rowIndex) {
        row.forEach((square, squareIndex) =>
            this.drawSquare(square, rowIndex, squareIndex)
        );
    }

    drawSquare(square, rowIndex, squareIndex) {
        const args = [
            squareIndex * SQUARE_SIZE + MARGIN * squareIndex,
            rowIndex * SQUARE_SIZE + MARGIN * rowIndex,
            SQUARE_SIZE,
            SQUARE_SIZE
        ];
        const color = square ? ACTIVE_COLOR : COLOR;

        this.context.fillStyle = color;
        this.context.fillRect(...args);
    }
}

function generateMatrix(size) {
    const matrix = [];

    for (let i = 0; i < size; i += 1) {
        for (let j = 0; j < size; j += 1) {
            if (!matrix[j]) {
                matrix[j] = [];
            }

            matrix[j].push(Math.random() > .5 ? true : false);
        }
    }

    return matrix;
}

new FieldCanvas(
    '#canvas',
    generateMatrix(20)
);
