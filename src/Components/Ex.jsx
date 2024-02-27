// import React, { useState } from 'react';
// import TireSearch from '../TireSearch';
// function HomeScreen() {
//   return (
//     <div>
//       <TireSearch/>
//     </div>
//   );
// }

// function OtherScreen() {
//   return (
//     <div>
//       <h1>This is the Other Screen</h1>
//       {/* Add any other content for your other screen */}
//     </div>
//   );
// }

// function Apps() {
//   const [showHomeScreen, setShowHomeScreen] = useState(true);

//   const handleClickHome = () => {
//     setShowHomeScreen(true);
//   };

//   const handleClickOther = () => {
//     setShowHomeScreen(false);
//   };

//   return (
//     <div>
//       <nav>
//         <button onClick={handleClickHome}>Home</button>
//         <button onClick={handleClickOther}>Other</button>
//       </nav>
//       {showHomeScreen ? <HomeScreen /> : <OtherScreen />}
//     </div>
//   );
// }

// export default Apps;

// import React, { useState } from 'react';

// function HomeScreen() {
//   return (
//     <div>
//       <h1>Welcome to the Home Screen</h1>
//       {/* Add any other content for your home screen */}
//     </div>
//   );
// }

// function OtherScreen() {
//   return (
//     <div>
//       <h1>This is the Other Screen</h1>
//       {/* Add any other content for your other screen */}
//     </div>
//   );
// }

// function Apps() {
//   const [currentScreen, setCurrentScreen] = useState('home');

//   const screens = {
//     home: <HomeScreen />,
//     other: <OtherScreen />,
//   };

//   const handleClick = (screen) => {
//     setCurrentScreen(screen);
//   };

//   const navItems = [
//     { label: 'Home', id: 'home' },
//     { label: 'Other', id: 'other' },
//   ];

//   return (
//     <div>
//       <nav>
//         {navItems.map((item) => (
//           <button key={item.id} onClick={() => handleClick(item.id)}>
//             {item.label}
//           </button>
//         ))}
//       </nav>
//       {screens[currentScreen]}
//     </div>
//   );
// }

// export default Apps;
import React, { useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';

function LocationSelector() {
  const [address, setAddress] = useState('');

  const handleChange = (newAddress) => {
    setAddress(newAddress);
  };

  const handleSelect = async (selectedAddress) => {
    setAddress(selectedAddress);
    try {
      const results = await geocodeByAddress(selectedAddress);
      const latLng = await getLatLng(results[0]);
      console.log('Latitude and Longitude:', latLng);
      // You can do something with the latitude and longitude here
    } catch (error) {
      console.error('Error fetching location:', error);
    }
  };

  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
}

export default LocationSelector;
