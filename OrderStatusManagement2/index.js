let obj={}
let ID=[]
let steps=['Order placed','Chef received the order and started preparing','You have 8 seconds to cancel order','Pizza sauce added','First layer of cheeze added','Toppings added','Second layer of cheeze added','Pizza baked','Oregano added and packed','Package received at counter']
let orderCardsWrapper=document.getElementById('order-cards-wrapper')
let click=false;
const executeOrder=async ()=>{
    let orderId=document.getElementById('order-id-input').value
    
    if(orderId && !ID.includes(orderId)){
        let colDiv=document.createElement('div')
        let cardDiv=document.createElement('div')
        let cardHeader=document.createElement('div')
        let cardBody=document.createElement('div')
        let cardText=document.createElement('p')
        let orderStatusPara=document.createElement('p')
        let orderStatus=document.createElement('span')
        let orderCancel=document.createElement('a')
        let cardFooter=document.createElement('div')

        colDiv.classList='col-md-3 order-status-card'
        cardDiv.classList='card text-center'
        cardHeader.classList='card-header'
        cardBody.className='card-body'
        cardText.className='card-text'
        orderStatusPara.className='card-text'
        orderStatus.classList='badge rounded-pill bg-success'
        orderCancel.classList='btn btn-danger btn-sm'
        cardFooter.className='card-footer'
        orderCancel.setAttribute('href','#')


        cardHeader.innerHTML=`Order ID: <b>${orderId}</b>`
        cardText.innerHTML='Medium Size Pizza - 2 Nos <br> Bill Amount: <b>$22</b>'
        orderCancel.innerText='Cancel'
        cardFooter.innerText=Date()


        cardDiv.appendChild(cardHeader)
        cardDiv.appendChild(cardBody)
        cardDiv.appendChild(cardFooter)
        colDiv.appendChild(cardDiv)
        orderCardsWrapper.appendChild(colDiv)
        cardBody.appendChild(cardText)
        cardBody.appendChild(orderStatusPara)
        cardBody.appendChild(orderCancel)
        orderStatusPara.appendChild(orderStatus)

        ID.push(orderId)
        obj[orderId]=[]
        document.getElementById('order-id-input').value=''
        
        orderCancel.addEventListener('click',function(){
            let index=ID.indexOf(orderId)
            ID.splice(index,1)
            click=true;
            reset(orderStatus,orderCancel,orderId)
            // orderCardsWrapper.removeChild(colDiv)
        })
        try {
            commonPromise(0,0,orderStatus,orderId) 
            await commonPromise(1,2000,orderStatus,orderId)
            await commonPromise(2,1000,orderStatus,orderId)
            await commonPromise(3,9000,orderStatus,orderId)
            await commonPromise(4,5000,orderStatus,orderId)
            await commonPromise(5,12000,orderStatus,orderId)
            await commonPromise(6,5000,orderStatus,orderId)
            await commonPromise(7,15000,orderStatus,orderId)
            await commonPromise(8,8000,orderStatus,orderId)
            await commonPromise(9,2000,orderStatus,orderId)
        } catch (err) {
            alert(err)
        }
    }
    else{
        alert('Please enter an order ID again')
    }
    
}
const commonPromise=(step,time,ele,id)=>{
    return new Promise((resolve, reject) => {
        if(obj[id]==undefined){
            ele.innerText='Order Canceled'

        }
        else{
            obj[id].push([setTimeout(() => {
                ele.innerText=steps[step]
                resolve()
            }, time),step])
        }
        
        console.log(JSON.stringify(obj))
    })
}

const reset=(ele,cancel,id)=>{
    if(obj[id].length<=4 && click==true){
        obj[id].forEach((element)=>{
            clearTimeout(element)
        })
        ele.innerText='Order Canceled'
        click=false;
        cancel.style.pointerEvents='none'
        
       
    //    console.log(obj[id])
       delete obj[id]
    //    console.log(obj)
       
    }
    else if(click==true){
        cancel.style.pointerEvents='none'
        alert('Order cannot be Cancelled')
        click=false;
    }
}