import { Button } from '@mui/material';
import { menuItems } from '../menuItems';
import MenuItems from './MenuItems';
import Web3 from 'web3';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import menuItemsAdmin from '../menuItemsAdmin';
import menuItemsCommittee from '../menuItemsCommittee';

const Navbar = ({user}) => {
  //const { state } = useLocation();  
  //const { user } = state;

  const getMenuItems = () => {
    if(user.type === 'admin') {
      return menuItemsAdmin;
    } else if(user.type === 'committee') {
      return menuItemsCommittee;   
    } else {
      return menuItems;
    }
  }
/*const [connectedAccount, setConnectedAccount] = useState('');
const [connected, setConnected] = useState(false);
  async function connectWallet() {
    try {
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log("Wallet connected");
            const accounts = await web3.eth.getAccounts()
            // connectedAccount = accounts[0];
            setConnectedAccount(accounts[0]);
            console.log(connectedAccount);
            setConnected(true);
        }
    } catch (error) {
        console.error("Error connecting wallet:", error);
    }
}
useEffect(() => {
  console.log(connectedAccount);
}, [connectedAccount]);
*/
  return (
    <nav>
      <ul className="menus">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return (
            
            <MenuItems
              items={menu}
              key={index}
              depthLevel={depthLevel}
            />
            
          );
        })}
        {/* < Button onClick={connectWallet}>Connect Wallet</Button>  */}
      </ul>
    </nav>
  );
};

export default Navbar;