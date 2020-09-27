import React, { useState, useEffect } from "react";
import "./App.css";
import claimData from "../data";
import UserDropdown from "./UserDropdown";

function App() {
  const [userList, setUserList] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  // state, setState: currentUser

  useEffect(() => {
    let newUserList = claimData.claims.map((claim) => {
      return claim.assignedTo;
    });
    newUserList = [...new Set(newUserList)];
    setUserList(newUserList);
  }, []);

  const calculateSlaExceeded = (updatedAt, status) => {
    const { slas } = claimData;
    let updatedTime = Date.parse(updatedAt);
    let current = Date.parse(new Date());
    let amountExceeded = (current - updatedTime) / 1000 / 60 / 60;
    let slaExceeded = 0;

    slas.map((sla) => {
      if (sla.status === status) {
        slaExceeded = amountExceeded - sla.hours;
      }
    });

    return slaExceeded.toFixed(2);
  };

  // const unsortedListWithSLA = () => {
  //   const { claims } = claimData;
  //   claims.map((claim) => {
  //     claim.SlaExceeded = calculateSlaExceeded(claim.updatedAt, claim.status);
  //   });
  //   console.log(claims);
  //   return claims;
  // };

  // const sortedListWithSLA = () => {
  //   return unsortedListWithSLA().sort(
  //     (a, b) => parseFloat(b.SlaExceeded) - parseFloat(a.SlaExceeded)
  //   );
  // };

  const sortListWithSLA = () => {
    const { claims } = claimData;
    claims.map((claim) => {
      claim.SlaExceeded = calculateSlaExceeded(claim.updatedAt, claim.status);
    });
    let sortedList = claims.sort(
      (a, b) => parseFloat(b.SlaExceeded) - parseFloat(a.SlaExceeded)
    );
    return sortedList;
  };

  const claimsList = () => {
    if (!currentUser) {
      return sortListWithSLA();
    } else {
      return sortListWithSLA().filter((claim) => {
        return claim.assignedTo === currentUser;
      });
    }
  };

  return (
    <div className="App">
      <UserDropdown
        userData={{ userList }}
        userState={{ currentUser, setCurrentUser }}
      />
      {/* Userdropdown, will take currentAssessor state and set state */}
      <h1>Dashboard</h1>

      <div className="claims">
        <table>
          <tr>
            <th>ID</th>
            <th>claimant</th>
            <th>assignedTo</th>
            <th>status</th>
            <th>createdAt</th>
            <th>updatedAt</th>
            <th>SLA Exceeded</th>
          </tr>
          {claimsList().map((claim) => (
            <tr>
              <td>{claim.id}</td>
              <td>{claim.claimant}</td>
              <td>{claim.assignedTo}</td>
              <td>{claim.status}</td>
              <td>{claim.createdAt}</td>
              <td>{claim.updatedAt}</td>
              <td>{claim.SlaExceeded}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default App;
