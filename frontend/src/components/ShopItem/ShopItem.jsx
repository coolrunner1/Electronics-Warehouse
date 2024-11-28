import "./ShopItem.css";

export const ShopItem = () => {
    return (
        <>
            <article
                className="rounded-xl light:bg-white dark:bg-item-dark p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                <a href="#">
                    <div className="relative flex items-end overflow-hidden rounded-xl">
                        <img
                            src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt="Hotel Photo"/>
                    </div>

                    <div className="mt-1 p-2">
                        <h2>Adobe Photoshop CC 2022</h2>
                        <p className="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>

                        <div className="mt-3 flex items-end justify-between">
                            <p className="mb-1.5 text-xl font-bold text-blue-500">$850</p>

                            <button className="text-sm text-blue-500">Add to cart</button>
                        </div>
                    </div>
                </a>
            </article>
        </>
    )
}