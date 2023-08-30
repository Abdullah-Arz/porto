
import React, { useState } from 'react';
import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';

const Pagination = ({totalPosts, postsPerPage,setCurrentPage, currentPage}) => {

  const [count , setCount] = useState()
  let pages = []
  
  for (var i = 1 ; i<= Math.ceil(totalPosts/postsPerPage); i++){
    pages.push(i)
  }

  console.log('Pages ---- ', pages.length)

  const PageFunc = async(data) => {
    await setCount(data)
    await setCurrentPage(data)
  }

  const PreviousPage = async() => {
    
    if(count > 1){
      await setCount(count-1);
      await setCurrentPage(count-1);
      console.log('Prev Counter ---- ',count-1)
    }
  }

  const NextPage = async() => {
    if(count < pages.length){
    await setCount(count+1);
    await setCurrentPage(count+1);
    console.log('Next Counter ---- ',count+1);
    }
  }

  return (
    <nav aria-label='Page navigation example'>
      <MDBPagination className='mb-0'>
      <MDBPaginationItem style={{cursor:"pointer"}} onClick={()=>{PreviousPage()}}>
          <MDBPaginationLink>Previous</MDBPaginationLink>
        </MDBPaginationItem>
        {pages.map((page, index)=>{
          return(
            <MDBPaginationItem 
            key = {index} 
            onClick={()=>{PageFunc(page)}} 
            className={page == currentPage ? 'active' : ''}
            >
              <MDBPaginationLink style={{cursor:"pointer"}}>{page}</MDBPaginationLink>
            </MDBPaginationItem>
          )
        })
      }
      <MDBPaginationItem style={{cursor:"pointer"}} onClick={()=>{NextPage()}}>
          <MDBPaginationLink>Next</MDBPaginationLink>
        </MDBPaginationItem>
        {/* <MDBPaginationItem active>
          <MDBPaginationLink href='#'>1</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink href='#'>2</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink href='#'>3</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink href='#'>Next</MDBPaginationLink>
        </MDBPaginationItem> */}
      </MDBPagination>
    </nav>
  );
}

export default Pagination