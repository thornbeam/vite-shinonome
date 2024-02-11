import { Link } from 'react-router-dom';

export default function Component() {
  return (
    <>
      <div className="grid grid-cols-4 sm:grid-cols-8 mt-14 lg:mt-32 mb-16 flex items-end">
        <div className="col-span-3 sm:col-span-4 flex flex-col lg:flex-row">
          <div className="lg:hidden">
            <Link to={`tel:0123456789`}>
              0123456789
            </Link>
          </div>
          <div className="lg:hidden">
            <Link to={`mailto:info@example.com`}>
              info@example.com
            </Link>
          </div>
          <div className="whitespace-nowrap">
            © {new Date().getFullYear()}{' '}
            Thornbeam
          </div>
          <div className="hidden lg:block lg:ml-10">
            <Link to="/">Impressum</Link>
          </div>
          <div className="hidden lg:block lg:ml-10">
            <Link to="/">Datenschutz</Link>
          </div>
          <div></div>
        </div>
        <div className="col-span-1 sm:col-span-4 flex flex-col sm:flex-row">
          <div className="lg:hidden">
            <Link to="/">Impressum</Link>
          </div>
          <div className="lg:hidden sm:ml-10">
            <Link to="/">Datenschutz</Link>
          </div>
          <div className="hidden lg:block">
            <Link to={`tel:0123456789`}>
              0123456789
            </Link>
          </div>
          <div className="hidden lg:block lg:ml-10">
            <Link to={`mailto:info@example.com`}>
              info@example.com
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
