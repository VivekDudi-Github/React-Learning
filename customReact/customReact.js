const mainRoot = document.querySelector("#root") ;


const reactElemnt = {
    type:'a' ,
    props:{
        href:'https://google.com' ,
        target:'_blank' ,
    } , 
    children : 'click to visit google'
}

function customRender (reactELemnt , container){
    // const domeElement = document.createElement
    // (reactELemnt.type)  ;
    // domeElement.innerHTML = reactELemnt.children ;
    // domeElement.setAttribute('href' , reactELemnt.props.href)
    // domeElement.setAttribute("target" , reactELemnt.props.target)
    // container.appendChild(domeElement)  

    const domeElement =document.createElement(reactELemnt.type)
    domeElement.innerHTML  = reactELemnt.children
    for (const prop in reactELemnt.props){ 
        if( prop === "children" )continue ; 
        domeElement.setAttribute(prop , reactELemnt.props[prop])
     }
     container.appendChild(domeElement)

} ;

customRender(reactElemnt , mainRoot) ;
