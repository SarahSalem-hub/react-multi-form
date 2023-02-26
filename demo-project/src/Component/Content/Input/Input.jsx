import React from 'react'
import {InputDiv, ErrorMessage, InputStyled, Label, LabelContainer } from './Input.styled'

const Input = (props) => {
  const {inputType, placeHolder,label} = props;
  return (
    <InputDiv>
        <LabelContainer>
            <Label>{label}</Label>
            <ErrorMessage>This field is required</ErrorMessage>
        </LabelContainer>
       <InputStyled type={inputType} placeholder={placeHolder}/>
    </InputDiv>
  )
}

export default Input

{/* <Label>Name</Label>
            <ErrorMessage>please fill this field</ErrorMessage> */}