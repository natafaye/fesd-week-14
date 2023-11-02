export function Sidebar() {
    const sidebarItemList = ["item 1", "item 2", "item 3"]
    // mappedArray = [<div>I'm a div</div>, <div>I'm a div</div>, <div>I'm a div</div>]
    return (
        <div>
            I'm a Sidebar
            {sidebarItemList.map(sidebarItem => <SidebarItem key={sidebarItem} sidebarItem={sidebarItem} />)}
        </div>
    )
}

function SidebarItem(props) { // props = {  sidebarItem: "App", amount: "3"  }
    return (
        <p>I'm a sidebar item for {props.sidebarItem} {props.amount}</p>
    )
}