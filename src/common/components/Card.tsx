import Reader from "../pages/Reader"

const Card = ( content ) => {
    const {id, thumbnailUrl, chapters } = content;

    return (
        <div className="relative mr-2 cursor-pointer">
            {thumbnailUrl ? (<img className="inline-block h-[100%] w-[100%] rounded-[5px]" 
            src={thumbnailUrl} alt={id}/>
            ) : <span className="text-white">{id}</span>
            }
            {/* {chapters.map((chapter) => (
                <Reader key={chapter.chapterId} {...chapter}/>
            ))} */}
        </div>
    );
};
export default Card;
