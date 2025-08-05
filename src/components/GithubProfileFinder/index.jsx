import { useEffect, useState } from "react";
import './styles.css';
import User from "./user";


export default function GithubProfileFinder() {

    const [userName, setUserName] = useState('Balint90');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);

    function handleSearch() {
        fetchGithubUserData();
    }

    async function fetchGithubUserData() {
        setLoading(true);
        const res = await fetch(`https://api.github.com/users/${userName}`);

        const data = await res.json();

        if (data) {
            setUserData(data);
            setUserName('');
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchGithubUserData()
    }, []);

    if (loading) {
        return <h1>Loading... Please wait!</h1>;
    }

    return (
        <div className="github-profile-container">
            <div className="input-wrapper">
                <form class="d-flex" role="search">
                    <input
                        class="form-control me-2"
                        name="search-by-username"
                        type="search"
                        placeholder="Search Github Profiles"
                        aria-label="Search"
                        width={"200px"}
                        value={userName}
                        onChange={(event) => setUserName(event.target.value)} />
                    <button
                        class="btn btn-outline-success"
                        type="submit"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </form>
            </div>
            {
                userData !== null ? <User user={userData} /> : null
            }
        </div>
    );
}