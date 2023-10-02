import ContentLoader from "react-content-loader"

export const PizzaLoading = (props) => (
  <ContentLoader 
  speed={2}
  width={600}
  height={500}
  viewBox="0 0 600 500"
  backgroundColor="#f3f3f3"
  foregroundColor="#ecebeb"
  {...props}
>
  <circle cx="289" cy="141" r="141" /> 
  <rect x="69" y="277" rx="0" ry="0" width="8" height="1" /> 
  <rect x="60" y="312" rx="0" ry="0" width="485" height="23" /> 
  <rect x="61" y="348" rx="10" ry="10" width="486" height="76" /> 
  <rect x="63" y="470" rx="0" ry="0" width="104" height="27" /> 
  <rect x="286" y="453" rx="30" ry="30" width="260" height="41" />
</ContentLoader>
)