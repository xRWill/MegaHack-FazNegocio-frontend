import styled from 'styled-components';

export const Container = styled.div`
margin: 0 auto;
max-width: 940px;



h1 {
  margin-top: 15px;
}


`;

export const CategoryList = styled.div`
display: flex;
flex-direction: column;




`;

export const Category = styled.div`

margin-top: 25px;

`;

export const ItemList = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
flex-wrap: wrap;
padding: 10px;

div {
  width: 170px;
  background: #f1f1f1;
  border-radius: 3px;
  padding: 10px;
  margin-bottom: 10px;


 img{
   max-width: 150px;
 }
 span{
   margin: 5px;
  }
}

`;
