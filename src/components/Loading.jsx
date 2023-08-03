import useJsonFetch from "../hooks/useJsonFetch";

function Loading() {
    const {data, loading, error} = useJsonFetch(process.env.REACT_APP_LOADING_URL, []);

    return (
        <div className='data loading'>
            <h3>Wait please..process</h3>
            {loading && <p className='load'>Loading...</p>}
            <div>
                {data.status}
            </div>
        </div>
    )
}

export default Loading