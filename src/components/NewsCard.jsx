import { getFormatDate } from "../utilis/getFormatDate";

const NewsItem = (props) => {
  const { content, title, urlToImage, publishedAt, className, dir } = props;
  return (
    <div className={className}>
      {dir === "left" ? (
        <>
          <div className="col-span-12 lg:col-span-4">
            <a href="#">
              <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">{title}</h3>
            </a>
            <p className="text-base text-[#5C5955]">{content}</p>
            <p className="mt-5 text-base text-[#5C5955]">
              {getFormatDate(new Date(publishedAt))}
            </p>
          </div>

          <div className="col-span-12 lg:col-span-8">
            {urlToImage !== null && (
              <img classNameName="w-full mt-5" src={urlToImage} alt="thumb" />
            )}
            <p className="mt-5 text-base text-[#5C5955]">
              Illustration: Karolis Strautniekas
            </p>
          </div>
        </>
      ) : (
        <>
          <img className="w-full" src={urlToImage} alt="thumb" />

          <div className="col-span-12 mt-6 md:col-span-4">
            <a href="#">
              <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">{title}</h3>
            </a>
            <p className="text-base text-[#292219]">{content}</p>
            <p className="mt-5 text-base text-[#94908C]">
              {" "}
              {getFormatDate(new Date(publishedAt))}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default NewsItem;
