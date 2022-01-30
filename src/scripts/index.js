const TABLE_CONTAINER = document.querySelector("#game");

const game = {
    draw: () => {
        const rowEl = [[], [], []];
        rowEl.forEach((el, index) => {
            for (let i = 0; i < 3; i++) {
                var button = document.createElement("div");
                button.classList.add("block");

                el.push(button);
                
            }

        });

        rowEl.forEach((el, index) => {
            var row = document.createElement("div");
            el.forEach(_el => row.appendChild(_el));

            row.classList.add("row");

            TABLE_CONTAINER.appendChild(row);

        });

    }

}

game.draw();
