import React from "react";
import styled from "styled-components";

function RoadToReactNotes() {
  return (
    <div className="w-2 font-red">
      <br />
      <h2 className="font-green">Road to React Notes</h2>
      <h2>Author</h2>
      <p>
        Robin Wieruch regularly wrote articles about web develomemtn on his
        website. He recieved great feedback from people learning from the
        articles. Currently, he is a self-employed developer helping companies
        in creating their MVPs, conducting workshops and cocde audits/reviews,
        and creating large-scale Javascript applications.
      </p>
      <div>https://www.robinwieruch.de/about</div>
      <br />

      <PageNumber>P. 11</PageNumber>
      <CodeLabel>Command Line</CodeLabel>
      <StyledCode>npx create-react-app hacker-stories</StyledCode>
      <CodeLabel>Command Line</CodeLabel>
      <StyledCode>cd hacker-stories</StyledCode>

      <PageNumber>P. 13</PageNumber>
      <CodeLabel>Command Line</CodeLabel>
      <div>#Runs the application in http://localhost:3000</div>
      <StyledCode>npm start</StyledCode>
      <div># Runs the tests</div>
      <StyledCode>npm test</StyledCode>
      <div>#Builds the application for production</div>
      <StyledCode>npm run build</StyledCode>
    </div>
  );
}

export default RoadToReactNotes;

const PageNumber = styled.div`
  display: block;
  font-size: 2rem;
  color: rgba(100, 0, 0, 0.6);
  border-bottom: 2px solid #333;
`;

const StyledCode = styled.code`
  display: block;
  padding: 5px 8px;
  background: #313131;
  color: white;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const CodeLabel = styled.div`
  display: block;
  font-size: 1.2rem;
  color: rgba(0, 0, 200, 0.8);
`;
