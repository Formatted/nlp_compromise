const units = {
  'Temperature': {
    '°C': 'Celsius',
    '°F': 'Fahrenheit',
    'K': 'Kelvin',
    '°Ré': 'Reaumur',
    '°N': 'Newton',
    '°Ra': 'Rankine',
  },
  'Volume': {
    'm³': 'cubic meter',
    'dm³': 'cubic decimeter',
    'cm³': 'cubic centimeter',
    'l': 'liter',
    'dl': 'deciliter',
    'cl': 'centiliter',
    'ml': 'milliliter',
    'in³': 'cubic inch',
    'ft³': 'cubic foot',
    'yd³': 'cubic yard',
    'gal': 'gallon',
    'bbl': 'petroleum barrel',
    'pt': 'pint',
  },
  'Distance': {
    'km': 'kilometer',
    'm': 'meter',
    'dm': 'decimeter',
    'cm': 'centimeter',
    'mm': 'millimeter',
    'mi': 'mile',
    'in': 'inch',
    'ft': 'foot',
    'feet': 'foot',
    'yd': 'yard',
  },
  'Weight': {
    't': 'tonne',
    'kg': 'kilogram',
    'hg': 'hectogram',
    'g': 'gram',
    'dg': 'decigram',
    'cg': 'centigram',
    'mg': 'milligram',
    'µg': 'microgram',
    'carat': 'carat',
    'grain': 'grain',
    'oz': 'ounce',
    'lb': 'pound',
    'ton': 'tonne',
    'st': 'stone',
  },
  'Area': {
    'km²': 'square kilometer',
    'm²': 'square meter',
    'dm²': 'square decimeter',
    'cm²': 'square centimeter',
    'mm²': 'square millimeter',
    'ha': 'hectare',
    'ca': 'centiare',
    'mile²': 'square mile',
    'in²': 'square inch',
    'yd²': 'square yard',
    'ft²': 'square foot',
    'acre': 'acre',
  },
  'Frequency': {
    'Hz': 'hertz'
  },
  'Speed': {
    'km/h': 'kilometer per hour',
    'kmph': 'kilometer per hour',
    'mps': 'meter per second',
    'm/s': 'meter per second',
    'mph': 'mile per hour',
    'mi/h': 'mile per hour',
    'knot': 'knot',
  },
  'Data': {
    'b': 'bit',
    'B': 'byte',
    'KB': 'kilobyte',
    'Kb': 'kilobyte',
    'MB': 'megabyte',
    'Mb': 'megabyte',
    'GB': 'gigabyte',
    'Gb': 'gigabyte',
    'TB': 'terabyte',
    'Tb': 'terabyte',
    'PB': 'petabyte',
    'Pb': 'petabyte',
    'EB': 'exabyte',
    'Eb': 'exabyte',
    'ZB': 'zettabyte',
    'Zb': 'zettabyte',
    'YB': 'yottabyte',
    'Yb': 'yottabyte',
  },
  'Energy': {
    'J': 'joule',
    'Pa': 'pascal',
    'bar': 'bar',
    'W': 'watt',
    'N': 'newton',
    'Wb': 'weber',
    'T': 'tesla',
    'H': 'henry',
    'C': 'coulomb',
    'V': 'volt',
    'F': 'farad',
    'S': 'siemens',
    'O': 'ohm',
    'lx': 'lux',
    'lm': 'lumen'
  },
  'Time': {
    'year': 'year',
    'week': 'week',
    'day': 'day',
    'h': 'hour',
    'min': 'minute',
    's': 'second',
    'ms': 'millisecond',
    'µs': 'microsecond',
    'nanosecond': 'nanosecond',
    'picosecond': 'picosecond',
    'femtosecond': 'femtosecond',
    'attosecond': 'attosecond'
  },
  'Money': {
    'dollar': 'currency',
    'cent': 'currency',
    'penny': 'currency',
    'dime': 'currency',
    'dinar': 'currency',
    'euro': 'currency',
    'EU': 'currency',
    'lira': 'currency',
    'pound': 'currency',
    'GBP': 'currency',
    'pence': 'currency',
    'peso': 'currency',
    'sterling': 'currency',
    'rand': 'currency',
    'rouble': 'currency',
    'shekel': 'currency',
    'yen': 'currency',
    'yuan': 'currency',
    'franc': 'currency',
    'rupee': 'currency',
    'shilling': 'currency',
    'won': 'currency',
    'krona': 'currency',
    'dirham': 'currency',
    'forint': 'currency',
    '€': 'currency',
    '$': 'currency',
    '¥': 'currency',
    '£': 'currency',
    'real': 'currency',
    'USD': 'currency',
    'AUD': 'currency',
    'CAD': 'currency',
    'BRL': 'currency',
    'EUR': 'currency',
    'CNY': 'currency',
    'EGP': 'currency',
    'HUF': 'currency',
    'MXN': 'currency'
  }
};

module.exports = Object.keys(units).reduce(function(h, k) {
  Object.keys(units[k]).forEach(function(u) {
    h[u] = {
      name: units[k][u],
      category: k
    };
    h[units[k][u]] = {
      name: units[k][u],
      category: k
    };
  });
  return h;
}, {});
