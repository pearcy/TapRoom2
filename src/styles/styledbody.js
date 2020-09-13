import styled from "styled-components"
import tw from "twin.macro"

const StyledBody = styled.main.attrs( {
    className: "flex flex-col h-screen justify-center items-center bg-gray-100",
      })`
        & {
          
          keglist {
          ${tw`bg-white shadow max-w-xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-4xl font-bold leading-tight text-gray-900`}
          }
          
         
        }
      `
  export default StyledBody