//Components in Components example
function GreyOne() {
     return <h3>Canyons bikes.</h3>
}
function RedOne() {
     return <h3>Cannondales bikes.</h3>
}
function PurpleOne() {
     return <h3>Mossos bikes.</h3>
}
function MyBikes3() {
     return (
          <>
          <h2>What is sorting of your favourite bikes?</h2>
          <GreyOne />
          <RedOne />
          <PurpleOne />
          </>
     )
}

export default MyBikes3;