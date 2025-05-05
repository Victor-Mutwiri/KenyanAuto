import './NotFound.css'
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Not Found | KenyanAuto</title>
          <meta
              name="description"
              content="Not Found" />
          <link rel="canonical" href="https://kenyanauto.vimtec.co.ke/*" />
      </Helmet>
        <i className="bi bi-exclamation-triangle-fill error-icon"/>
        <h1 className='error-message'>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <span>click to head back <a href="/">home</a></span>
    </div>
  )
}

export default NotFound