import {shallow} from 'enzyme';
import * as React from "react";
import {GateType, IGateShape} from "../../interfaces";
import Stage from './stage';


const gates: IGateShape[] = [
    {
      dx: 0,
      dy: 0,
      height: 50,
      label: {
        annotation: 'n/a',
        offsetX: 10,
        offsetY: 10,
        text: 'Test Gate 1',
      },
      name: 'Test Gate 1',
      type: GateType.Rectangle,
      uuid: '123456',
      width: 100,
      x: 100,
      y: 50,
    }
];

it('renders content', () => {
  const stage = shallow(<Stage gates={gates}/>);
  console.log(stage.debug());
  expect(stage.find('Gate').length).toBeGreaterThanOrEqual(1);
});