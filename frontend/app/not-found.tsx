import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="not-found-container">
      <h2 className="text-uppercase">Not Found</h2>
      <p className="text-uppercase text-center">
        Could not find requested resource. <br />
        The resource is not available or under development
      </p>
      <a className="btn btn-primary" href="./">
        Return Home
      </a>
    </div>
  );
}
