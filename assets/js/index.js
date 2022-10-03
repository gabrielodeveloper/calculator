function Calculator() {
  this.display = document.querySelector('.display');

  this.start = () => {
    this.captureClick();
    this.pressEnter();
    this.pressBackSpace();
  };

    this.pressEnter = () => {
      this.display.addEventListener('keyup', (e) => {
        if(e.keyCode === 13) {
          this.makeAccount();
        }
      });
    };

    this.pressBackSpace = () => {
      this.display.addEventListener('keyDown', (e) => {
        if(e.keyCode === 8) {
          this.clearOne();
        }
      })
    }

    this.captureClick = () => {
      document.addEventListener('click', (e) => {
        const el = e.target;
        if(el.classList.contains('btn-num')) {
          this.addNumberOnDisplay(el);
        }

        if(el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if(el.classList.contains('btn-del')) {
          this.clearOne();
        }

        if(el.classList.contains('btn-eq')) {
          this.makeAccount();
        }
      });
    };

    this.addNumberOnDisplay = (el) => {
      this.display.value += el.innerText;
    };

    this.clearDisplay = () => {
      this.display.value = '';
    }

    this.clearOne = () => {
      this.display.value = this.display.value.slice(0, -1);
    }

    this.makeAccount = () => {
      let account = this.display.value;

      try {
        account = eval(account);

        if(!account) {
          alert('Conta inválida');
          return;
        }

        this.display.value = String(account);
      } catch(error) {
        alert('Conta inválida');
        return;
      }
    }

}

const calculator = new Calculator();
calculator.start();