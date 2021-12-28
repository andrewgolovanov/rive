import React, { useEffect } from 'react';
import { useRive, useStateMachineInput } from 'rive-react';

import animationData from './data/animation.riv';

const STATE_MACHINE_NAME = 'State Machine';
const INPUT_NAME = 'Level';

const AnimationWater = () => {
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
  const stateRange = useStateMachineInput(rive, STATE_MACHINE_NAME, INPUT_NAME);

  useEffect(() => {
    if (!rive) return;

    // @return {object} stateMachineName, inputName, ...
    console.log('Water:', rive.contents);
  }, [rive]);

  const handleChange = ({ target: { value } }) => (stateRange.value = value);

  return (
    <div
      style={{ marginTop: '100px', marginBottom: '100px', textAlign: 'center' }}
    >
      <RiveComponent style={{ width: 'calc(100vw - 300px)' }} />
      <input type='range' onChange={handleChange} defaultValue={0} />
    </div>
  );
};

export default AnimationWater;
