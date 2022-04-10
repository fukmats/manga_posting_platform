

const Card = ( content: { [field: string]: any }) => {
    const {thumbnail, title} = content;
    // const thumbnail = "https://1.bp.blogspot.com/-jlZlCg-8FAM/Xub_u8HTD1I/AAAAAAABZis/ZhUI05AZBEQpVinedZ6Xy-eIucmNuY2SQCNcBGAsYHQ/s400/pose_pien_uruuru_man.png"
    // const title = "ピエン1"

    return (
        <div className="relative overflow-hidden mr-2 cursor-pointer">
            {thumbnail ? (<img className="inline-block h-[100%] w-[100%] rounded-[5px]" src={thumbnail} alt={title}/>
            ) : <span className="text-white">{title}</span>
            }
        </div>
    );
};
export default Card;
