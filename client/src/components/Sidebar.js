import React, { useState } from 'react';
import { Tab, Nav } from 'react-bootstrap';

const CONVERSATIONS_KEY = 'conversations';
const CONTACTS_KEY = 'contacs';

const Sidebar = ({ id }) => {
  const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);

  return (
    <div style={{ width: '250px' }} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey="conversations">Conversation</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="contacts">Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
      </Tab.Container>
    </div>
  );
};

export default Sidebar;
