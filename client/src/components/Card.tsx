
const Card = ( content ) => {
    const {contentId, thumbnail} = content;

    return (
        <div className="relative mr-2 cursor-pointer">
            {thumbnail ? (<img className="inline-block h-[100%] w-[100%] rounded-[5px]" src={thumbnail} alt={contentId}/>
            ) : <span className="text-white">{contentId}</span>
            }
        </div>
    );
};
export default Card;
