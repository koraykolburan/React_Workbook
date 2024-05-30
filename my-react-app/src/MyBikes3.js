//Components in Components example
function GreyOne() {
     return <u>Canyons bikes.  <br /></u>
}
function RedOne() {
     return <u>Cannondales bikes.  <br /></u>
}
function PurpleOne() {
     return <u>Mossos bikes.  <br /></u>
}
function MyBikes3() {
     return (
          <>
          <h4>What is sorting of your favourite bikes?</h4>
          <GreyOne />
          <RedOne />
          <PurpleOne />
          </>
     )
}

export default MyBikes3;