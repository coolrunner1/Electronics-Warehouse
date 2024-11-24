export const ItemsContainer = () => {
    return (
        <>
            <div className="w-full lg:w-8/12">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-bold text-gray-700 md:text-2xl">Post</h1>
                    <div>
                        <select
                            className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                            <option>Latest</option>
                            <option>Last Week</option>
                        </select>
                    </div>
                </div>
                <div className="mt-6">
                    <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                        <div className="flex items-center justify-between"><span className="font-light text-gray-600">Jun 1,
                                2020</span><a href="#"
                                              className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500">Laravel</a>
                        </div>
                        <div className="mt-2"><a href="#" className="text-2xl font-bold text-gray-700 hover:underline">Build
                            Your New Idea with Laravel Freamwork.</a>
                            <p className="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
                                reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
                        </div>
                        <div className="flex items-center justify-between mt-4"><a href="#" className="text-blue-500 hover:underline">Read more</a>
                            <div><a href="#" className="flex items-center"><img
                                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                                alt="avatar" className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"/>
                                <h1 className="font-bold text-gray-700 hover:underline">Alex John</h1>
                            </a></div>
                        </div>
                    </div>
                </div>
            </div>
            </>
            )
            }