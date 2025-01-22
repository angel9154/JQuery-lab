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


  $(document).ready(function() {
    const fonts = [
      'Arial, sans-serif',
      'Courier New, Courier, monospace',
      'Georgia, serif',
      'Times New Roman, Times, serif',
      'Verdana, Geneva, sans-serif',
      'Trebuchet MS, sans-serif',
      'Impact, Charcoal, sans-serif',
      'Comic Sans MS, cursive',
      'Lucida Console, Monaco, monospace',
      'Palatino Linotype, Book Antiqua, Palatino, serif',
      'Tahoma, Geneva, sans-serif',
      'Lucida Sans Unicode, Lucida Grande, sans-serif',
      'Arial Black, Gadget, sans-serif',
      'Garamond, serif',
      'Bookman Old Style, serif',
      'Century Gothic, sans-serif',
      'Copperplate, Copperplate Gothic Light, serif',
      'Franklin Gothic Medium, Arial Narrow, sans-serif',
      'Gill Sans, Gill Sans MT, Calibri, sans-serif',
      'Helvetica, sans-serif'
    ];
  
    let currentFontIndex = 0;
  
    $('#click-button').on('click', function() {
      // Update the font of the #title element
      $('#title').css('font-family', fonts[currentFontIndex]);
  
      // Move to the next font in the array
      currentFontIndex++;
  
      // If we've reached the end of the array, loop back to the first font
      if (currentFontIndex >= fonts.length) {
        currentFontIndex = 0;
      }
    });
  });