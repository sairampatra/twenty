const shoppingcart = ['milk','coffee','honey','tea']
shoppingcart.unshift('meat')
shoppingcart.push('sugar')
index=shoppingcart.indexOf('honey')
if(index != -1){
    shoppingcart.splice(index,1)
}
index=shoppingcart.indexOf('tea')
if(index != -1){
    shoppingcart[index]='green tea'
}
console.log(shoppingcart)

