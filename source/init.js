import gameState, { handleUserAction } from "./gameState";

import { TICK_RATE } from "./constants";
import initButtons from "./buttons";

//not all the browsers know async function , so use browserslist in package.json file
async function init() {
  console.log("Starting game");
  initButtons(handleUserAction);
  //tracking next time we gonna call tick
  let nextTimeToTick = Date.now();

  //function inside of a function ot keep track f time - closure
  //encapsulate the state of nexttimetoTick otherwise it will reset if its inside
  function nextAnimationFrame() {
    const now = Date.now();

    if (nextTimeToTick <= now) {
      gameState.tick();
      //reset
      nextTimeToTick = now + TICK_RATE;
    }
    //provided by browser
    //for doing javascript animations
    //go an call this funcion when i called you.
    requestAnimationFrame(nextAnimationFrame);
  }
  requestAnimationFrame(nextAnimationFrame);
}

init();
