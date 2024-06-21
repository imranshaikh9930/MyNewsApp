
import { useParams,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import image from "../assets/news.jpeg"
import { setArticleDetails } from "./redux/fetchSlice";

const DetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

//   console.log("id",id);

  const articles = useSelector((state) => state.article.articles); // Ensure the correct path to articles slice
  const myArticle = articles.find((article) => article.title === id); // Assuming publishedAt is unique and used as id
  const detailsPage =  useSelector((state)=>state.article.articleDetails);

  dispatch(setArticleDetails(myArticle));
  
  
  const handleClick = (e) => {
    e.preventDefault();
    setTimeout(()=>{
      window.open(detailsPage.url, '_blank', 'noopener,noreferrer');
      navigate("/")
    },1000)
  };
  return (
    <>
      <div className="flex flex-col w-[80%] h-[50%] justify-center items-center mx-auto sm:mt-24 text-white">
        {detailsPage ?  (<>
          <div className="w-[80%]">
            <h1 className="text-white w-[100%]">{detailsPage.title}</h1>
            <div className="w[70%]">
              <img
                className="w-[100%] h-80 object-contain"
                src={detailsPage.urlToImage ? detailsPage.urlToImage : image}
                alt={detailsPage.title}
              />
            </div>
            <p className="text-white">{detailsPage.content}</p>
            <a className="text-white" onClick={handleClick} href={detailsPage.url}>Read More</a>
           
          </div>
       
        </>
        ):(<div className="text-white">No Details Page Available</div>
        )
          
      }
      </div>
    </>
  );
};

export default DetailsPage;
