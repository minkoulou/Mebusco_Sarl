import { Link } from "react-router-dom";
function Button( {chemin,nom,bg,color}){     
  return ( 
    < Link to={`${chemin}`} className = {` rounded-2xl dark:bg-red-500 dark:text-white border-2 border-navy ${bg} px-6 py-3 font-semibold uppercase ${color} transition-all duration-300 translate-x-[-4px] translate-y-[-4px] text-center rounded-md shadow-[4px_2px_5px_navy] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none `} > 
      {nom}
    </ Link >
  ) ;
} ;

export default Button ;