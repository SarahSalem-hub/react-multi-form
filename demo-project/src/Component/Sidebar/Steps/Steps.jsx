import React from 'react'
import { DescriptionDiv, StepDiv, StepNum, StepsDiv, StepDesNum, StepDesLevel } from './Steps.styled'


function Steps (){
  return (
    <StepsDiv>
        <StepDiv>
            <StepNum>1</StepNum>
           <DescriptionDiv>
                <StepDesNum> STEP 1</StepDesNum>
                <StepDesLevel>YOUR INFO</StepDesLevel>
           </DescriptionDiv>


        </StepDiv>
        <StepDiv>
            <StepNum>2</StepNum>
            <DescriptionDiv>
                <StepDesNum>STEP 2</StepDesNum>
                <StepDesLevel>SELECT PLAN</StepDesLevel>
           </DescriptionDiv>
        </StepDiv>
        <StepDiv>
            <StepNum>3</StepNum>
            <DescriptionDiv>
                <StepDesNum>STEP 3</StepDesNum>
                <StepDesLevel>ADD-ONS</StepDesLevel>
           </DescriptionDiv>
        </StepDiv>
        <StepDiv>
            <StepNum>4</StepNum>
            <DescriptionDiv>
                <StepDesNum>STEP 4</StepDesNum>
                <StepDesLevel>SUMMARY</StepDesLevel>
           </DescriptionDiv>
        </StepDiv>
    </StepsDiv>
  )
}

export default Steps