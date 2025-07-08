# Imperial & US Customary Measurement Converter

A modern web application for converting between British Imperial and United States Customary units of measurement for length and weight.

## Features

### Length Conversions
- **Inches (in)** - Base unit for display
- **Feet (ft)** - 12 inches
- **Yards (yd)** - 3 feet / 36 inches
- **Chains (ch)** - 22 yards / 792 inches
- **Furlongs (fur)** - 220 yards / 7,920 inches
- **Miles (mi)** - 1,760 yards / 63,360 inches

### Weight Conversions
- **Ounces (oz)** - Base unit for calculation
- **Pounds (lb)** - 16 ounces
- **Stones (st)** - 14 pounds (British Imperial)
- **Quarters (qr)** - 28 pounds (British Imperial)
- **Hundredweight (cwt)** - UK: 112 pounds, US: 100 pounds
- **Tons** - UK Long Ton: 2,240 pounds, US Short Ton: 2,000 pounds

## Key Differences Between Systems

### British Imperial System
- Stone = 14 pounds
- Hundredweight = 112 pounds (8 stones)
- Long Ton = 2,240 pounds (20 hundredweight)

### US Customary System
- No stones commonly used
- Hundredweight = 100 pounds
- Short Ton = 2,000 pounds (20 hundredweight)

## How to Use

1. **Open the Application**: Open `index.html` in any modern web browser
2. **Select Measurement Type**: Choose between Length or Weight conversion
3. **Enter Value**: Input the numerical value you want to convert
4. **Select Unit**: Choose the source unit from the dropdown
5. **View Results**: Conversions to all other units appear automatically

### Interactive Features
- **Real-time conversion** as you type (500ms delay)
- **Enter key support** for quick conversion
- **Auto-conversion** when changing units
- **Responsive design** for mobile and desktop
- **Input validation** with error messages

## File Structure

```
.
├── index.html      # Main HTML structure
├── style.css       # Modern CSS styling with responsive design
├── script.js       # JavaScript conversion logic
└── README.md       # This documentation
```

## Technical Details

### Conversion Method
- All length conversions use inches as the base unit
- All weight conversions use ounces as the base unit
- Precise conversion factors ensure accuracy
- Numbers are formatted appropriately for readability

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- No external dependencies required

## Usage Examples

### Length Conversions
- 1 mile = 5,280 feet = 1,760 yards = 1,584,000 inches
- 1 furlong = 220 yards = 660 feet = 7,920 inches
- 1 chain = 22 yards = 66 feet = 792 inches

### Weight Conversions
- 1 stone = 14 pounds = 224 ounces
- 1 UK ton = 2,240 pounds = 35,840 ounces
- 1 US ton = 2,000 pounds = 32,000 ounces

## Getting Started

Simply open `index.html` in your web browser to start using the converter. No installation or setup required!

## License

This project is open source and available under the MIT License.
