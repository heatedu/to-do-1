var ul=document.getElementById('list')
var li

var addbutton=document.getElementById('add')
addbutton.addEventListener('click',addItem)
var removebutton=document.getElementById('remove')
removebutton.addEventListener('click',removeItem)
var removeallbutton=document.getElementById('removeall')
removeallbutton.addEventListener('click',removeallitem)







function addItem()
{
    var input=document.getElementById('input')
    var item=input.value
    var textnode=document.createTextNode(item)
}
function removeItem()
{
    li=ul.children
    //console.log(li);
    for (let index = 0; index < li.length; index++) {
         while(li[index]&&li[index].children[0].checked)
          ul.removeChild(li[index])
      }
      
}
function removeallitem()
{
    var li1=ul.children
     //for (let index1 = 0; index1< li1.length; index1++)
     let i=0
     while(li1.length>0)
     {
        ul.removeChild(li1[i])
        
    }
}