"use strict";
class Game {
    constructor() {
        this.cookieCount = 0;
        this.multiplier = 1;
        this.setupEventListeners();
    }
    setupEventListeners() {
        $("#click-button").on("click", () => this.handleClick());
        $("#multiplier-button").on("click", () => this.handleMultiplier());
    }
    handleClick() {
        this.cookieCount += this.multiplier;
        this.updateCookieCount();
    }
    handleMultiplier() {
        if (this.cookieCount >= 10) {
            this.cookieCount -= 10;
            this.multiplier++;
            this.updateCookieCount();
            alert(`Multiplier increased to ${this.multiplier}!`);
        }
        else {
            alert("Not enough cookies!");
        }
    }
    updateCookieCount() {
        $("#cookie-count").text(this.cookieCount.toString());
    }
}
$(document).ready(() => {
    new Game();
});
