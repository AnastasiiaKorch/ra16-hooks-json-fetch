import useJsonFetch from "../hooks/useJsonFetch";

function Data() {
    const { data, loading, error } = useJsonFetch(process.env.REACT_APP_DATA_URL, []);

    return (
        <div className='data'>
            <h3>Success!</h3>
            {loading && <p className='load'>Loading...</p>}
            <div>{data.status}</div>


        </div>
    );
}
export default Data;