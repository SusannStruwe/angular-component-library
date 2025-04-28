import { Injectable } from '@angular/core';

/**
 * Color class to manage colors
 */
export class Colors {
  static standard: string[] = [
    //demo colors
    '#2dc3c1',
    'mediumseagreen',
    'maroon',
    '#0193A0',
    'darkgreen',

    // blue green
    //"#2dc3c1",
    //"#0193A0",
    '#025068',
    '#012d3b',
    '#0d6a96',
    '#1dc6a9',
    '#18A68D', // anacision green2
    '#0f7866',
    '#03575e',
    '#8EC7D2',

    // green
    '#0b510b',
    //"darkgreen",
    'forestgreen',
    'limegreen',
    'darkseagreen',
    //"mediumseagreen",
    'seagreen',
    'yellowgreen',
    'olivedrab',
    'olive',
    //brown
    '#B39A69', // anacision brown
    'tan',
    'saddlebrown',
    'chocolate',
    'peru',
    '#DBA507',
    'darkgoldenrod',
    '#FFA95D', // anacision orange
    'sandybrown',
    '#db7607',
    // red
    'brown',
    //"maroon",
    'darkred',
    '#49001A', // anacision dark dark punk
    '#DA004D', // anacision pink
    '#A00038', // anacision dark pink
    'indianred',
    'lightcoral',
    'darksalmon',
    'lightsalmon',
    // purple
    'mediumvioletred',
    'darkmagenta',
    'purple',
    '#ad4dea',
    'mediumpurple',
    '#580c88',
    'indigo',
    '#3c0261',
    'slateblue',
    '#8c9eff',
    // blue, gray
    '#78879F', // anacision gray,
    '#1a237e',
    'mediumblue',
    'steelblue',
    'royalblue',
    'dodgerblue',
    'deepskyblue',
    'lightskyblue',
    '#303f9f',
    '#536dfe',
  ];

  static cssColors: string[] = [
    'aliceblue',
    'antiquewhite',
    'aqua',
    'aquamarine',
    'azure',
    'beige',
    'bisque',
    'black',
    'blanchedalmond',
    'blue',
    'blueviolet',
    'brown',
    'burlywood',
    'cadetblue',
    'chartreuse',
    'chocolate',
    'coral',
    'cornflowerblue',
    'cornsilk',
    'crimson',
    'cyan',
    'darkblue',
    'darkcyan',
    'darkgoldenrod',
    'darkgray',
    'darkgrey',
    'darkgreen',
    'darkkhaki',
    'darkmagenta',
    'darkolivegreen',
    'darkorange',
    'darkorchid',
    'darkred',
    'darksalmon',
    'darkseagreen',
    'darkslateblue',
    'darkslategray',
    'darkslategrey',
    'darkturquoise',
    'darkviolet',
    'deeppink',
    'deepskyblue',
    'dimgray',
    'dimgrey',
    'dodgerblue',
    'firebrick',
    'floralwhite',
    'forestgreen',
    'fuchsia',
    'gainsboro',
    'ghostwhite',
    'gold',
    'goldenrod',
    'gray',
    'grey',
    'green',
    'greenyellow',
    'honeydew',
    'hotpink',
    'indianred',
    'indigo',
    'ivory',
    'khaki',
    'lavender',
    'lavenderblush',
    'lawngreen',
    'lemonchiffon',
    'lightblue',
    'lightcoral',
    'lightcyan',
    'lightgoldenrodyellow',
    'lightgray',
    'lightgrey',
    'lightgreen',
    'lightpink',
    'lightsalmon',
    'lightseagreen',
    'lightskyblue',
    'lightslategray',
    'lightslategrey',
    'lightsteelblue',
    'lightyellow',
    'lime',
    'limegreen',
    'linen',
    'magenta',
    'maroon',
    'mediumaquamarine',
    'mediumblue',
    'mediumorchid',
    'mediumpurple',
    'mediumseagreen',
    'mediumslateblue',
    'mediumspringgreen',
    'mediumturquoise',
    'mediumvioletred',
    'midnightblue',
    'mintcream',
    'mistyrose',
    'moccasin',
    'navajowhite',
    'navy',
    'oldlace',
    'olive',
    'olivedrab',
    'orange',
    'orangered',
    'orchid',
    'palegoldenrod',
    'palegreen',
    'paleturquoise',
    'palevioletred',
    'papayawhip',
    'peachpuff',
    'peru',
    'pink',
    'plum',
    'powderblue',
    'purple',
    'red',
    'rosybrown',
    'royalblue',
    'saddlebrown',
    'salmon',
    'sandybrown',
    'seagreen',
    'seashell',
    'sienna',
    'silver',
    'skyblue',
    'slateblue',
    'slategray',
    'slategrey',
    'snow',
    'springgreen',
    'steelblue',
    'tan',
    'teal',
    'thistle',
    'tomato',
    'turquoise',
    'violet',
    'wheat',
    'white',
    'whitesmoke',
    'yellow',
    'yellowgreen',
  ];
}

/**
 * Get colors
 * @returns
 */
export function getColors(): string[] {
  return Colors.standard;
}

/**
 * Gets random color
 * @returns
 */
export function getRandomColor(): string {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  randomColor.length === 5 ? (randomColor = randomColor + 'f') : null;
  return '#' + randomColor;
}

// used defined colors for customer show case
export function getColorToName(taskName: string): string {
  // A111 & B111 red , B222 & A222 blue, A333 green
  // darkgreen
  const colors = ['#9a0303', '#6e0101', '#2dc3c1', '#0193A0', 'mediumseagreen'];
  const color = taskName.includes('A111')
    ? colors[0]
    : taskName.includes('B111')
      ? colors[1]
      : taskName.includes('A222')
        ? colors[2]
        : taskName.includes('B222')
          ? colors[3]
          : taskName.includes('A333')
            ? colors[4]
            : colors[0];
  return color;
}

/**
 * Gets a color as string to a task name (==orderId)
 * @param name
 * @returns
 */
export function getColorToTaskOrderIdName(
  name: string,
  taskColors: { [id: string]: string },
): string {
  return taskColors[name];
}
