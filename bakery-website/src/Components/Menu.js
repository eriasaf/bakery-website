import React, { useState, useEffect } from 'react';
import {firebase} from './firebase';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import Card from 'react-bootstrap/Card'; // Import the Bootstrap Card component

//import menuData from './menuData.json'; // Import the JSON file
function Menu () {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const snapshot = await firebase.firestore().collection('menuItems').get();
      const items = snapshot.docs.map(doc => doc.data());
      setMenuItems(items);
    };

    fetchMenuItems();
  }, []);
/*function Menu() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    setMenuItems(menuData);
  }, []);*/

  return (
    <section className="menu-section">
      <div className="menu-container">
        <h2>our products</h2>
        <div className="menu-items">
          {menuItems.map(item => (
            <Card key={item.name} className="item-card">
              <Card.Img variant="top" src={item.image} alt={item.name} />
              
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;
