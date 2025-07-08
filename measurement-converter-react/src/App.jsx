import { useState, useEffect } from 'react'
import './App.css'

// Conversion factors to inches (base unit for length)
const lengthToInches = {
  // Metric units
  millimeter: 0.0393701,
  centimeter: 0.393701,
  meter: 39.3701,
  kilometer: 39370.1,
  
  // Imperial/US units
  inch: 1,
  foot: 12,
  yard: 36,
  chain: 792,
  furlong: 7920,
  mile: 63360
};

// Conversion factors to ounces (base unit for weight)
const weightToOunces = {
  // Metric units
  gram: 0.035274,
  kilogram: 35.274,
  'metric-ton': 35274,
  
  // Imperial/US units
  ounce: 1,
  pound: 16,
  stone: 224,
  quarter: 448,
  'hundredweight-uk': 1792,
  'hundredweight-us': 1600,
  'ton-uk': 35840,
  'ton-us': 32000
};

// Unit display names
const lengthUnits = {
  millimeter: 'Millimeters (mm)',
  centimeter: 'Centimeters (cm)',
  meter: 'Meters (m)',
  kilometer: 'Kilometers (km)',
  inch: 'Inches (in)',
  foot: 'Feet (ft)',
  yard: 'Yards (yd)',
  chain: 'Chains (ch)',
  furlong: 'Furlongs (fur)',
  mile: 'Miles (mi)'
};

const weightUnits = {
  gram: 'Grams (g)',
  kilogram: 'Kilograms (kg)',
  'metric-ton': 'Metric Tons (t)',
  ounce: 'Ounces (oz)',
  pound: 'Pounds (lb)',
  stone: 'Stones (st) - British',
  quarter: 'Quarters (qr) - British',
  'hundredweight-uk': 'Hundredweight (cwt) - UK',
  'hundredweight-us': 'Hundredweight (cwt) - US',
  'ton-uk': 'Tons (UK Long Ton)',
  'ton-us': 'Tons (US Short Ton)'
};

function formatNumber(num) {
  if (num < 0.000001 && num > 0) {
    return num.toExponential(3);
  }
  
  if (num >= 1000000) {
    return num.toExponential(3);
  }
  
  if (num < 1) {
    return parseFloat(num.toPrecision(6)).toString();
  }
  
  if (num >= 1000) {
    return num.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    });
  }
  
  return parseFloat(num.toFixed(4)).toString();
}

function ConversionSection({ title, inputValue, setInputValue, fromUnit, setFromUnit, results, onConvert, units, conversionData, placeholder }) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (inputValue) {
        onConvert();
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [inputValue, fromUnit, onConvert]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onConvert();
    }
  };

  return (
    <div className="converter-section">
      <h2>{title}</h2>
      <div className="conversion-group">
        <div className="input-group">
          <label>Enter Value:</label>
          <input 
            type="number" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={placeholder}
            step="any"
          />
          <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
            <optgroup label="Metric Units">
              {Object.entries(units).filter(([key]) => 
                title === 'Length Conversion' 
                  ? ['millimeter', 'centimeter', 'meter', 'kilometer'].includes(key)
                  : ['gram', 'kilogram', 'metric-ton'].includes(key)
              ).map(([key, label]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </optgroup>
            <optgroup label="Imperial/US Units">
              {Object.entries(units).filter(([key]) => 
                title === 'Length Conversion' 
                  ? ['inch', 'foot', 'yard', 'mile', 'chain', 'furlong'].includes(key)
                  : ['ounce', 'pound', 'stone', 'quarter', 'hundredweight-uk', 'hundredweight-us', 'ton-uk', 'ton-us'].includes(key)
              ).map(([key, label]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </optgroup>
          </select>
        </div>
        
        <div className="convert-button">
          <button onClick={onConvert}>Convert</button>
        </div>
        
        <div className="output-group">
          <label>Results:</label>
          <div className="results-grid">
            {results.map((result, index) => (
              <div key={index} className="result-item">
                <span className="value">{result.value}</span> 
                <span className="unit">{result.unit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [lengthInput, setLengthInput] = useState('');
  const [lengthFromUnit, setLengthFromUnit] = useState('meter');
  const [lengthResults, setLengthResults] = useState([]);

  const [weightInput, setWeightInput] = useState('');
  const [weightFromUnit, setWeightFromUnit] = useState('kilogram');
  const [weightResults, setWeightResults] = useState([]);

  const convertLength = () => {
    const inputValue = parseFloat(lengthInput);
    
    if (isNaN(inputValue) || inputValue < 0) {
      setLengthResults([{ value: 'Please enter a valid positive number', unit: '', error: true }]);
      return;
    }

    const valueInInches = inputValue * lengthToInches[lengthFromUnit];
    const results = [];

    for (const [unit, conversionFactor] of Object.entries(lengthToInches)) {
      if (unit !== lengthFromUnit) {
        const convertedValue = valueInInches / conversionFactor;
        const formattedValue = formatNumber(convertedValue);
        results.push({
          value: formattedValue,
          unit: lengthUnits[unit]
        });
      }
    }

    setLengthResults(results);
  };

  const convertWeight = () => {
    const inputValue = parseFloat(weightInput);
    
    if (isNaN(inputValue) || inputValue < 0) {
      setWeightResults([{ value: 'Please enter a valid positive number', unit: '', error: true }]);
      return;
    }

    const valueInOunces = inputValue * weightToOunces[weightFromUnit];
    const results = [];

    for (const [unit, conversionFactor] of Object.entries(weightToOunces)) {
      if (unit !== weightFromUnit) {
        const convertedValue = valueInOunces / conversionFactor;
        const formattedValue = formatNumber(convertedValue);
        results.push({
          value: formattedValue,
          unit: weightUnits[unit]
        });
      }
    }

    setWeightResults(results);
  };

  return (
    <div className="container">
      <header>
        <h1>Universal Measurement Converter</h1>
        <p>Convert between Metric, British Imperial, and United States Customary units</p>
      </header>

      <main>
        <ConversionSection
          title="Length Conversion"
          inputValue={lengthInput}
          setInputValue={setLengthInput}
          fromUnit={lengthFromUnit}
          setFromUnit={setLengthFromUnit}
          results={lengthResults}
          onConvert={convertLength}
          units={lengthUnits}
          conversionData={lengthToInches}
          placeholder="Enter length value"
        />

        <ConversionSection
          title="Weight Conversion"
          inputValue={weightInput}
          setInputValue={setWeightInput}
          fromUnit={weightFromUnit}
          setFromUnit={setWeightFromUnit}
          results={weightResults}
          onConvert={convertWeight}
          units={weightUnits}
          conversionData={weightToOunces}
          placeholder="Enter weight value"
        />

        <div className="info-section">
          <h3>System Information</h3>
          <div className="info-grid">
            <div className="info-card">
              <h4>Metric System</h4>
              <ul>
                <li>1 kg = 1,000 grams</li>
                <li>1 metric ton = 1,000 kg</li>
                <li>1 m = 100 cm = 1,000 mm</li>
                <li>1 km = 1,000 meters</li>
                <li>Base-10 system (universal)</li>
              </ul>
            </div>
            <div className="info-card">
              <h4>British Imperial System</h4>
              <ul>
                <li>Stone = 14 pounds</li>
                <li>Hundredweight = 112 pounds</li>
                <li>Long Ton = 2,240 pounds</li>
                <li>Chain = 22 yards</li>
                <li>Furlong = 220 yards</li>
              </ul>
            </div>
            <div className="info-card">
              <h4>US Customary System</h4>
              <ul>
                <li>Hundredweight = 100 pounds</li>
                <li>Short Ton = 2,000 pounds</li>
                <li>Similar length units to Imperial</li>
                <li>Subtle differences in volume</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <p>&copy; 2024 Universal Measurement Converter</p>
      </footer>
    </div>
  );
}

export default App;
