import React from 'react'
import styled from 'styled-components'

function DummyDetail() {
    return (
        <Container>
            <Bacground>
             <img src="images/detail.jpg" alt="" />
            </Bacground> 
            <ImageTitle>
            <img src="/images/viewers-disney.png" alt="" />
            </ImageTitle> 
            <Controls>
                        <Player>
                            <img 
                            src="/images/play-icon-black.png" 
                            alt=""/>
                            <span>Play</span>
                        </Player>
                        <Trailer>
                            <img 
                            src="/images/play-icon-white.png" 
                            alt=""/>
                            <span>Trailer</span>
                        </Trailer>
                        <AddList>
                            <span/>
                            <span/>
                        </AddList>
                        <GroupWatch>
                            <div>
                                <img src="/images/group-icon.png" alt=""/>
                            </div>
                        </GroupWatch>
                    </Controls>        
                    <SubTiltle> 2021 . 7m . family, fantasy, kids, animation</SubTiltle>
                    <Description>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ipsam sunt blanditiis atque officiis nulla libero optio officia, ipsum ex.</Description>
        </Container>
    ) 
}

export default DummyDetail
const Container = styled.div`
   min-height: calc(100vh - 70px);
   padding: 0 calc(3.5vw + 5px);
   position: relative;
`
const Bacground = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   z-index: -1;
   opacity: 0.8;
   img{
       width: 100%;
       height: 100%;
       object-fit: cover;
   }
`
const ImageTitle = styled.div`
   height: 30vh;
   min-height: 170px;
   width: 35vw;
   min-width: 200px;
   img{
       width: 100%;
       height: 100%;
       object-fit: contain;
   }
`
const Controls= styled.div`
    align-items:center;
    display:flex;
    flex-flow:row nowrap;
    margin:0px 24px;
    min-height:56px;

`;

const Player = styled.button`
    font-size:15px;
    margin:0px 22px 0px 0px;
    padding:0px 24px;
    height:56px;
    border-radius:4px;
    cursor: pointer;
    display:flex;
    align-items:center;
    justify-content:center;
    letter-spacing:1.8px;
    text-align:center;
    text-transform:uppercase;
    background:rgb(249,249,249);
    border:none;
    color:rgb(0,0,0)

    img{
        width:32px;

    }

    &:hover{
        background:rgb(198,198,198);
    }

    @media (max-width:768px){
        height:45px;
        padding:0px 12px;
        font-size:12px;
        margin:0px 10px 0px 0px;

        img{
            width:25px;
        }
    }

`;

const Trailer = styled(Player)`
    background:rgba(0,0,0,0.3);
    border:1px solid rgb(249,249,249);
    color:rgb(249,249,249);
    `;

const AddList = styled.div`
    margin-right:16px;
    height:44px;
    width:44px;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:rgba(0,0,0,0.6);
    border-radius:50%;
    border: 2px solid white;
    cursor:pointer;


    span{
        background-color:rgb(249,249,249);
        display:inline-block;
    

    &:first-child{
        height:2px;    
        transform:translate(1px,0px) rotate(0deg);            
        width:16px;

    }

    &:nth-child(2){
        height:16px;
        transform:translateX(-8px) rotate(0deg);
        width:2px;

    }
}

`;

const GroupWatch = styled.div`
    height:44px;
    width:44px;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    background:white;

    div{
        height:40px;
        width:40px;
        background:rgb(0,0,0);
        border-radius:50%;

        img{
            width:100%;
        }

    }
`;
const SubTiltle= styled.div`
    color:rgb(249,249,249);
    font-size:15px;
    min-height:20px;
    padding:20px 0px;
    margin:0px 24px;
`;

const Description = styled.div`
    line-height:1.4;
    font-size:20px;
    padding:16px 0px;
    color:rgb(249,249,249);
    margin:0px 24px;
    max-width: 50%;

`;
