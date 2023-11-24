import './Product.css';
import Price from './Price';

function Product({title,idx}){
   let oldPrices=["1,234","2,434","35,256","84,959"];
   let newPrices=["2,324","4,355","99,999","97,786"];
   let description=[
   [ "8,000 DPI","Programmable buttons"],
    ["intutive surface","designed for ipad Pro"], 
    ["designed for ipad pro","intutive surfaxes"],
    ["wireless","Optical Orientation"],
];
    return(
        <div className="Product" >
            <h4>{title}</h4>
          <p>Title</p>
          <p>{description[idx][0]}</p>
          <p>{description[idx][1]}</p>
          <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
        </div>
    );

}
export default Product;