import React from 'react'

const Comment = ({name, feedback, roll}) => {
  return (
      <div className="relative p-4 m-5 border rounded-lg text-white shadow-lg">
          <div className="relative flex gap-4">
              <img src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/charlie-chaplin-icon.png" className="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20" alt="" loading="lazy"/>
                  <div className="flex flex-col w-full">
                      <div className="flex flex-row justify-between">
                          <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">{name}</p>
                          <a className="text-gray-500 text-xl" href="#"><i className="fa-solid fa-trash"></i></a>
                      </div>
                      <p className="text-gray-400 text-sm">{roll}</p>
                  </div>
          </div>
          <p className="-mt-4 text-gray-200">{feedback}</p>
      </div>
  )
}

export default Comment