//
//document.querySelector("#slides")
//.addEventListener("wheel", event=>{
//    if(event.deltaY>0){
 //       event.target.scrollBy(300, 0)
 //   }else{
 //       event.target.scrollBy(-300, 0)
 //   }
//})
//

const scrollWheel = event => {
    if(event.deltaY < 0){
        event.target.scrollBy(300, 0)
      }
      else{
        event.target.scrollBy(-300, 0)
      }
  }
  
  // document.querySelector("#slides")
  //   .addEventListener("wheel", scrollWheel)
  
  let count = 0
  setInterval(function(){
    count += 400
    if(count > 8000) count = 0
    document.querySelector("#slides").scrollTo(count, 0)
    console.log('moveu')
  }, 1500)