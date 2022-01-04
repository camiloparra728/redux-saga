import { Matcher, render,screen } from '@testing-library/react';
import detail from '../../../test/mocks/detail';
import "@testing-library/jest-dom";
import DetailComponent from './detail';

const renderComponent = () => render(<DetailComponent {...detail as any}/>);
   
test('DetailComponent', () => {
  renderComponent();
    it('paint name crypto coin BTC', ()=>{
      
      let a = /bitcoin/i;
      expect(screen.getByText(a)).toBeInTheDocument();
    })
  
});