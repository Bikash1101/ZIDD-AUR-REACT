function customRender(reactElement , main){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href' , reactElement.props.href)
    // domElement.setAttribute('target' , reactElement.props.target)
    // main.appendChild(domElement)


    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
       if(prop === 'children') continue
       domElement.setAttribute(prop , reactElement.props[prop])
    }

    main.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click Me To Visit Google'
}

const main = document.querySelector("#root")


customRender(reactElement , main)