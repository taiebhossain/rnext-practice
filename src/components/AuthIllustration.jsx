import authLogo from '../assets/images/auth_illustration.png';
export default function AuthIllustration() {
  return (
    <div>
      <img
        className='mb-12 max-w-full max-lg:hidden'
        src={authLogo}
        alt='auth_illustration'
      />
      <div>
        <h1 className='mb-3 text-4xl font-bold lg:text-[40px]'>Facehook</h1>
        <p className='max-w-[452px] text-gray-600/95 lg:text-lg'>
          Create a social media app with features like, showing the post, post
          details, reactions, comments and profile.
        </p>
      </div>
    </div>
  );
}
