document.addEventListener('DOMContentLoaded',()=>{
let button = document.querySelector('.add-to-cart')


button.addEventListener('click',(e)=>{
    let dynamic_title = e.target.parentElement.children[0].innerHTML
    let price = e.target.parentElement.children[0].nextElementSibling.textContent
    let j = price.slice(5);
    let k = j.indexOf('$');
    let f = j.slice(k)
    let rela_price = f
    // console.log(f)
    // console.log(dynamic_title)


let im = e.target.parentElement.previousElementSibling
let bg_img = window.getComputedStyle(im).getPropertyValue('background-image')
let change_im = bg_img.indexOf('img');
// console.log(bg_img)
let tables = document.querySelector('.table')
let change_coll = bg_img.slice(change_im);
// console.log(change_coll)
let find_quote = change_coll.indexOf('"')
let final_img = change_coll.slice(0,find_quote)

let bodys = document.createElement('tbody');
let tr = document.createElement('tr');
let td = document.createElement('td');
let td2 = document.createElement('td');
let td3 = document.createElement('td');
let img = document.createElement('img');
img.src = final_img;
// console.log(img)
img.style.cssText = "height:100px; width:100px;"
td.appendChild(img);
td2.append(rela_price)
td3.append(dynamic_title)
tr.append(td)
tr.append(td3)
tr.append(td2)
bodys.append(tr)

tables.appendChild(bodys)
})







let close = document.querySelector('.close');
let open = document.querySelector('.open');
let cart_holder = document.querySelector('.cart-holder');
// let table = document.querySelector('')

cart_holder.classList.add('pull-in');
close.classList.add('display');

open.addEventListener('click',()=>{

cart_holder.classList.remove('pull-in')
open.classList.add('display');
close.classList.remove('display');

})

close.addEventListener('click',()=>{

cart_holder.classList.add('pull-in')
open.classList.remove('display');
close.classList.add('display');

})


    
})
