let makePayment = function(isValid) {

   let pr = new Promise(function (resolve, reject) {
      if(isValid){
         setTimeout(() => {
            resolve(" Promise Resolved ...!");
         }, 5000);
      }else{
         error = new Error("Promise failed or rejected...!")
         reject(error);
      }
      
   });

   return pr;
}





// console.log(makePayment);
makePayment(false)
.then(function (response) {
   console.log(response);
   return new Promise((resolve , reject) => {
      setTimeout(() => {
         resolve(response)
      }, 5000);
   }
);  
})
.then((res)=>{
   console.log(res);
})
.catch(() => {console.log(error.message)});
// console.log(makePayment);