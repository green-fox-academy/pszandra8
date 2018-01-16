function prison (name) {
  let fugutive = name;
  let fugutiveCount = 0;
  let visits = 0;
  this.visit = function () {
    if (fugutiveCount === 0) {
      console.log('Nobody is here anymore');
    }
    else {
      visits++;
      console.log(fugutive, ' is visited ', visits, ' time(s)');
    }
  }
  this.escape = function () {
    console.log('BREAKING NEWS,', fugutive, 'escaped the prison');
    fugutiveCount = 0;
  }
}

const alcatraz = new prison('Sad Panda');

alcatraz.visit() // Sad Panda is visited 1 time(s)
alcatraz.visit() // Sad Panda is visited 2 time(s)
alcatraz.escape() // BREAKING NEWS, Sad Panda escaped the prison
alcatraz.visit() // Nobody is here anymore