import React, {useState} from 'react'

const Tabs = (props) => {
    const { items } = props
    const [selectedTab, setSelectedTab] = useState(items[0])

    return (
        <div>
            <div className="tabs is-boxed is-medium">
                <ul>
                    {
                        items.map((item, k) => {
                            const isSelected = (item === selectedTab) ? 'is-active' : ''

                            const selectTab = (e) => {
                                e.preventDefault();
                                setSelectedTab(item)
                            }

                            return (
                                <li className={isSelected} key={k}><a href="/" onClick={selectTab}>{ item.header }</a></li>
                            )
                        })
                    }
                </ul>
            </div>

            <h1 className="title">{ selectedTab.content }</h1>
        </div>
    )
}

export default Tabs
