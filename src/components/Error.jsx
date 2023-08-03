import useJsonFetch from "../hooks/useJsonFetch";

function Error() {
    const { data, loading, error } = useJsonFetch(process.env.REACT_APP_ERROR_URL, []);
    return (
        <div className='data data-error'>
            <h3>Oops..something went wrong:(</h3>
            {loading && <p className='load'>Loading...</p>}
            <div>
                {data.status}
            </div>

        </div>

    );

}

export default Error;