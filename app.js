
// function sum(x){
//     for(let i=1;i<=x;i++){
//         console.log(i)
//     }
// }
// sum(5)


const input=document.querySelector('#input')
const btn=document.querySelector('#btn')
const sum=document.querySelector('.sum')

btn.addEventListener('click',()=>{
    
   
    const InpuValue=input.value;

        const h1=document.createElement('h1')

        for(let i=0;i<=InpuValue;i++){
           console.log(h1.innerHTML=i)
        }

    sum.appendChild(h1)

    
})