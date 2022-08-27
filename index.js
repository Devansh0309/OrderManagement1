let arr=[]
let ID=[]
const executeOrder=async ()=>{
    let orderId=document.getElementById('order-id-input').value
    if(orderId && !ID.includes(orderId)){
        ID.push(orderId)
        document.getElementById('order-status').innerText="Order status for ID: "+orderId
        document.getElementById('order-id-input').value=''
        document.getElementById('button-addon2').style.pointerEvents='none'
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
        document.getElementById('button-addon2').style.pointerEvents='all'
    }
    else{
        alert('Please renter an order ID')
    }
    
}
const commonPromise=(step,time)=>{
    return new Promise((resolve, reject) => {
        arr.push([setTimeout(() => {
            document.getElementById(step).classList.remove('btn-light')
            document.getElementById(step).classList.add('btn-success')
            resolve()
        }, time),step])
    }) 
}
const reset=()=>{
    document.getElementById('order-status').innerText=''
    if(arr.length<=3){
        arr.forEach((ele)=>{
            clearTimeout(ele[0])
            document.getElementById(ele[1]).className='btn btn-lg order-status-block btn-light'
        })
        document.getElementById('button-addon2').style.pointerEvents='all'
        ID.splice(ID.indexOf(orderId),1)
        arr=[]
    }
    else{
        alert("Cannot cancel or reset")
    }
    
}