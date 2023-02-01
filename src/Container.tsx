import styled from "styled-components";

// Create styled container component
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;

  /* 
  Even with using the responsive property in the options object for the chart,
  it was still not being responsive. When the window shrank down, the chart resized, 
  but when the window expanded again, it did not resize. Some simple styling for a fix 
  https://github.com/jtblin/angular-chart.js/issues/614
  */
  && canvas {
    width: 80% !important;
    height: 80% !important;
    margin: 3rem auto;
  }
`;
