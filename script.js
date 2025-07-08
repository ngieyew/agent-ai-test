// Conversion factors to inches (base unit for length)
const lengthToInches = {
    inch: 1,
    foot: 12,
    yard: 36,
    chain: 792,  // 22 yards × 36 inches/yard
    furlong: 7920, // 220 yards × 36 inches/yard
    mile: 63360  // 1760 yards × 36 inches/yard
};

// Conversion factors to ounces (base unit for weight)
const weightToOunces = {
    ounce: 1,
    pound: 16,
    stone: 224,  // 14 pounds × 16 ounces/pound
    quarter: 448, // 28 pounds × 16 ounces/pound (British quarter)
    'hundredweight-uk': 1792, // 112 pounds × 16 ounces/pound
    'hundredweight-us': 1600, // 100 pounds × 16 ounces/pound
    'ton-uk': 35840, // 2240 pounds × 16 ounces/pound (long ton)
    'ton-us': 32000  // 2000 pounds × 16 ounces/pound (short ton)
};

// Unit display names
const lengthUnits = {
    inch: 'Inches (in)',
    foot: 'Feet (ft)',
    yard: 'Yards (yd)',
    chain: 'Chains (ch)',
    furlong: 'Furlongs (fur)',
    mile: 'Miles (mi)'
};

const weightUnits = {
    ounce: 'Ounces (oz)',
    pound: 'Pounds (lb)',
    stone: 'Stones (st) - British',
    quarter: 'Quarters (qr) - British',
    'hundredweight-uk': 'Hundredweight (cwt) - UK',
    'hundredweight-us': 'Hundredweight (cwt) - US',
    'ton-uk': 'Tons (UK Long Ton)',
    'ton-us': 'Tons (US Short Ton)'
};

function convertLength() {
    const inputValue = parseFloat(document.getElementById('length-input').value);
    const fromUnit = document.getElementById('length-from-unit').value;
    const resultsDiv = document.getElementById('length-results');
    
    // Clear previous results
    resultsDiv.innerHTML = '';
    
    // Validate input
    if (isNaN(inputValue) || inputValue < 0) {
        resultsDiv.innerHTML = '<div class="result-item" style="border-left-color: #e74c3c;">Please enter a valid positive number</div>';
        return;
    }
    
    // Convert input to inches (base unit)
    const valueInInches = inputValue * lengthToInches[fromUnit];
    
    // Convert to all other units and display
    for (const [unit, conversionFactor] of Object.entries(lengthToInches)) {
        if (unit !== fromUnit) {
            const convertedValue = valueInInches / conversionFactor;
            const formattedValue = formatNumber(convertedValue);
            
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            resultItem.innerHTML = `
                <span class="value">${formattedValue}</span> 
                <span class="unit">${lengthUnits[unit]}</span>
            `;
            resultsDiv.appendChild(resultItem);
        }
    }
}

function convertWeight() {
    const inputValue = parseFloat(document.getElementById('weight-input').value);
    const fromUnit = document.getElementById('weight-from-unit').value;
    const resultsDiv = document.getElementById('weight-results');
    
    // Clear previous results
    resultsDiv.innerHTML = '';
    
    // Validate input
    if (isNaN(inputValue) || inputValue < 0) {
        resultsDiv.innerHTML = '<div class="result-item" style="border-left-color: #e74c3c;">Please enter a valid positive number</div>';
        return;
    }
    
    // Convert input to ounces (base unit)
    const valueInOunces = inputValue * weightToOunces[fromUnit];
    
    // Convert to all other units and display
    for (const [unit, conversionFactor] of Object.entries(weightToOunces)) {
        if (unit !== fromUnit) {
            const convertedValue = valueInOunces / conversionFactor;
            const formattedValue = formatNumber(convertedValue);
            
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            resultItem.innerHTML = `
                <span class="value">${formattedValue}</span> 
                <span class="unit">${weightUnits[unit]}</span>
            `;
            resultsDiv.appendChild(resultItem);
        }
    }
}

function formatNumber(num) {
    // Handle very small numbers
    if (num < 0.000001 && num > 0) {
        return num.toExponential(3);
    }
    
    // Handle very large numbers
    if (num >= 1000000) {
        return num.toExponential(3);
    }
    
    // For numbers with many decimal places, limit to 6 significant digits
    if (num < 1) {
        return parseFloat(num.toPrecision(6)).toString();
    }
    
    // For larger numbers, show appropriate decimal places
    if (num >= 1000) {
        return num.toLocaleString('en-US', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
        });
    }
    
    // For medium numbers, show up to 4 decimal places
    return parseFloat(num.toFixed(4)).toString();
}

// Add keyboard event listeners
document.addEventListener('DOMContentLoaded', function() {
    const lengthInput = document.getElementById('length-input');
    const weightInput = document.getElementById('weight-input');
    
    // Allow Enter key to trigger conversion
    lengthInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            convertLength();
        }
    });
    
    weightInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            convertWeight();
        }
    });
    
    // Auto-convert when unit selection changes (if there's a value)
    document.getElementById('length-from-unit').addEventListener('change', function() {
        if (lengthInput.value) {
            convertLength();
        }
    });
    
    document.getElementById('weight-from-unit').addEventListener('change', function() {
        if (weightInput.value) {
            convertWeight();
        }
    });
    
    // Real-time conversion as user types (with debounce)
    let lengthTimeout, weightTimeout;
    
    lengthInput.addEventListener('input', function() {
        clearTimeout(lengthTimeout);
        lengthTimeout = setTimeout(() => {
            if (this.value) {
                convertLength();
            } else {
                document.getElementById('length-results').innerHTML = '';
            }
        }, 500);
    });
    
    weightInput.addEventListener('input', function() {
        clearTimeout(weightTimeout);
        weightTimeout = setTimeout(() => {
            if (this.value) {
                convertWeight();
            } else {
                document.getElementById('weight-results').innerHTML = '';
            }
        }, 500);
    });
});

// Add some helpful preset conversions
function addPresetExamples() {
    const examples = {
        length: [
            { value: 1, unit: 'mile', description: '1 mile (common distance)' },
            { value: 6, unit: 'foot', description: '6 feet (average person height)' },
            { value: 1, unit: 'yard', description: '1 yard (fabric measurement)' }
        ],
        weight: [
            { value: 1, unit: 'stone', description: '1 stone (British weight)' },
            { value: 1, unit: 'ton-us', description: '1 US ton' },
            { value: 1, unit: 'ton-uk', description: '1 UK ton' }
        ]
    };
    
    // You can extend this to add preset buttons if desired
}

// Initialize the app
addPresetExamples();