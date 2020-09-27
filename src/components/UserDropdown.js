import React, { useEffect } from "react";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

const menu = (userList, setCurrentUser) => {
  function handleMenuClick(e) {
    setCurrentUser(e.item.node.innerText);
  }

  return (
    <Menu onClick={handleMenuClick}>
      {userList.map((user, i) => (
        <Menu.Item key={i} icon={<UserOutlined />}>
          {user}
        </Menu.Item>
      ))}
    </Menu>
  );
};

const UserDropdown = (props) => {
  const { userList } = props.userData;
  const { currentUser, setCurrentUser } = props.userState;
  //   useEffect(() => {
  //     const initialUser = userList[0];
  //     setCurrentUser(initialUser);
  //   }, []);
  // in props.something.currentAssessor
  // whichever is the first user in the dropdown list, make it currentAssessor in parent state
  // on useEffect first render on this component, setCurrentAssessor to first one in list.
  // After, whenever a user from dropdown button is clicked, this should setCurrentAssessor from parent state

  return (
    <Dropdown overlay={menu(userList, setCurrentUser)}>
      <Button>
        {currentUser ? currentUser : "User List"} <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default UserDropdown;
