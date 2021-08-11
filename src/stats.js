import React from "react";

const Stats = ({ base }) => {
  return (
    <div className="base">
      <div>HP: {base.HP}</div>
      <div>Attack: {base.Attack}</div>
      <div>Defence: {base.Defence}</div>
      <div>SP Attack: {base.SpAttack}</div>
      <div>SP Defence: {base.SpDefence}</div>
      <div>Speed: {base.Speed}</div>
    </div>
  );
};

export default Stats;
