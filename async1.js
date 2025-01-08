//Promise
// assurance or guarantee that something will happen in the future.
// object holds the future value.

/* Example 1: resolve & reject*/
// const promise = new Promise((resolve, reject)=>{
//   const allWentWell = true;

//   if(allWentWell){
//     resolve('All things went well')
//   }else {
//     reject ('Oops, something went wrong.')
//   }
// })

// console.log(promise)


/* Example 2: pending, resolve reject*/
// const promise = new Promise((resolve, reject)=>{
//   const randomNumber = Math.floor(Math.random * 10);

//   setTimeout(()=>{
//     if(randomNumber < 5){
//       resolve('All things went well')
//     }else{
//       reject('Ooops, something went wrong!')
//     }
//   }, 3000)
// })

// promise.then((value)=>{
//   console.log(value)
// }).catch((error)=>{
//   console.log(error)
// })


// const promise = new Promise((resolve, reject)=>{
//   resolve('Naresolved tong promise na to')
// })
// const promiseTwo = new Promise((resolve, reject)=>{
//   resolve('Syempre Resolved din tong promise0')
// })

// const promiseThree = new Promise((resolve, reject)=>{
//   reject('Sorry, rejected to masyado ka na natutuwa')
// })

// promise
// .then((value)=>{
//   console.log(value)
//   return promiseTwo
// })
// .then((value)=>{
//   console.log(value)
//   return promiseThree
// })
// .catch((error)=>{
//   console.log(error)
// })


// //Consuming Several Promises
// const promiseOne = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve('Promise One Solved!')
//   }, 2000)
// })

// const promiseTwo = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve('Promise Two Solved!')
//   }, 2000)
// })

// Promise.all([promiseOne, promiseTwo])
// .then((data) => console.log(data[0], data[1]))
// .catch((error) =>  console.log(error))


// Promises / Async-Await
const preHeatOven = () =>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      const preHeatOven = true;

      if(preHeatOven) {
        resolve("Preheat oven to 180deg")
      } else{
        reject ("Failed Task")
      }
    }, 1000)
  })
};
const addSugarAndChocoChips = () =>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      const addChoco = true;

      if(addChoco) {
        resolve("Place butter and chocolate chips, stir until melted and smooth")
      } else{
        reject ("Failed Task")
      }
    }, 1000)
  })
};
const addFlourCoccoaAndSalt = () =>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      const addSaltFlour = false;

      if(addSaltFlour) {
        resolve("Add Flour, coco and salt and stir until smooth")
      } else{
        reject ("Failed Task")
      }
    }, 1000)
  })
};
const bakeMixture = () =>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      const bakeMixture = true;

      if(bakeMixture) {
        resolve("Bake for 24mins for really gooeey center")
      } else{
        reject ("Failed Task")
      }
    }, 1000)
  })
};

const bakeChocolateBrownies = async () =>{
    try {
      const taskOne = await preHeatOven();
      console.log(taskOne)
    
      const taskTwo = await addSugarAndChocoChips();
      console.log(taskTwo)
    
      const taskThree = await addFlourCoccoaAndSalt();
      console.log(taskThree)
    
      const taskFour = await bakeMixture();
      console.log(taskFour)
      
      console.log("Enjoy Your perfect Chocolate Brownies")
    }catch(error){
      console.log(error)
    }
}

bakeChocolateBrownies();


// Async / Await
// function getFood() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Your food is ready!");
//     }, 2000); // Simulating 2 seconds to prepare the food
//   });
// }

// async function orderFood() {
//   console.log("Order placed!");
  
//   const food = await getFood(); // Wait for the food to be ready
//   console.log(food); // Eat the food
//   console.log("Done eating!");
// }

// orderFood();




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


// //Asynchronous Programming:
// // 2 or more task at a time.
// const showMessage = (callback)=>{
//   console.log(callback);
// }

// const firstMessage = (callback)=>{
//   setTimeout(()=>{
//     showMessage('First Message ko');
//     callback();
//   }, 2000)
// }

// const secondMessage = ()=>{
//   showMessage(('Second Message ko!'));
// }

// firstMessage(secondMessage);

