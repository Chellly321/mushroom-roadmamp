  import OrangeMushroom from '../images/orange-mushroom.jpeg'
  import L from 'leaflet';


export const Color = {
    red: 0,
    green: 1,
    yellow: 2,
    blue: 3
  };
  
  export const Spots = {
    none: 0,
    hidden: 1,
    dotted: 2,
    dashed: 3,
    solid: 4,
    double: 5,
    groove: 6,
    ridge: 7,
    inset: 8,
    outset: 9
  };
  


export const Mushrooms = [
    {
      name: 'nervous bell',
      iconUrl: {OrangeMushroom},
      spots: Spots.dashed,
      spotsKey: 'Dashed',
      color: Color.red,
      colorKey: 'Red',
      latlng: [52.082042, 5.236192],
    },
    { 
      name: 'nice benz',
      iconUrl: {OrangeMushroom},
      spots: Spots.dotted,
      spotsKey: "Dotted",
      color: Color.blue,
      colorKey: 'Blue',
      latlng: [52.080678, 5.236457],
    },
    {
      name: 'quizzical chaplygin',
      iconUrl: {OrangeMushroom},
      spots: Spots.double,
      spotsKey: "Double",
      color: Color.red,
      colorKey: 'Red',
      latlng: [52.081624, 5.235895],
    },
    {
      name: 'nifty bhabha',
      spots: Spots.groove,
      spotsKey: "Groove",
      color: Color.blue,
      colorKey: 'Blue',
      latlng: [52.080671, 5.236392],
    },
    {
      name: 'peaceful dijkstra', 
      spots: Spots.hidden,
      spotsKey: "Hidden",
      color: Color.green,
      colorKey: 'Green',
      latlng: [52.081451, 5.235404],
    },
    {
      name: 'nostalgic bhaskara',
      spots: Spots.inset,
      spotsKey: "Inset",
      color: Color.blue,
      colorKey: 'Blue',
      latlng: [52.080552, 5.234156],
    },
    {
      name: 'silly burnell',
      spots: Spots.ridge,
      spotsKey: "Ridge",
      color: Color.blue,
      colorKey: 'Blue',
      latlng: [52.080598, 5.234361],
    },
    {
      name: 'romantic cray', 
      spots: Spots.groove,
      spotsKey: "Groove",
      color: Color.green,
      colorKey: 'Green',
      latlng: [52.080253, 5.234631],
    },
    { 
      name: 'vigilant bose',
      spots: Spots.solid,
      spotsKey: "Solid",
      color: Color.RED,
      colorKey: 'Red',
      latlng: [52.081063, 5.236819],
    },
    {
      name: 'quirky buck',
      spots: Spots.dashed,
      spotsKey: "Dashed",
      color: Color.green,
      colorKey: 'Green',
      latlng: [52.081163, 5.236446],
    },
    {
      name: 'stoic cartwright', 
      spots: Spots.double,
      spotsKey: "Double",
      color: Color.blue,
      colorKey: 'Blue',
      latlng: [52.080861, 5.235876],
    },
    { 
      name: 'pensive clarke',
      spots: Spots.dotted,
      spotsKey: "Dotted",
      color: Color.yellow,
      colorKey: 'Yellow',
      latlng: [52.081199, 5.234929],
    },
    { 
      name: 'strange cannon',
      spots: Spots.hidden,
      spotsKey: "Hidden",
      color: Color.yellow,
      colorKey: 'Yellow',
      latlng: [52.080273, 5.234664],
  
    },
    { 
      name: 'stupefied bohr',
      spots: Spots.none,
      spotsKey: "None",
      color: Color.red,
      colorKey: 'Red',
      latlng: [52.081883, 5.235415],
    },
    { 
      name: 'pedantic colden',
      spots: Spots.hidden,
      spotsKey: "Hidden",
      color: Color.blue,
      colorKey: 'Blue',
      latlng: [52.081813, 5.236781],
    },
    { 
      name: 'priceless davinci',
      spots: Spots.dashed,
      spotsKey: "Dashed",
      color: Color.green,
      colorKey: 'Green',
      latlng: [52.081538, 5.236694],
    },
    { 
      name: 'vibrant chandrasekhar',
      spots: Spots.outset,
      spotsKey: "Outset",
      color: Color.red,
      colorKey: 'Red',
      latlng: [52.081182, 5.237143],
    },
    { 
      name: 'wizardly booth',
      spots: Spots.groove,
      spotsKey: "Groove",
      color: Color.green,
      colorKey: 'Green',
      latlng: [52.080429, 5.237424],
    },
    { 
      name: 'suspicious driscoll',
      spots: Spots.inset,
      spotsKey: "Inset",
      color: Color.yellow,
      colorKey: 'Yellow',
      latlng: [52.080074, 5.236462],
    },
    { 
      name: 'optimistic blackburn',
      spots: Spots.ridge,
      spotsKey: "Ridge",
      color: Color.red,
      colorKey: 'Red',
      latlng: [52.080144, 5.235857],
    },
    {
      name: 'reverent curie',
      spots: Spots.groove,
      spotsKey: "groove",
      color: Color.blue,
      colorKey: 'BLUE',
      latlng: [52.081222, 5.235965],
    },
  ]


  export default function() {
    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve(Mushrooms);
      }, 1500);
    });
  }