class Game { // encapsulate let counter and let multiplier for safer code 
    private cookieCount: number = 0;
    private multiplier: number = 1;
  
    constructor() { // encapsulate event listener with constructor and this 
      this.setupEventListeners();
    }
  
    private setupEventListeners(): void {
      $("#click-button").on("click", () => this.handleClick());
      $("#multiplier-button").on("click", () => this.handleMultiplier());
    }
  
    private handleClick(): void {
      this.cookieCount += this.multiplier;
      this.updateCookieCount();
    }
  
    private handleMultiplier(): void {
      if (this.cookieCount >= 10) {
        this.cookieCount -= 10;
        this.multiplier++;
        this.updateCookieCount();
        alert(`Multiplier increased to ${this.multiplier}!`);
      } else {
        alert("Not enough cookies!");
      }
    }
  
    private updateCookieCount(): void {
      $("#cookie-count").text(this.cookieCount.toString());
    }
  }
  
  $(document).ready(() => {
    new Game();
  });