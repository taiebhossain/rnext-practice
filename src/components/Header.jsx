export default function Header() {
  return (
    <div className='container'>
      <nav className='h-20  flex items-center justify-between'>
        <h2>Blogify</h2>
        <ul className='flex items-center justify-between gap-8'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}
