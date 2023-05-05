import { Sidenav, Nav } from "rsuite";
import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import MagicIcon from "@rsuite/icons/legacy/Magic";
import GearCircleIcon from "@rsuite/icons/legacy/GearCircle";
import TaskIcon from "@rsuite/icons/Task";
import React from "react";
import "../App.css";
export default function Sidebar() {
  const [expanded, setExpanded] = React.useState(true);
  const [activeKey, setActiveKey] = React.useState("1");
  return (
    <div style={{ width: 240 }}>
      <hr />
      <Sidenav expanded={expanded} defaultOpenKeys={["3", "4"]}>
        <Sidenav.Body>
          <Nav activeKey={activeKey} onSelect={setActiveKey}>
            <Nav.Item eventKey="1" icon={<DashboardIcon />}>
              Dashboard
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<TaskIcon />}>
              New Task
            </Nav.Item>
            <Nav.Menu
              placement="rightStart"
              eventKey="3"
              title="Teams"
              icon={<MagicIcon />}
            >
              <Nav.Item eventKey="3-1">Web Dev</Nav.Item>
              <Nav.Item eventKey="3-2">UX/UI</Nav.Item>
              <Nav.Item eventKey="3-3">SEO</Nav.Item>
              <Nav.Item eventKey="3-4">Marketing</Nav.Item>
            </Nav.Menu>
            <Nav.Menu
              placement="rightStart"
              eventKey="4"
              title="Settings"
              icon={<GearCircleIcon />}
            >
              <Nav.Item eventKey="4-1">Edit User Info</Nav.Item>
              <Nav.Item eventKey="4-2">Logout</Nav.Item>
              <Nav.Menu eventKey="4-5" title="Custom Action">
                <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
                <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
              </Nav.Menu>
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
        <Sidenav.Toggle
          expanded={expanded}
          onToggle={(expanded) => setExpanded(expanded)}
        />
      </Sidenav>
    </div>
  );
}
