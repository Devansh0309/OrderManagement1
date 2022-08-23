const executeOrder=async ()=>{
    let orderId=document.getElementById('order-id-input').value
    if(orderId){
        document.getElementById('order-status').innerText="Order status for ID: "+orderId
        document.getElementById('order-id-input').value=''
        try {
            commonPromise('first',0) 
            await commonPromise('second',2000)
            await commonPromise("third",10000)
            await commonPromise('fourth',5000)
            await commonPromise('fifth',12000)
            await commonPromise('sixth',5000)
            await commonPromise('seventh',15000)
            await commonPromise('eighth',8000)
            await commonPromise('nineth',2000)
            commonPromise('tenth',0)
        } catch (err) {
            alert(err)
        }
    }
    else{
        alert('Please enter an order ID')
    }
    
}
const commonPromise=(step,time)=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(step).classList.remove('btn-light')
            document.getElementById(step).classList.add('btn-success')
            resolve()
        }, time)
    }) 
}