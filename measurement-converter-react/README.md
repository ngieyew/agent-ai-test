# Universal Measurement Converter - React Edition

A modern React application built with Vite for converting between Metric, British Imperial, and United States Customary units of measurement for length and weight.

## Features

### Length Conversions
- **Metric Units**: Millimeters, Centimeters, Meters, Kilometers
- **Imperial/US Units**: Inches, Feet, Yards, Chains, Furlongs, Miles

### Weight Conversions
- **Metric Units**: Grams, Kilograms, Metric Tons
- **Imperial/US Units**: Ounces, Pounds, Stones, Quarters, Hundredweight (UK/US), Tons (UK Long/US Short)

### Interactive Features
- **Real-time conversion** as you type (500ms delay)
- **Enter key support** for quick conversion
- **Auto-conversion** when changing units
- **Responsive design** for mobile and desktop
- **Input validation** with error messages
- **Beautiful modern UI** with animations

## Technology Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **CSS3** - Modern CSS with Grid, Flexbox, and animations
- **JavaScript ES6+** - Modern JavaScript features

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

### Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
src/
├── App.jsx          # Main application component with conversion logic
├── App.css          # Application styling
├── main.jsx         # React app entry point
└── index.css        # Global styles
```

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

1. **Select Measurement Type**: Choose between Length or Weight conversion
2. **Enter Value**: Input the numerical value you want to convert
3. **Select Unit**: Choose the source unit from the dropdown
4. **View Results**: Conversions to all other units appear automatically

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- No external dependencies required

## Migration from Original

This React version maintains all the functionality of the original HTML/JavaScript version while adding:

- **Component-based architecture** for better maintainability
- **React hooks** for state management
- **Modern build system** with Vite
- **Hot module replacement** for faster development
- **Optimized production builds**

## Development

The application uses React hooks for state management:

- `useState` for managing input values, selected units, and results
- `useEffect` for handling real-time conversion with debouncing
- Component composition for reusable conversion sections

## License

This project is open source and available under the MIT License.
