const data = `Phasianus colchicus;9442;Fuscia
Pedetes capensis;2869;Puce
Recurvirostra avosetta;4285;Fuscia
Kobus defassa;4726;Red
Anser anser;8163;Violet
Callipepla gambelii;4422;Fuscia
Ara ararauna;7935;Aquamarine
Ara ararauna;3081;Crimson
Pelecanus conspicillatus;9831;Mauv
Cynictis penicillata;839;Puce
Graspus graspus;9814;Indigo
Vicugna vicugna;6439;Violet
Lemur catta;2023;Pink
Tragelaphus scriptus;986;Aquamarine
Corythornis cristata;4995;Red
Sitta canadensis;6786;Puce
Sus scrofa;9338;Goldenrod
Psophia viridis;8881;Yellow
Gabianus pacificus;7714;Aquamarine
Sus scrofa;6449;Orange
Pteropus rufus;5816;Yellow
Macropus agilis;1241;Teal
Pavo cristatus;5860;Violet
Corythornis cristata;5358;Khaki
Loris tardigratus;725;Orange`;

let result = data
  .split('\n')
  .map(function(item) {
    return item.split(';');
  })
  .map(function(something) {
    return {
      name: something[0],
      id: something[1],
      color_code: something[2]
    };
    })

    .filter(function(element1, index, array) {
      firstMatchingIndex = array.findIndex(function(element2) {
        return element1.name === element2.name;
      });
      return index === firstMatchingIndex;
    })

    console.log(result);