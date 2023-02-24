import Content from "../Content/Content";
import Sidebar from "../Sidebar/Sidebar";
import { ContainerDiv } from "./Container.styled";

function Container(){
    return (
        <ContainerDiv>
            <Sidebar/>
            <Content/>
        </ContainerDiv>
    )
}
export default Container