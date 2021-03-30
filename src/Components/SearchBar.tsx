import React, {useState} from 'react';
import ResourceList from './ResourceList';
import { IRecommendations } from '../App'

interface ISearchBar {
    listResources: IRecommendations[]
};



function SearchBar(props: ISearchBar) {
    const [searchInput, setSearchInput] = useState("");
    const {listResources} = props;
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
        return (<div>
            <ResourceList listResources={filteredResources} />
        </div>)
    }
    return (<div>
        <h2>Search Resources</h2>
        <input type="search" placeholder="search" onChange={handleChange}></input>
        {resourceList()}
        </div>)
}

export default SearchBar