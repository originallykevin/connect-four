document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div');
    const result = document.querySelector('#result');
    const displayerCurrentPlayer = document.querySelector('#current-player');
    let currentPlayer = 1;

    for (var i = 0, len = squares.length; i < len; i++) {
        (function (index) {
            // add an onClick to each square in your grid
            squares[i].onclick = function () {
                // if the squares below of your clicked square is taken, you can place on top of it
                if (squares[index + 7].classList.contains('taken')) {
                    if (currentPlayer === 1) {
                        squares[index].classList.add('taken');
                        squares[index].classList.add('player-one');
                        // change to player 2
                        currentPlayer = 2
                        displayerCurrentPlayer.innerHTML = currentPlayer
                    } else if (currentPlayer === 2) {
                        squares[index].classList.add('taken');
                        squares[index].classList.add('player-two');
                        // change to player 1
                        currentPlayer = 1
                        displayerCurrentPlayer.innerHTML = currentPlayer
                    };
                    // if the square below is not taken, then you can't go

                } else alert('Invalid move')
            };

        })(i)
    };
});