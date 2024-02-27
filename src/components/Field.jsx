import React from 'react';
export default function Field({ label, children, htmlFor, error }) {
  const id = htmlFor || getChildId(children);
  return (
    <div className='mb-5'>
      {label && (
        <label
          htmlFor={id}
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          {label}
        </label>
      )}
      {children}
      {error && <p className='text-sm text-red-500'>{error.message}</p>}
    </div>
  );
}

function getChildId(children) {
  const child = React.Children.only(children);

  if ('id' in child.props) {
    return child?.props?.id;
  }
}
