import styled from "styled-components"
import tw from "twin.macro"

const StyledContainer = styled.main.attrs( {
  className: "bg-gray-800 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-between h-16",
    })`
      & {
        
        header {
        ${tw`bg-white shadow max-w-xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-4xl font-bold leading-tight text-gray-900`}
        }

        keglist {
        ${tw`bg-white shadow max-w-xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-4xl font-bold leading-tight text-gray-900`}
        }

          form {
        ${tw`bg-white text-center rounded py-8 px-5 shadow max-w-xs`}
          }

        input {
          ${tw`border-gray-300 mb-4 w-full border-solid border rounded py-2 px-4`}
          }

        button {
          ${tw`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded`}
        }


        
      
      }
    `

export default StyledContainer


