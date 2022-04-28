import { render, screen } from '@testing-library/react';
import StatusAlert from './StatusAlert'

describe('Test status alert for server', () => {
  const testThis = {
    props : {
      openCloseAlert: true, 
      handleCloseAlert: false,
      title: 'Test status alert',
      status: true 
   }
  }
  
  render(<StatusAlert {...testThis.props}/>);
 
  test('render status alert',()=>{
    const statusAlert = screen.getByRole('alert');
    const alertHeader = screen.getByTestId('alertHeading')
    const alertButton = screen.getByTestId('alertButton')
    const alertTitle  = screen.getByTestId('alertTitle')
    
    expect(statusAlert).toBeInTheDocument();
    expect(alertHeader).toHaveTextContent("How's it going?");
    expect(alertTitle).toHaveTextContent(testThis.props.title);
    expect(alertButton).toBeInTheDocument();
  });
});
