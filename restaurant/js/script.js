let n =0;
    let product=[];
    function incNum(productId){
        
        let quantity=1;;
        let image = document.getElementsByClassName("card")[parseInt(productId)].getElementsByTagName("img")[0].src;
        console.log(image)
        let name = document.getElementsByClassName("card")[parseInt(productId)].getElementsByTagName("h4")[0].innerHTML;
        let price = document.getElementsByClassName("card")[parseInt(productId)].getElementsByTagName("span")[0].innerHTML;

                     let n = document.getElementById("itemnumber");
                    
                        if (product.includes(productId))
                        {
                         quantity++
                        }
                        else
                        {
                            
                        product.push(productId);
                         n.innerHTML=parseInt((n.innerHTML))+1;
                         document.getElementById("noitem").innerHTML=""
                        document.getElementById("cartitems").innerHTML+=`
                        <table cellpadding="20" border=1>
                            <th></th>
                            <th>Product</th>
                                <th>Price</th>
                            <tr>
                                <td class="imagescart"><img src="${image}" width="100px"></td>
                                <td class="name">${name}</td>
                                <td class="name">${price}</td>
                               
                            
                    </tr>
        </table>
        `;
                     }
                  


           
    }
    function decNum(productId){
        let n = document.getElementById("itemnumber");
        n.innerHTML=parseInt((n.innerHTML))-1;
        if(n.innerHTML==0){
            document.getElementById("cartitems").innerHTML=`
            <p>Your cart is empty</p>`;
        }
    }
    function check(){
        
        let s=document.getElementById("itemnumber").innerHTML;
        localStorage.setItem("itemsnum",s);
        let namearr=[];
        let pricearr = [];
        for(let i = 0;i<s;i++)
        {
            let name = document.getElementsByClassName("card")[parseInt(i)].getElementsByTagName("h4")[0].innerHTML;
            let price = document.getElementsByClassName("card")[parseInt(i)].getElementsByTagName("span")[0].innerHTML;
            namearr.push(name);
            pricearr.push(price);
            console.log();
        }
        localStorage.setItem("itemname",namearr);
        localStorage.setItem("itemprice",pricearr);
        window.location.href="checkout.html"
    }