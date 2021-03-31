import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import './ResourceApp.css'

//interface that reflects the look of the data we get back from our fetch requests
export interface IRecommendations {
    id: number,
    resource_name: string,
    author_name: string | null,
    url: string | null,
    description: string | null,
    category: string | null,
    content_type: string | null,
    mark_stage: string | null,
    recommender_name: string | null,
    is_faculty: boolean | null,
    have_used: boolean | null
};

function ResourceApp() {

    //define state hooks
    const [resourceName, setResourceName] = useState("");
    const [category, setCategory] = useState("");
    const [isFaculty, setIsFaculty] = useState(false);
    const [listResources, setListResources] = useState<IRecommendations[]>([]);


    async function getResources() {
        const response = await fetch('https://server-resource.herokuapp.com/');
        const jsonData = await response.json();
        setListResources(jsonData);
    };

    useEffect(() => { getResources() }, [])

    async function submitResource() {
        const body = { resource_name: resourceName, category: category, is_faculty: isFaculty };
        await fetch('https://server-resource.herokuapp.com/', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        });
        getResources()
        setIsFaculty(false);
        setCategory("");
        setResourceName("");
        //make a fetch request to the post endpoint to submit x data into DBtable
        //then reset all inputs
    }

    return (
        <div className="ResourceApp">
            <div className="search-bar">
            <SearchBar listResources={listResources} />
            </div>
            <div className="AddResource">
                <h2>Add a Resource</h2>
                <input value={resourceName} placeholder="Input resource name..." onChange={(event) => setResourceName(event.target.value)}></input>
                <br />
                <input placeholder="Input author..."></input>
                <br />
                <input placeholder="Input URL..."></input>
                <br />
                <input placeholder="Input Description"></input>
                <br />
                <div className="category-titles">
                <label>Select Category</label>
                <select defaultValue="Python" name="subject" id="subject" onChange={(event) => setCategory(event.target.value)}>
                    <option value="Python">Python</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="TypeScript">TypeScript</option>
                </select>
                <br />
                <label>Select Format</label>
                <select name="content-type" id="content-type">
                    <option>Video</option>
                    <option>Article</option>
                    <option>Course</option>
                </select>
                <br />
                <label>Select Week</label>
                <select name="week" id="week">
                    <option>Week-1</option>
                    <option>Week-2</option>
                    <option>Week-3</option>
                </select>
                <br />
                <input placeholder="Input your name..."></input>
                <br />
                <label>Are you Faculty?</label>
                <input defaultChecked={isFaculty} type="checkbox" onChange={(event) => setIsFaculty(!isFaculty)}></input>
                <br />
                <label>Have you used it?</label>
                <select name="used-it?" id="used-it?">
                    <option>Yes</option>
                    <option>No</option>
                </select>
                <br />
                </div>
                <button onClick={() => submitResource()}>Submit</button>
            </div>
        </div>
    );
}

export default ResourceApp;
