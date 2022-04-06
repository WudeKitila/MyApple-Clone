import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Alert from './Components/Main/AlertSection/Alert';
import FirstSection from './Components/Main/FirstSection/FirstSection';
import Second from './Components/Main/SecondSection/Second';
import Third from './Components/Main/ThirdSection/Third';
import Fourth from './Components/Main/FourthSection/Fourth';
import Fifth from './Components/Main/FifthSection/Fifth';
import Sixth from './Components/Main/SixthSection/Sixth';

import  "./Components/Footer/custom"

function App() {
  return (
  <div>
<Header />
<Alert />
<FirstSection /> 
<Second />
<Third />
<Fourth />
<Fifth />
<Sixth /> 
<Footer />

  </div>);
}

export default App;
