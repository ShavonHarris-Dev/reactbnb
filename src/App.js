import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card'
import data from './components/data';



function App() {
  const cardData = data.map((cards) => {
    return <Card
    key={cards.id}
    {...cards}

     />
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
      {cardData}
      </section>

    </div>
  );
}

export default App;
