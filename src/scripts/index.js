const TABLE_CONTAINER = document.querySelector("#game");

const game = {
    boardInGame: [],
    playerSimbol: "X",
    finish: false,
    init () {
        this.draw();
        this.addEventOnButtons(".block");

    },
    addEventOnButtons (selector="") {
        document.querySelectorAll(selector).forEach(el => el.addEventListener("click", (ev) => {
            this.markBlock(this.playerSimbol, ev.target);

        }));

    },
    changePlayerSimbol () {
        console.log("gg")
        this.playerSimbol = this.playerSimbol === "X" ? "O" : "X";

    },
    markBlock: (simbol, el) => {
        if ($(el).hasClass("block") && !$(el).hasClass("marked")) {
            var pSimbol = document.createElement("p");
            pSimbol.textContent = simbol;

            el.appendChild(pSimbol);
            $(el).addClass("marked");

            game.changePlayerSimbol();

        }

    },
    draw: () => {
        const rowEl = [[], [], []];
        var auxId = 0;
        rowEl.forEach((el, index) => {
            for (let i = 0; i < 3; i++) {
                var button = document.createElement("div");
                button.classList.add("block");
                button.id = auxId;

                el.push(button);

                auxId++;
                
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

game.init();
