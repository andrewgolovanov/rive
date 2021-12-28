import AnimationGuitar from './components/animation-guitar';
import AnimationWater from './components/animation-water';

const App = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <AnimationGuitar />
    <AnimationWater />
  </div>
);

export default App;
