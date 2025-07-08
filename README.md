# Universal Measurement Converter

A modern web application for converting between Metric, British Imperial, and United States Customary units of measurement for length and weight.

## Features

### Length Conversions

**Metric Units:**
- **Millimeters (mm)** - Base metric length unit
- **Centimeters (cm)** - 10 millimeters
- **Meters (m)** - 100 centimeters / 1,000 millimeters
- **Kilometers (km)** - 1,000 meters

**Imperial/US Units:**
- **Inches (in)** - Base unit for conversion calculations
- **Feet (ft)** - 12 inches
- **Yards (yd)** - 3 feet / 36 inches
- **Chains (ch)** - 22 yards / 792 inches
- **Furlongs (fur)** - 220 yards / 7,920 inches
- **Miles (mi)** - 1,760 yards / 63,360 inches

### Weight Conversions

**Metric Units:**
- **Grams (g)** - Base metric weight unit
- **Kilograms (kg)** - 1,000 grams
- **Metric Tons (t)** - 1,000 kilograms

**Imperial/US Units:**
- **Ounces (oz)** - Base unit for conversion calculations
- **Pounds (lb)** - 16 ounces
- **Stones (st)** - 14 pounds (British Imperial)
- **Quarters (qr)** - 28 pounds (British Imperial)
- **Hundredweight (cwt)** - UK: 112 pounds, US: 100 pounds
- **Tons** - UK Long Ton: 2,240 pounds, US Short Ton: 2,000 pounds

## Key Differences Between Systems

### Metric System
- Base-10 system used worldwide
- Kilogram = 1,000 grams
- Metric Ton = 1,000 kilograms
- Meter = 100 centimeters = 1,000 millimeters
- Kilometer = 1,000 meters

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
- **Metric**: 1 km = 1,000 m = 100,000 cm = 1,000,000 mm
- **Imperial/US**: 1 mile = 5,280 feet = 1,760 yards = 63,360 inches
- **Cross-system**: 1 km ≈ 0.621 miles, 1 mile ≈ 1.609 km
- **Common**: 1 meter ≈ 3.28 feet, 1 inch ≈ 2.54 cm

### Weight Conversions
- **Metric**: 1 metric ton = 1,000 kg = 1,000,000 g
- **Imperial**: 1 stone = 14 pounds = 224 ounces
- **Cross-system**: 1 kg ≈ 2.205 pounds, 1 pound ≈ 453.6 grams
- **Tons**: 1 metric ton ≈ 1.102 US tons ≈ 0.984 UK tons

## Getting Started

Simply open `index.html` in your web browser to start using the converter. No installation or setup required!

## License

This project is open source and available under the MIT License.
