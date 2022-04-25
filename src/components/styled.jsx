import styled from "styled-components"

export const Nav=styled.div`
    width:98%;
    height:4rem;
    display:flex;
    justify-content:space-around;
    align-items:center;
    border:1px solid red;
    margin:10px;
`
export const Cards=styled.div`
    width:100%;
    display:grid;
    grid-gap:10px;
    grid-template-columns:repeat(7,1fr);
    &>div{
        height:14rem;
        text-align:center;
        border:1px solid green;
        cursor: pointer;
    
        &>img{
            padding:5px;
        }
    }

`