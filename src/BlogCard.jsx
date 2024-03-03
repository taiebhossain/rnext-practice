/* eslint-disable react/prop-types */
export default function BlogCard({
  title,
  thumbnail,
  createdAt,
  firstname,
  lastname,
  content,
}) {
  return (
    <div className='blog-card'>
      <img className='blog-thumb' src={thumbnail} alt='' />
      <div className='mt-2 relative'>
        <a href='./single-blog.html'>
          <h3 className='text-slate-300 text-xl lg:text-2xl'>
            <a href='./single-blog.html'>{title}</a>
          </h3>
        </a>
        <p className='mb-6 text-base text-slate-500 mt-1'>{content}</p>

        {/* <!-- Meta Informations --> */}
        <div className='flex justify-between items-center'>
          <div className='flex items-center capitalize space-x-2'>
            <div className='avater-img bg-indigo-600 text-white'>
              <span className=''>S</span>
            </div>

            <div>
              <h5 className='text-slate-500 text-sm'>
                <a href='./profile.html'>{(firstname, lastname)}</a>
              </h5>
              <div className='flex items-center text-xs text-slate-700'>
                <span>{createdAt}</span>
              </div>
            </div>
          </div>

          <div className='text-sm px-2 py-1 text-slate-700'>
            <span>100 Likes</span>
          </div>
        </div>

        {/* <!-- action dot --> */}
        <div className='absolute right-0 top-0'>
          <button>
            <img src='./assets/icons/3dots.svg' alt='3dots of Action' />
          </button>

          {/* <!-- Action Menus Popup --> */}
          <div className='action-modal-container'>
            <button className='action-menu-item hover:text-lwsGreen'>
              <img src='./assets/icons/edit.svg' alt='Edit' />
              Edit
            </button>
            <button className='action-menu-item hover:text-red-500'>
              <img src='./assets/icons/delete.svg' alt='Delete' />
              Delete
            </button>
          </div>
        </div>
        {/* <!-- action dot ends --> */}
      </div>
    </div>
  );
}
