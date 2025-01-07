// function step1(callback) {
//   setTimeout(()=>{
//     console.log('Step 1');
//     callback();
//   },1000)
// }
// function step2(callback) {
//   setTimeout(()=>{
//     console.log('Step 2');
//     callback()
//   },2000)
// }
// function step3(callback) {
//   setTimeout(()=>{
//     console.log('Step 3');
//     callback()
//   },3000)
// }
// function step4(callback) {
//   setTimeout(()=>{
//     console.log('Step 4');
//     callback()
//   },3000)
// }
  

// //Callback Hell !
// step1(()=>{
//   step2(()=>{
//     step3(()=>{
//       step4(()=>{

//       })
//     })
//   });
// })


//Asynchronous Programming:
// 2 or more task at a time.
const showMessage = (callback)=>{
  console.log(callback);
}

const firstMessage = (callback)=>{
  setTimeout(()=>{
    showMessage('First Message ko');
    callback();
  }, 2000)
}

const secondMessage = ()=>{
  showMessage(('Second Message ko!'));
}

firstMessage(secondMessage);

//Promise
// assurance or guarantee that something will happen in the future.
// object holds the future value.