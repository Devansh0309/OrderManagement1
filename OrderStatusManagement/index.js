let counter=0;//to count order-status cards
let arr=[];
const executeOrder=async ()=>{
    let orderId=document.getElementById('order-id-input').value
    if(orderId){
        counter++;
        let card=document.createElement('div')
        card.className='order-status'
        card.innerHTML=`<h3 class="card-title">${"Order ID: "+orderId}</h3><p>Medium size pizza <br>Bill Amount: $22 <br> <h4 class="order-status-step"></h4> <br> <h5></h5></p>`
        document.getElementsByClassName('order-cards')[0].appendChild(card)
        document.getElementById('order-id-input').value=''
        try {
            console.log(counter)
            commonPromise('first',0,counter) 
            await commonPromise('second',2000,counter)
            await commonPromise("third",10000,counter)
            await commonPromise('fourth',5000,counter)
            await commonPromise('fifth',12000,counter)
            await commonPromise('sixth',5000,counter)
            await commonPromise('seventh',15000,counter)
            await commonPromise('eighth',8000,counter)
            await commonPromise('nineth',2000,counter)
            commonPromise('tenth',0,counter)
        } catch (err) {
            alert(err)
        }
    }
    else{
        alert('Please enter an order ID')
    }
}
const commonPromise=(step,time,counter)=>{
    return new Promise((resolve, reject) => {
        arr.push([setTimeout(() => {
            // console.log(counter)
            document.getElementsByClassName("order-status-step")[counter-1].innerText=step
            resolve()
        }, time),step])
    }) 
}
// const reset=()=>{
//     document.getElementById('order-status').innerText=''
//     arr.forEach((ele)=>{
//         clearTimeout(ele[0])
//         document.getElementById(ele[1]).className='btn btn-lg order-status-block btn-light'
//     })
//     document.getElementById('button-addon2').style.pointerEvents='all'
// }