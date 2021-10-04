import React from "react";
import { useMediaQuery } from "react-responsive";
import { Container, Dropdown, Icon, Input, Label, Menu } from "semantic-ui-react";

function NavigationBar() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1000px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });

  return (
    <div>
      <Menu style={{borderRadius:0, height:"70px"}} inverted>
        <Container>
          {isDesktop&& (
            <div style={{ display: "flex" }}>
              <Menu.Item name="editorials">Navibar Element</Menu.Item>
              <Menu.Item name="editorials">Navibar Element</Menu.Item>        
              <Menu.Item name="editorials">Navibar Element</Menu.Item>
            </div>
          )}
          {isMobile && (
              <Menu.Item>
              <Dropdown pointing="top left" multiple icon="bars" style={{ color: "white" }}>
                
                <Dropdown.Menu>
                  <Icon name="caret square down outline"></Icon>
                  <Dropdown.Menu scrolling>
                    <Dropdown.Item>Navibar Element</Dropdown.Item>
                    <Dropdown.Item>Navibar Element</Dropdown.Item>
                    <Dropdown.Item>Navibar Element</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Menu>
              </Dropdown>
              </Menu.Item>
          )}

          <Menu.Item position="right">
            <Input
              icon={{ name: "search", circular: true, link: true }}
              placeholder="Search..."
            />
          </Menu.Item>

          <Menu.Item position="right">
          <Dropdown pointing="top right" icon="user" text={isDesktop?'Example Customer':''} multiple style={{ color: "white" }}>
                <Dropdown.Menu >
                  <Dropdown.Menu scrolling>
                    <Dropdown.Item>My Profile <Icon position="right" color="purple" name='settings'  /></Dropdown.Item>
                    <Dropdown.Item>Go To Cart <Icon position="right" color="green"  name='shopping basket'  />7</Dropdown.Item>
                    <Dropdown.Item>Log Out <Icon color="red" name="log out"></Icon></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Menu>
              </Dropdown>
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  );
}

export default NavigationBar;
