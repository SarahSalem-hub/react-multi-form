import Button from "./Button/Button";
import { ContentDiv, FormDiv, Header, Instruction } from "./Content.styled";
import Input from "./Input/Input";

function Content(){
    return (
        <ContentDiv>
           <div>
           <Header>Personal Info</Header>
            <Instruction>Please provide your name, email address, and phone number.</Instruction>
            <FormDiv>
                <Input inputType="text" placeHolder="Enter your name.." label="Name"/>
                <Input inputType="email" placeHolder="Enter your email.." label="Email Address"/>
                <Input inputType="number" placeHolder="e.g.+1 234 567 890" label="Phone Number"/>
            </FormDiv>
           </div>
           <div>
           <Button/>
           </div>
        </ContentDiv>
    )
}
export default Content
