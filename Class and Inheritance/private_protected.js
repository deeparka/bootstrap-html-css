//----------------------- Protected ---------------------------
class CoffeeMachine {
    _waterAmount = 0;  // protected variable
  
    constructor(power) {
        this._power = power;
      }  

    set waterAmount(value) {
      if (value < 0) {
        value = 0;
      }
      this._waterAmount = value;
    }
  
    get waterAmount() {
      return this._waterAmount;
    }

    get power() {
        return this._power;
      }
  }
  
  // create the coffee machine
  let coffeeMachine = new CoffeeMachine(100);
  
  // add water
  coffeeMachine.waterAmount = 10; 

  console.log(`Power is: ${coffeeMachine.power}W`);
  console.log('Power is again: '+ coffeeMachine.waterAmount);


//------------------------ Private---------------------------
class CoffeeMachine_New {
    #waterLimit = 200;
  
    #fixWaterAmount(value) {
      if (value < 0) return 0;
      if (value > this.#waterLimit) return this.#waterLimit;
    }
  
    setWaterAmount(value) {
      this.#waterLimit = this.#fixWaterAmount(value);
    }

    get water(){
        return this.#waterLimit;
    }
  }
  
  let coffeeMachine1 = new CoffeeMachine_New();
  
  // can't access privates from outside of the class
   //coffeeMachine1.#fixWaterAmount(123); // Error
  // coffeeMachine1.#waterLimit = 1000; // Error
  console.log(coffeeMachine1.water);  // this will access private variable using get method