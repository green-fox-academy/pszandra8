function postMaster(poBox, dispatchFunction) {
    const mailing = function(targetBox, message) {
      if (poBox === targetBox) {
        dispatchFunction(message);
      }
    }
    return mailing;
}

function myAction( message ) {
    console.log('The message says:', message);
}

const myPrivateBox = postMaster('super_secret_box', myAction);

myPrivateBox('super_secret_box', 'The eagle has landed!');
myPrivateBox('false_alarm', 'The eagle has landed! Heeeeloooooo!');
