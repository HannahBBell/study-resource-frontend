import React, { useState } from 'react';
import ResourceList from './ResourceList';
import { IRecommendations } from './ResourceApp'

interface ISearchBar {
    listResources: IRecommendations[]
};


function SearchBar(props: ISearchBar) {
    const [searchInput, setSearchInput] = useState("");
    const { listResources } = props;
    let listOfThree = listResources.slice(0, 3)
    const filteredResources = listResources.filter(
        resource => {
            return (
                resource.resource_name.toLowerCase().includes(searchInput.toLowerCase())
            )
        }
    )
    function handleChange(e: any) {
        setSearchInput(e.target.value)
    }

    function resourceList() {
        if (searchInput.length <= 0) {
            return (<div>
                <ResourceList listResources={listOfThree} />
            </div>)
        }
        return (<div>
            <ResourceList listResources={filteredResources} />
        </div>)
    };

    return (<div>
        <h2>Search Resources</h2>
        <input type="search" placeholder="search" onChange={handleChange}></input>
        {resourceList()}
    </div>)
}

export default SearchBar