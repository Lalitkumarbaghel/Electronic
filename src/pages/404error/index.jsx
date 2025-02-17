
import { Link } from 'react-router-dom';
import ErrorImg from '../../assets/images/404.gif'
const ErrorPage = ()=>{
    return (
        <div>

        <section className="container pt-5 pb-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    
                    <div className="card p-5 border-0">
                            <div className="mb-4 text-center">
                                <img src={ErrorImg} className="img-fluid" />
                            </div>
                            <div className="text-center">
                                <p>We've send the link to your inbox. Lorem ipsum dolor sit,lorem lorem </p>
                                <Link className="btn btn-outline-danger" to='/'>Back Home</Link>
                            </div>
                        </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default ErrorPage;