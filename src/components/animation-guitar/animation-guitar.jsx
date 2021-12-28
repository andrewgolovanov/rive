import React, { useEffect, useState } from 'react';
import { useRive, useStateMachineInput } from 'rive-react';

import animationData from './data/animation4.riv';

const STATE_MACHINE_NAME = 'State Machine 1';
const INPUT_NAME = 'Rage';

const inputStyles = {
  padding: '15px',
};

const buttonStyles = {
  backgroundColor: 'black',
  color: 'white',
  border: 'none',
  marginTop: '20px',
  padding: '15px 0',
  cursor: 'pointer',
};

const AnimationGuitar = () => {
  const [inputText, setInputText] = useState('');
  const [isError, setIsError] = useState(false);

  const params = {
    src: animationData,
    autoplay: true,
    stateMachines: STATE_MACHINE_NAME,
  };

  const { RiveComponent, rive } = useRive(params, {
    // If true, then the canvas will resize based on the height of the artboard. Defaults to false
    fitCanvasToArtboardHeight: true,
  });

  /*
   * @param {object} rive.
   * @param {string} stateMachineName: name Name of the state machine.
   * @param {string} inputName: Name of the state machine input
   */
  const stateRage = useStateMachineInput(rive, STATE_MACHINE_NAME, INPUT_NAME);

  useEffect(() => {
    if (!rive) return;

    // @return {object} stateMachineName, inputName, ...
    console.log('Guitar:', rive.contents);
  }, [rive]);

  const handleClick = (e) => {
    e.preventDefault();

    if (!isError || !inputText) {
      return setIsError(true);
    }

    setInputText('');
    return (stateRage.value = !stateRage.value);
  };

  const handleInputChange = ({ target: { value } }) => setInputText(value);

  return (
    <>
      <RiveComponent
        style={{ height: 500, width: 500 }}
        onClick={handleClick}
      />
      <form
        style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}
      >
        <input
          style={inputStyles}
          type='text'
          placeholder='Are you Rock?'
          required
          value={inputText}
          onChange={handleInputChange}
        />
        <button style={buttonStyles} type='submit' onClick={handleClick}>
          Rock! 🤘
        </button>

        {isError && <span>Work on it better.</span>}
      </form>
    </>
  );
};

export default AnimationGuitar;
