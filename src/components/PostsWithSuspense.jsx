import { fetchPosts } from '../api/fetchPosts';

const resource = fetchPosts('http://localhost:3000/blogs?page=1');

export default function PostsWithSuspense() {
  const posts = resource.read();
  console.log(posts);
  return (
    <section>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-7 gap-4'>
          <div className='space-y-3 md:col-span-5'>
            {posts?.blogs?.map((post) => (
              <div key={post.id} className='blog-card'>
                <img className='blog-thumb' src={post.thumbnail} alt='' />
                <div className='mt-2 relative'>
                  <a href='./single-blog.html'>
                    <h3 className='text-slate-300 text-xl lg:text-2xl'>
                      <a href='./single-blog.html'>{post.title}</a>
                    </h3>
                  </a>
                  <p className='mb-6 text-base text-slate-500 mt-1'>
                    Aenean eleifend ante maecenas pulvinar montes lorem et pede
                    dis dolor pretium donec dictum. Vici consequat justo enim.
                    Venenatis eget adipiscing luctus lorem.
                  </p>

                  <div className='flex justify-between items-center'>
                    <div className='flex items-center capitalize space-x-2'>
                      <div className='avater-img bg-indigo-600 text-white'>
                        <span className=''>S</span>
                      </div>

                      <div>
                        <h5 className='text-slate-500 text-sm'>
                          <a href='./profile.html'>Saad Hasan</a>
                        </h5>
                        <div className='flex items-center text-xs text-slate-700'>
                          <span>June 28, 2018</span>
                        </div>
                      </div>
                    </div>

                    <div className='text-sm px-2 py-1 text-slate-700'>
                      <span>100 Likes</span>
                    </div>
                  </div>

                  <div className='absolute right-0 top-0'>
                    <button>
                      <img
                        src='./assets/icons/3dots.svg'
                        alt='3dots of Action'
                      />
                    </button>

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
                </div>
              </div>
            ))}
          </div>

          <div className='md:col-span-2 h-full w-full space-y-5'>
            <div className='sidebar-card'>
              <h3 className='text-slate-300 text-xl lg:text-2xl font-semibold'>
                Most Popular 👍️
              </h3>

              <ul className='space-y-5 my-5'>
                <li>
                  <h3 className='text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer'>
                    How to Auto Deploy a Next.js App on Ubuntu from GitHub
                  </h3>
                  <p className='text-slate-600 text-sm'>
                    by
                    <a href='./profile.html'>Saad Hasan</a>
                    <span>·</span> 100 Likes
                  </p>
                </li>

                <li>
                  <h3 className='text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer'>
                    How to Auto Deploy a Next.js App on Ubuntu from GitHub
                  </h3>
                  <p className='text-slate-600 text-sm'>
                    by
                    <a href='./profile.html'>Saad Hasan</a>
                    <span>·</span> 100 Likes
                  </p>
                </li>

                <li>
                  <h3 className='text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer'>
                    How to Auto Deploy a Next.js App on Ubuntu from GitHub
                  </h3>
                  <p className='text-slate-600 text-sm'>
                    by
                    <a href='./profile.html'>Saad Hasan</a>
                    <span>·</span> 100 Likes
                  </p>
                </li>

                <li>
                  <h3 className='text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer'>
                    How to Auto Deploy a Next.js App on Ubuntu from GitHub
                  </h3>
                  <p className='text-slate-600 text-sm'>
                    by
                    <a href='./profile.html'>Saad Hasan</a>
                    <span>·</span> 100 Likes
                  </p>
                </li>
              </ul>
            </div>

            <div className='sidebar-card'>
              <h3 className='text-slate-300 text-xl lg:text-2xl font-semibold'>
                Your Favourites ❤️
              </h3>

              <ul className='space-y-5 my-5'>
                <li>
                  <h3 className='text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer'>
                    How to Auto Deploy a Next.js App on Ubuntu from GitHub
                  </h3>
                  <p className='text-slate-600 text-sm'>
                    #tailwindcss, #server, #ubuntu
                  </p>
                </li>

                <li>
                  <h3 className='text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer'>
                    How to Auto Deploy a Next.js App on Ubuntu from GitHub
                  </h3>
                  <p className='text-slate-600 text-sm'>
                    #tailwindcss, #server, #ubuntu
                  </p>
                </li>

                <li>
                  <h3 className='text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer'>
                    How to Auto Deploy a Next.js App on Ubuntu from GitHub
                  </h3>
                  <p className='text-slate-600 text-sm'>
                    #tailwindcss, #server, #ubuntu
                  </p>
                </li>

                <li>
                  <h3 className='text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer'>
                    How to Auto Deploy a Next.js App on Ubuntu from GitHub
                  </h3>
                  <p className='text-slate-600 text-sm'>
                    #tailwindcss, #server, #ubuntu
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
