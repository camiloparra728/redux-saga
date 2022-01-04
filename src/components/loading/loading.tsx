import { ScaleLoader } from 'react-spinners';
import { css } from "@emotion/react";
/**
 * Component show loading
 * @returns component
 */
let Loading = () => {
  const override = css`
  display: block;
  margin: 0 auto;
  border-color: #3E10E0;
`;

    return (
        
            <div style={{ textAlign: 'center' }}>
               <ScaleLoader color={"#3E10E0"} loading={true} css={override}  />
            </div> 
            
    );
};

export default Loading;